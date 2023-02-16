import { find } from "./find";

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
    doFetch: () => Promise.resolve({ documents: [] }),
  }),
  { virtual: true },
);

describe("Find", () => {
  it("shoould find", async () => {
    const result = await find("FAKE", { filter: {} });

    expect(result).toBeTruthy();
  });
});
