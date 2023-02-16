import { deleteMany } from "./delete-many";

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
    doFetch: () => Promise.resolve({ deletedCount: 0 }),
  }),
  { virtual: true },
);

describe("DeleteMany", () => {
  it("should deleteMany", async () => {
    const result = await deleteMany("FAKE", {});

    expect(result).toEqual(0);
  });
});
