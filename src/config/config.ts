type ConfigVarsKey = "DATA_API_KEY" | "APP_ID" | "DATA_SOURCE" | "BASE_URI" | "DATABASE";

type ConfigVars = {
  [key in ConfigVarsKey]: string;
};

const configVars: ConfigVars = {
  DATA_API_KEY: "",
  APP_ID: "",
  DATA_SOURCE: "",
  BASE_URI: "",
  DATABASE: "",
};

const isConfigVarsKey = (key: string): key is ConfigVarsKey => key in configVars;

export function config(data: Partial<ConfigVars>) {
  const dataMap = new Map(Object.entries(data));
  for (const [key, value] of dataMap) {
    if (isConfigVarsKey(key)) {
      set(key, value);
    }
  }
}

export const get = (configVarKey: ConfigVarsKey) => configVars[configVarKey];
export const getAll = () => ({ ...configVars });
export const set = (configVarKey: ConfigVarsKey, value: string) => {
  configVars[configVarKey] = value;
};
