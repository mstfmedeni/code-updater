import * as path from "node:path";
import {
  createTransformerDiff,
  createTransformerHighlight,
  pluginShiki,
} from "@rspress/plugin-shiki";
import { defineConfig } from "rspress/config";

export default defineConfig({
  plugins: [
    pluginShiki({
      transformers: [createTransformerHighlight(), createTransformerDiff()],
    }),
  ],
  root: path.join(__dirname, "docs"),
  title: "Code Updater",
  icon: "/logo.png",
  logoText: "Code Updater",
  logo: {
    light: "/logo.png",
    dark: "/logo.png",
  },
  base: "/code-updater/",
  markdown: {
    defaultWrapCode: true,
  },
  globalStyles: path.join(__dirname, "styles/index.css"),
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/mstfmedeni/code-updater",
      },
    ],
  },
});
