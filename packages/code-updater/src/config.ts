import type { Config } from "@code-updater/plugin-core";

export const defineConfig = async (
  config: Config | (() => Config) | (() => Promise<Config>),
): Promise<Config> => (typeof config === "function" ? await config() : config);
