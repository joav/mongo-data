import { createOptions, createQuery, doFetch, uri } from "../fetch";

export async function insertOne(collection: string, document: object): Promise<string> {
  console.log("Call insertOne");
  const query = createQuery(collection, { document });
  const options = createOptions(query);
  const { insertedId } = await doFetch<{ insertedId: string }>(uri("insertOne"), options);
  console.log("Success call insertOne");
  return insertedId;
}
