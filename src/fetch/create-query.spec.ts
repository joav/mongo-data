import { createQuery } from "./create-query";

const DATA_VAR = "FAKE";

jest.mock(
  "../config/config",
  () => ({
    get: () => DATA_VAR
  }),
  { virtual: true }
);

describe("Fetch CreateQuery", () => {
  it("should create correct query", () => {
    const collection = "FAKE";
    const data = {foo: "bar"};
    const expected = {
      collection,
      database: DATA_VAR,
      dataSource: DATA_VAR,
      ...data
    };

    const result = createQuery(collection, data);

    expect(result).toEqual(expected);
  });
});
