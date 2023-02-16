import { createOptions, createQuery, doFetch, uri } from "../fetch";

export async function findOne<T = object>(
  collection: string,
  findData: { filter: object; projection?: object },
): Promise<T | null> {
  console.log("Call findOne");
  const query = createQuery(collection, findData);
  const options = createOptions(query);
  const { document } = await doFetch<{ document: T | null }>(uri("findOne"), options);
  console.log("Success call findOne");
  return document;
}
