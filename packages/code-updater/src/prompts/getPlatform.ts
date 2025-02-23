import * as p from "@clack/prompts";
import type { Platform } from "@code-updater/core";

export const getPlatform = async (message: string) => {
  const platform = await p.select({
    message: message,
    initialValue: "ios" as Platform,
    options: [
      { label: "ios", value: "ios" },
      { label: "android", value: "android" },
    ],
  });

  if (typeof platform !== "string") {
    throw new Error("Invalid platform");
  }

  return platform;
};
