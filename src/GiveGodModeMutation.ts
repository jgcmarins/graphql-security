import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import { fromGlobalId, mutationWithClientMutationId } from 'graphql-relay';

import * as UserLoader from '../../UserLoader';
import UserType from '../../UserType';

import { GOD_ROLE } from '../roles';

const mutation = mutationWithClientMutationId({
  name: 'GiveGodMode',
  inputFields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
  },
  mutateAndGetPayload: async (args, context) => {
    const { user } = context;
    const { id } = args;

    /*
    *
    * apply God Mode mutation
    *
    * */


    return {
      id: fromGlobalId(id).id,
      error: null,
    };
  },
  outputFields: {
    user: {
      type: UserType,
      resolve: (obj, args, context) => UserLoader.load(context, obj.id),
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});

export default {
  ...mutation,
  requiredRoles: [GOD_ROLE],
};