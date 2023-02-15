import { get } from "../config/config";

const BASE_URI = get("BASE_URI");

export const uri = (endpoint: string) => `${BASE_URI}/${endpoint}`;
