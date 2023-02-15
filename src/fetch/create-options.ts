import { get } from "../config/config";

export const createOptions = (query: any) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": get("DATA_API_KEY"),
  },
  body: JSON.stringify(query),
});
