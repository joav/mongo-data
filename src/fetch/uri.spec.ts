const DATA_VAR = "FAKE";
import { uri } from "./uri";

jest.mock(
  "../config/config",
  () => ({
    get: () => DATA_VAR,
  }),
  { virtual: true },
);

describe("Fetch Uri", () => {
  it("should create correct uri", () => {
    const endpoint = "FAKE";
    const expected = `https://data.mongodb-api.com/app/${DATA_VAR}/endpoint/data/v1/action/${endpoint}`;

    const result = uri(endpoint);

    expect(result).toEqual(expected);
  });
});
