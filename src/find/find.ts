import { createOptions, createQuery, doFetch, uri } from "../fetch";

export async function find<T = object>(
  collection: string,
  findData: { filter: object; projection?: object; sort?: object },
): Promise<T[]> {
  const query = createQuery(collection, findData);
  const options = createOptions(query);
  const { documents } = await doFetch<{ documents: T[] }>(uri("find"), options);
  return documents;
}
