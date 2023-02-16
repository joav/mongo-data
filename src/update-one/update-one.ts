import { createOptions, createQuery, doFetch, uri } from "../fetch";

type Result = {modifiedCount: number, matchedCount: number, upsertedId?: string};

export async function updateOne(collection: string, filter: object, update: object): Promise<Result> {
  const query = createQuery(collection, { filter, update });
  const options = createOptions(query);
  const response = await doFetch<Result>(uri('updateOne'), options);
  return response;
}
