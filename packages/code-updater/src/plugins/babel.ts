import fs from "fs";
import path from "path";
import type { PluginObj } from "@babel/core";
import type { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { uuidv7 } from "uuidv7";

export default function replaceCodeUpdaterBundleId(): PluginObj {
  const buildOutDir = process.env["BUILD_OUT_DIR"];

  if (!buildOutDir) {
    return {
      name: "replace-code-updater-bundle-id",
      visitor: {
        MemberExpression(path: NodePath<t.MemberExpression>) {
          if (
            t.isIdentifier(path.node.object, { name: "CodeUpdater" }) &&
            t.isIdentifier(path.node.property, {
              name: "CODE_UPDATER_BUNDLE_ID",
            })
          ) {
            path.replaceWith(
              t.stringLiteral("00000000-0000-0000-0000-000000000000"),
            );
          }
        },
      },
    };
  }

  const bundleIdPath = path.join(buildOutDir, "BUNDLE_ID");

  let bundleId = uuidv7();

  if (fs.existsSync(bundleIdPath)) {
    bundleId = fs.readFileSync(bundleIdPath, "utf-8");
  } else {
    fs.writeFileSync(bundleIdPath, bundleId);
  }

  return {
    name: "replace-code-updater-bundle-id",
    visitor: {
      MemberExpression(path: NodePath<t.MemberExpression>) {
        if (
          t.isIdentifier(path.node.object, { name: "CodeUpdater" }) &&
          t.isIdentifier(path.node.property, {
            name: "CODE_UPDATER_BUNDLE_ID",
          })
        ) {
          path.replaceWith(t.stringLiteral(bundleId));
        }
      },
    },
  };
}
