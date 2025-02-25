  # Code Updater
  
[![NPM](https://img.shields.io/npm/v/code-updater)](https://www.npmjs.com/package/code-updater)

  A self-hostable OTA update solution for React Native **(Alternative to CodePush)**

  ![code-updater](https://raw.githubusercontent.com/mstfmedeni/code-updater/main/demo.gif)


This package was forked from gronxb's original work, and we extend our sincere gratitude for their contribution. We've enhanced the package by adding build number support and successfully deployed these improvements.
https://github.com/gronxb/hot-updater


  ## Documentation

  Full documentation is available at:
  https://mstfmedeni.github.io/code-updater

  ## Key Features

  - **Self-Hosted**: Complete control over your update infrastructure
  - **Multi-Platform**: Support for both iOS and Android
  - **Web Console**: Intuitive update management interface
  - **Plugin System**: Support for various storage providers (AWS S3, Cloudflare R2 + D1, etc.)
  - **Version Control**: Robust app version management through semantic versioning
  - **New Architecture**: Support for new architecture like React Native


  ## Plugin System

  Code Updater provides high extensibility through its plugin system. Each functionality like build, storage, and database is separated into plugins, allowing users to configure them according to their needs.

  ### Plugin Types

  - **Build Plugin**: Support for bundlers like Metro, Re.pack
  - **Storage Plugin**: Support for bundle storage like AWS S3, Supabase Storage, Cloudflare R2 Storage
  - **Database Plugin**: Support for metadata storage like Supabase Database, PostgreSQL, Cloudflare D1

  ### Configuration Example

  * [Supabase](https://mstfmedeni.github.io/code-updater/guide/providers/1_supabase.html)
  ```tsx
  import { metro } from "@code-updater/metro";
  import { supabaseDatabase, supabaseStorage } from "@code-updater/supabase";
  import { defineConfig } from "code-updater";
  import "dotenv/config";

  export default defineConfig({
    build: metro({ enableHermes: true }),
    storage: supabaseStorage({
      supabaseUrl: process.env.CODE_UPDATER_SUPABASE_URL!,
      supabaseAnonKey: process.env.CODE_UPDATER_SUPABASE_ANON_KEY!,
      bucketName: process.env.CODE_UPDATER_SUPABASE_BUCKET_NAME!,
    }),
    database: supabaseDatabase({
      supabaseUrl: process.env.CODE_UPDATER_SUPABASE_URL!,
      supabaseAnonKey: process.env.CODE_UPDATER_SUPABASE_ANON_KEY!,
    }),
  });
  ```

* [Cloudflare](https://mstfmedeni.github.io/code-updater/guide/providers/2_cloudflare.html)
```tsx
import { metro } from "@code-updater/metro";
import { d1Database, r2Storage } from "@code-updater/cloudflare";
import { defineConfig } from "code-updater";
import "dotenv/config";

export default defineConfig({
  build: metro({ enableHermes: true }),
  storage: r2Storage({
    bucketName: process.env.CODE_UPDATER_CLOUDFLARE_R2_BUCKET_NAME!,
    accountId: process.env.CODE_UPDATER_CLOUDFLARE_ACCOUNT_ID!,
    cloudflareApiToken: process.env.CODE_UPDATER_CLOUDFLARE_API_TOKEN!,
  }),
  database: d1Database({
    databaseId: process.env.CODE_UPDATER_CLOUDFLARE_D1_DATABASE_ID!,
    accountId: process.env.CODE_UPDATER_CLOUDFLARE_ACCOUNT_ID!,
    cloudflareApiToken: process.env.CODE_UPDATER_CLOUDFLARE_API_TOKEN!,
  }),
});
```

* [AWS S3 + Lambda@Edge](https://mstfmedeni.github.io/code-updater/guide/providers/3_aws-s3-lambda-edge.html)
```tsx
import { metro } from "@code-updater/metro";
import { s3Storage, s3Database } from "@code-updater/aws";
import { defineConfig } from "code-updater";
import "dotenv/config";

const options = {
  bucketName: process.env.CODE_UPDATER_S3_BUCKET_NAME!,
  region: process.env.CODE_UPDATER_S3_REGION!,
  credentials: {
    accessKeyId: process.env.CODE_UPDATER_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.CODE_UPDATER_S3_SECRET_ACCESS_KEY!,
  },
};

export default defineConfig({
  build: metro({ enableHermes: true }),
  storage: s3Storage(options),
  database: s3Database(options),
});
```


## Features

- Standard semver comparison
- Build number support
- Wildcard pattern matching for versions and build numbers
- Range operator support (^, ~, >, <)
- Special handling for build numbers in target versions

## Behavior Matrix

| Target Version | Current Version | Result | Explanation |
|----------------|-----------------|--------|-------------|
| **Exact Version Matching** |
| `1.2.3` | `1.2.3` | ✅ | Exact version match |
| `1.2.3` | `1.2.4` | ❌ | Exact version mismatch |
| **Version with Build Numbers** |
| `1.2.3+45` | `1.2.3+45` | ✅ | Exact version and build match |
| `1.2.3+45` | `1.2.3+46` | ❌ | Same version, different build |
| **Wildcard in Version** |
| `1.2.x` | `1.2.3` | ✅ | Wildcard in patch version |
| `1.2.x` | `1.2.3+45` | ✅ | Wildcard in patch version, build ignored |
| `1.x.x` | `1.2.3` | ✅ | Wildcard in minor and patch |
| `1.x.x` | `2.0.0` | ❌ | Wildcard but major version mismatch |
| **Range Operators** |
| `^1.2.3` | `1.2.3` | ✅ | Caret range exact match |
| `^1.2.3` | `1.3.0` | ✅ | Caret range allows minor update |
| `^1.2.3` | `2.0.0` | ❌ | Caret range disallows major update |
| `~1.2.3` | `1.2.4` | ✅ | Tilde range allows patch update |
| `~1.2.3` | `1.3.0` | ❌ | Tilde range disallows minor update |
| **Range Operators with Build Numbers** |
| `^1.2.3+45` | `1.3.0+45` | ✅ | Caret with build - version matches, builds must match too |
| `^1.2.3+45` | `1.3.0+46` | ❌ | Caret with build - build mismatch |
| **Build Number Wildcards** |
| `1.2.3+4x` | `1.2.3+45` | ✅ | Wildcard in build number |
| `1.2.3+x` | `1.2.3+5` | ✅ | Full wildcard in build |
| `1.2.3+4x` | `1.2.3+5` | ❌ | Build wildcard mismatch |
| `1.2.3+1xx` | `1.2.3+125` | ✅ | Wildcard in build number |
| `1.2.3+44x` | `1.2.3+4455` | ❌ | Build wildcard mismatch |
| `1.2.3+44x` | `1.2.3+445` | ✅ | Wildcard in build number |
| **Special Cases** |
| `1.2.3` | `1.2.3+45` | ✅ | Target with no build ignores current build |
| `1.2.x` | `1.2.3+45` | ✅ | Wildcard version with no build ignores current build |

## Rules

1. **Version Comparison**:
   - First, check if the base versions match according to semver rules
   - Handles wildcards (x) and range operators (^, ~, >, <, =)

2. **Build Number Handling**:
   - If target version doesn't have a build number, ignore the build number in current version
   - Otherwise, build numbers must match exactly or follow wildcard patterns

3. **Wildcards**:
   - `x` in version sections acts as a wildcard (1.2.x matches 1.2.0, 1.2.1, etc.)
   - `x` in build numbers acts as a single digit wildcard (1.2.3+4x matches 1.2.3+40, 1.2.3+45, etc.)
