import { createOptions, createQuery, doFetch, uri } from "../fetch";

export async function aggregate<T = object>(collection: string, pipeline: object[]): Promise<T[]> {
  const query = createQuery(collection, { pipeline });
  const options = createOptions(query);
  const { documents } = await doFetch<{ documents: T[] }>(uri("aggregate"), options);
  return documents;
}
