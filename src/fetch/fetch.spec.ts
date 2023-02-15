import { doFetch, getFetchFn, setFetchFn } from "./fetch";

describe("Fetch", () => {
  it("should get fetchFn with error", async () => {
    const fn = getFetchFn();
    try {
      await fn("FAKE", {});
    } catch (error) {
      expect(error).toEqual("Fetch function not configured");
    }
  });

  it("should set fetchFn", async () => {
    const ERROR = "REJECT";
    const fn = () => Promise.reject(ERROR);
    setFetchFn(fn);
    const fnSeted = getFetchFn();
    
    expect(fnSeted).toEqual(fn);
    try {
      await fnSeted("FAKE", {});
    } catch (error) {
      expect(error).toEqual(ERROR);
    }
  });

  it("should do fetch", async () => {
    const expected = {foo: "bar"};
    const response = {json: () => Promise.resolve(expected)};
    const fn = () => Promise.resolve(response);
    setFetchFn(fn);

    const result = await doFetch("FAKE", {});

    expect(result).toEqual(expected);
  });
});
