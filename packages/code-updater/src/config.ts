import type {
  CodeUpdaterConfigOptions,
  Config,
} from "@code-updater/plugin-core";

export const defineConfig = async (
  config:
    | Config
    | ((options: CodeUpdaterConfigOptions) => Config)
    | ((options: CodeUpdaterConfigOptions) => Promise<Config>),
) => {
  return config;
};
