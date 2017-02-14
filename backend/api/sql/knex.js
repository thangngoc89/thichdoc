import knex from "knex";
import knexfile from "../../knexfile";

const config = process.env.NODE_ENV === "production"
  ? knexfile.production
  : knexfile.development;
export default knex(config);
