import { createOptions, createQuery, doFetch, uri } from "../fetch";

export async function deleteMany(collection: string, filter: object): Promise<number> {
  const query = createQuery(collection, { filter });
  const options = createOptions(query);
  const { deletedCount } = await doFetch<{ deletedCount: number }>(uri("deleteMany"), options);
  return deletedCount;
}
