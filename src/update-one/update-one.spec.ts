import { updateOne } from "./update-one";

const modifiedCount = 0;
const matchedCount = 0;

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
    doFetch: () => Promise.resolve({ modifiedCount, matchedCount }),
  }),
  { virtual: true },
);

describe("UpdateOne", () => {
  it("should updateOne", async () => {
    const expected = {matchedCount, modifiedCount};

    const result = await updateOne("FAKE", {}, {});

    expect(result).toEqual(expected);
  });
});
