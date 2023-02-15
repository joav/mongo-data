type JsonResponse<T> = { json: () => Promise<T> };
type FetchFn<T = object> = (url: string, options: object) => Promise<JsonResponse<T>>;

let fetchFn: FetchFn = () => Promise.reject("Fetch function not configured");

export const setFetchFn = (fn: FetchFn) => {
  fetchFn = fn;
};

export const getFetchFn = <T>(): FetchFn<T> => fetchFn as FetchFn<T>;

export async function doFetch<T = object>(url: string, options: object) {
  const dataResponse = await getFetchFn<T>()(url, options);
  return dataResponse.json();
}
