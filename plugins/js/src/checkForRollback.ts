import { type Bundle, NIL_UUID } from "@code-updater/core";
import { isNullable } from "./utils";

export const checkForRollback = (
  bundles: Bundle[],
  currentBundleId: string,
) => {
  if (currentBundleId === NIL_UUID) {
    return false;
  }

  if (bundles.length === 0) {
    return true;
  }

  const enabled = bundles.find((item) => item.id === currentBundleId)?.enabled;
  const availableOldVersion = bundles.find(
    (item) => item.id.localeCompare(currentBundleId) < 0 && item.enabled,
  )?.enabled;

  if (isNullable(enabled)) {
    return Boolean(availableOldVersion);
  }
  return !enabled;
};
