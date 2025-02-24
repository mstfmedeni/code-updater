import { cosmiconfig } from "cosmiconfig";
import { TypeScriptLoader } from "cosmiconfig-typescript-loader";
import { getCwd } from "./cwd.js";
import type { Config, Platform } from "./types.js";

export interface CodeUpdaterConfigOptions {
  platform: Platform | "console";
}

export const loadConfig = async (
  options: CodeUpdaterConfigOptions,
): Promise<Config | null> => {
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

  if (typeof result.config === "function") {
    return await result.config(options);
  }

  return result.config as Config;
};
