import { get } from "../config/config";

const APP_ID = get("APP_ID");
const BASE_URI = `https://data.mongodb-api.com/app/${APP_ID}/endpoint/data/v1/action`;

export const uri = (endpoint: string) => `${BASE_URI}/${endpoint}`;
