import { checkForUpdate } from "./checkForUpdate";
import {
  addListener,
  getAppVersion,
  getBundleId,
  reload,
  updateBundle,
} from "./native";
import { runUpdateProcess } from "./runUpdateProcess";
import { codeUpdaterStore } from "./store";
import { wrap } from "./wrap";

export type { CodeUpdaterConfig } from "./wrap";
export type { CodeUpdaterEvent } from "./native";

export * from "./store";

addListener("onProgress", ({ progress }) => {
  codeUpdaterStore.setProgress(progress);
});

export const CodeUpdater = {
  wrap,

  reload,
  getAppVersion,
  getBundleId,
  addListener,

  checkForUpdate,
  /**
   * Manually checks and applies updates for the application.
   *
   * @param {RunUpdateProcessConfig} config - Update process configuration
   * @param {string} config.source - Update server URL
   * @param {Record<string, string>} [config.requestHeaders] - Request headers
   * @param {boolean} [config.reloadOnForceUpdate=false] - Whether to automatically reload on force update
   *
   * @example
   * ```ts
   * // Auto reload on force update
   * const result = await CodeUpdater.runUpdateProcess({
   *   source: "<your-update-server-url>",
   *   requestHeaders: {
   *     // Add necessary headers
   *   },
   *   reloadOnForceUpdate: true
   * });
   *
   * // Manually handle reload on force update
   * const result = await CodeUpdater.runUpdateProcess({
   *   source: "<your-update-server-url>",
   *   reloadOnForceUpdate: false
   * });
   *
   * if(result.status !== "UP_TO_DATE" && result.shouldForceUpdate) {
   *   CodeUpdater.reload();
   * }
   * ```
   *
   * @returns {Promise<RunUpdateProcessResponse>} The result of the update process
   */
  runUpdateProcess,
  updateBundle,
};
