import graphqlFields from "graphql-fields";
import memoize from "memoizejs";

export const orgs = memoize(graphqlFields);

export default (info, field) => {
  const fields = orgs(info);
  return Boolean(Object.keys(fields).find(f => f === field));
};
