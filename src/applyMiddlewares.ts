import { addMiddleware } from 'graphql-add-middleware';

import { GraphQLSchema } from 'graphql';

import requiredRolesMutation from './middleware/requiredRolesMutation';

export default function applyMiddlewares(schema: GraphQLSchema) {
  addMiddleware(schema, 'Mutation', requiredRolesMutation);
}
