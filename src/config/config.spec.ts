import { config, get, getAll } from "./config";

describe("Config", () => {
  it("should config", () => {
    const configVars = {
      DATA_API_KEY: "FAKE",
      APP_ID: "FAKE",
      DATA_SOURCE: "FAKE",
      BASE_URI: "FAKE",
      DATABASE: "FAKE",
    };

    config(configVars);

    expect(getAll()).toEqual(configVars);
  });

  it("should get var", () => {
    const APP_ID = "FAKE";
    config({
      APP_ID,
    });

    const result = get("APP_ID");

    expect(result).toEqual(APP_ID);
  });
});
