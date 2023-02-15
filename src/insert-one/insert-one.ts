import { createOptions } from "../fetch/create-options";
import { createQuery } from "../fetch/create-query";
import { doFetch } from "../fetch/fetch";
import { uri } from "../fetch/uri";

export async function insertOne(collection: string, document: object): Promise<string> {
  console.log("Call insertOne");
  const query = createQuery(collection, { document });
  const options = createOptions(query);
  const { insertedId } = await doFetch<{ insertedId: string }>(uri("insertOne"), options);
  console.log("Success call insertOne");
  return insertedId;
}
