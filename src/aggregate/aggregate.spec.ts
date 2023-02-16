import { aggregate } from "./aggregate";

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

describe("Aggregate", () => {
  it("should aggregate", async () => {
    const result = await aggregate("FAKE", [{ $match: {} }]);

    expect(result).toBeTruthy();
  });
});
