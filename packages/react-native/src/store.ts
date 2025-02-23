import { useSyncExternalStore } from "react";

export type CodeUpdaterState = {
  progress: number;
  isBundleUpdated: boolean;
};

const createCodeUpdaterStore = () => {
  let state: CodeUpdaterState = {
    progress: 0,
    isBundleUpdated: false,
  };

  const getSnapshot = () => {
    return state;
  };

  const listeners = new Set<() => void>();

  const emitChange = () => {
    for (const listener of listeners) {
      listener();
    }
  };

  const setProgress = (progress: number) => {
    state = {
      isBundleUpdated: progress === 1,
      progress,
    };
    emitChange();
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getSnapshot, setProgress, subscribe };
};

export const hotUpdaterStore = createCodeUpdaterStore();

export const useCodeUpdaterStore = () => {
  return useSyncExternalStore(
    hotUpdaterStore.subscribe,
    hotUpdaterStore.getSnapshot,
    hotUpdaterStore.getSnapshot,
  );
};
