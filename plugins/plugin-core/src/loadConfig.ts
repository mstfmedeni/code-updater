import { cosmiconfig } from "cosmiconfig";
import { TypeScriptLoader } from "cosmiconfig-typescript-loader";
import { getCwd } from "./cwd.js";
import type { Config } from "./types.js";

export const loadConfig = async (): Promise<Config | null> => {
  const result = await cosmiconfig("code-updater", {
    stopDir: getCwd(),
    searchPlaces: [
      "code-updater.config.js",
      "code-updater.config.cjs",
      "code-updater.config.ts",
      "code-updater.config.cts",
      "code-updater.config.mjs",
      "code-updater.config.cjs",
    ],
    ignoreEmptySearchPlaces: false,
    loaders: {
      ".ts": TypeScriptLoader(),
      ".mts": TypeScriptLoader(),
      ".cts": TypeScriptLoader(),
    },
  }).search();

  if (!result?.config) {
    return null;
  }

  return result.config as Config;
};
