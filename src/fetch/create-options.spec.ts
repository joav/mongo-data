import { createOptions } from "./create-options";

const DATA_API_KEY = "FAKE";

jest.mock(
  "../config/config",
  () => ({
    get: () => DATA_API_KEY
  }),
  { virtual: true }
);

describe("Fetch CreateOptions", () => {
  it("should create correct options", () => {
    const expected = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": DATA_API_KEY
      },
      body: "{}"
    };
    
    const result = createOptions({});

    expect(result).toEqual(expected);
  });
});
