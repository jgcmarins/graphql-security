import 'isomorphic-fetch';

import { print } from 'graphql/language';

import { graphiqlKoa } from 'apollo-server-koa';
import { koaPlayground } from 'graphql-playground-middleware';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import graphqlHttp from 'koa-graphql';
import koaLogger from 'koa-logger';
import Router from 'koa-router';

import { GRAPHQL_PORT } from '../common/config';
import { schema } from './schema';
import { getUser } from '../authorization';

const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log('koa error:', err);
    ctx.status = err.status || 500;
    ctx.app.emit('error', err, ctx);
  }
});

app.on('error', err => {
  console.error('Error while answering request', { error: err });
});

app.use(koaLogger());

if (!(process.env.APP_ENV === 'production')) {
  router.all(
    '/playground',
    koaPlayground({
      endpoint: '/graphql',
    }),
  );
}

app.use(async (ctx, next) => {
  const { authorization } = ctx.header;

  const user = await getUser(authorization);

  /*
  *
  * some logic
  *
  * */

  ctx.user = user;

  await next();
});

router.all(
  '/graphql',
  convert(
    graphqlHttp(async (request, ctx, koaContext) => {
      const { user } = koaContext;
      const { authorization } = request.header;

      console.info('Handling request', {
        authorization,
      });

      return {
        schema,
        rootValue: {
          request: ctx.req,
        },
        context: {
          user,
        },
        extensions: ({ document, variables, result }) => {
          if (process.env.NODE_ENV === 'development') {
            console.log(print(document));
            console.log(variables);
            console.log(JSON.stringify(result, null, 2));
          }
        },
        formatError: error => {
          if (error.path || error.name !== 'GraphQLError') {
            console.error(error);
          } else {
            console.log(`GraphQLWrongQuery: ${error.message}`);
          }

          if (error.name && error.name === 'BadRequestError') {
            ctx.status = 400;
            ctx.body = 'Bad Request';
            return {
              message: 'Bad Request',
            };
          }

          console.error('GraphQL Error', { error });

          return {
            message: error.message,
            locations: error.locations,
            stack: error.stack,
          };
        },
      };
    }),
  ),
);

if (!(process.env.APP_ENV === 'production')) {
  router.all(
    '/graphiql',
    graphiqlKoa({
      endpointURL: '/graphql',
      subscriptionsEndpoint: `ws://localhost:${GRAPHQL_PORT}/subscriptions`,
    }),
  );
}
app.use(router.routes()).use(router.allowedMethods());

export default app;
