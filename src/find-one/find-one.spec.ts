import { findOne } from "./find-one";

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
    doFetch: () => Promise.resolve({ document: {} }),
  }),
  { virtual: true },
);

describe("FindOne", () => {
  it("should findOne", async () => {
    const result = await findOne("FAKE", { filter: {} });

    expect(result).toBeTruthy();
  });
});
