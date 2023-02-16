import { deleteOne } from "./delete-one";

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

describe("DeleteOne", () => {
  it("should deleteOne", async () => {
    const result = await deleteOne("FAKE", {});

    expect(result).toEqual(0);
  });
});
