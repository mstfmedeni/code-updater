import { NativeEventEmitter, NativeModules, Platform } from "react-native";

const NIL_UUID = "00000000-0000-0000-0000-000000000000";

const CodeUpdater = {
  CODE_UPDATER_BUNDLE_ID: NIL_UUID,
};

const LINKING_ERROR =
  // biome-ignore lint/style/useTemplate: <explanation>
  `The package '@code-updater/react-native' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: "" }) +
  "- You rebuilt the app after installing the package\n" +
  "- You are not using Expo Go\n";

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const CodeUpdaterModule = isTurboModuleEnabled
  ? require("./specs/NativeCodeUpdater").default
  : NativeModules.CodeUpdater;

const CodeUpdaterNative = CodeUpdaterModule
  ? CodeUpdaterModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );

export type CodeUpdaterEvent = {
  onProgress: {
    progress: number;
  };
};

export const addListener = <T extends keyof CodeUpdaterEvent>(
  eventName: T,
  listener: (event: CodeUpdaterEvent[T]) => void,
) => {
  const eventEmitter = new NativeEventEmitter(CodeUpdaterNative);
  const subscription = eventEmitter.addListener(eventName, listener);

  return () => {
    subscription.remove();
  };
};

/**
 * Downloads files from given URLs.
 *
 * @param {string} bundleId - identifier for the bundle id.
 * @param {string | null} zipUrl - zip file URL. If null, it means rolling back to the built-in bundle
 * @returns {Promise<boolean>} Resolves with true if download was successful, otherwise rejects with an error.
 */
export const updateBundle = (
  bundleId: string,
  zipUrl: string | null,
): Promise<boolean> => {
  return CodeUpdaterNative.updateBundle(bundleId, zipUrl);
};

/**
 * Fetches the current app version.
 */
export const getAppVersion = (): Promise<string | null> => {
  return CodeUpdaterNative.getAppVersion();
};

/**
 * Reloads the app.
 */
export const reload = () => {
  requestAnimationFrame(() => {
    CodeUpdaterNative.reload();
  });
};

/**
 * Fetches the current bundle version id.
 *
 * @async
 * @returns {Promise<string>} Resolves with the current version id or null if not available.
 */
export const getBundleId = (): string => {
  return CodeUpdater.CODE_UPDATER_BUNDLE_ID;
};
