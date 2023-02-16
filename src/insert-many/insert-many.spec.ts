import { insertMany } from "./insert-many";

const insertedIds = ["FAKE"];
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
    doFetch: () => Promise.resolve({ insertedIds }),
  }),
  { virtual: true },
);

describe("InsertMany", () => {
  it("should insertMany", async () => {
    const result = await insertMany("FAKE", [{}]);

    expect(result).toEqual(insertedIds);
  });
});
