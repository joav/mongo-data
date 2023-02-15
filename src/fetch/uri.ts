import { get } from "../config/config";

export const uri = (endpoint: string) => `${get("BASE_URI")}/${endpoint}`;
