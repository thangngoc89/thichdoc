const graphqlFields = require("graphql-fields");
const memoize = require("memoizejs");

const orgs = memoize(graphqlFields);

const hasField = (info, field) => {
  const fields = orgs(info);
  return Boolean(Object.keys(fields).find(f => f === field));
};
exports.hasField = hasField;
exports.graphqlFields = orgs;
