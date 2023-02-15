import { insertOne } from "./insert-one";

const insertedId = "FAKE";
jest.mock(
  "../fetch/create-query",
  () => ({
    createQuery: () => ({}),
  }),
  { virtual: true },
);
jest.mock(
  "../fetch/create-options",
  () => ({
    createOptions: () => ({}),
  }),
  { virtual: true },
);
jest.mock(
  "../fetch/uri",
  () => ({
    uri: () => "",
  }),
  { virtual: true },
);
jest.mock(
  "../fetch/fetch",
  () => ({
    doFetch: () => Promise.resolve({ insertedId }),
  }),
  { virtual: true },
);

describe("InsertOne", () => {
  it("should insertOne", async () => {
    const result = await insertOne("FAKE", {});

    expect(result).toEqual(insertedId);
  });
});
