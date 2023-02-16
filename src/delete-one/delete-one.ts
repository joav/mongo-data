import { createOptions, createQuery, doFetch, uri } from "../fetch";

export async function deleteOne(collection: string, filter: object): Promise<number> {
  const query = createQuery(collection, { filter });
  const options = createOptions(query);
  const { deletedCount } = await doFetch<{ deletedCount: number }>(uri("deleteOne"), options);
  return deletedCount;
}
