import { createOptions, createQuery, doFetch, uri } from "../fetch";

type Result = { modifiedCount: number; matchedCount: number; upsertedId?: string };

export async function replaceOne(
  collection: string,
  filter: object,
  replacement: object,
  upsert?: boolean,
): Promise<Result> {
  console.log("Call replaceOne");
  const query = createQuery(collection, { filter, replacement, upsert });
  const options = createOptions(query);
  const result = await doFetch<Result>(uri("replaceOne"), options);
  console.log("Success call replaceOne");
  return result;
}
