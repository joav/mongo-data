import { get } from "../config/config";

export const createQuery = (collection: string, rest: object): object => ({
  collection,
  database: get("DATABASE"),
  dataSource: get("DATA_SOURCE"),
  ...rest,
});
