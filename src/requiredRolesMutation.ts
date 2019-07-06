import { GraphQLString, GraphQLResolveInfo } from 'graphql';

import { GraphQLContext } from '../types';
import { hasRole } from '../acl';
import { getMutationFields } from './utils';

export default async function requiredRolesMutation(
  root: any,
  args: { [argName: string]: any },
  context: GraphQLContext,
  info: GraphQLResolveInfo,
  next: () => void,
) {
  const mutationFields = getMutationFields(info, info.fieldName);

  if (!mutationFields) {
    return next();
  }

  const { requiredRoles } = mutationFields;

  if (!requiredRoles || !Array.isArray(requiredRoles)) {
    return next();
  }

  for (const requiredRole of requiredRoles) {
    if (/* hasRole */) {
      return next();
    }
  }

  const fields = info.returnType.getFields();
  if (fields.error && fields.error.type === GraphQLString) {
    return {
      error: 'Not Allowed',
    };
  }

  throw new Error('Not Allowed');
}