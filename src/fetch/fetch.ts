type JsonResponse = { json: () => Promise<any> };
type FetchFn = (url: string, options: any) => Promise<JsonResponse>;

let fetchFn: FetchFn = () => Promise.reject("Fetch function not configured");

export const setFetchFn = (fn: FetchFn) => { fetchFn = fn };

export const getFetchFn = () => fetchFn;

export async function doFetch(url: string, options: any) {
  const dataResponse = await fetchFn(url, options);
  return dataResponse.json();
}
