import { createOptions, createQuery, doFetch, uri } from "../fetch";

type Result = { modifiedCount: number; matchedCount: number; upsertedId?: string };

export async function updateOne(collection: string, filter: object, update: object, upsert?: boolean): Promise<Result> {
  const query = createQuery(collection, { filter, update, upsert });
  const options = createOptions(query);
  const response = await doFetch<Result>(uri("updateOne"), options);
  return response;
}
