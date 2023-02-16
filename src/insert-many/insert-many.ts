import { createOptions, createQuery, doFetch, uri } from "../fetch";

export async function insertMany(collection: string, documents: object[]): Promise<string[]> {
  console.log("Call insertMany");
  const query = createQuery(collection, { documents });
  const options = createOptions(query);
  const { insertedIds } = await doFetch<{ insertedIds: string[] }>(uri("insertMany"), options);
  console.log("Success call insertMany");
  return insertedIds;
}
