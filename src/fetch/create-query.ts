import { get } from "../config/config";

export const createQuery = (collection: string, rest: any): any => ({
  collection,
  database: get("DATABASE"),
  dataSource: get("DATA_SOURCE"),
  ...rest
});
