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


## Behavior

1. **Version Comparison**: Compares semantic versions according to semver rules
2. **Build Number Handling**: When versions are exactly the same, also compares build numbers
3. **Pattern Matching**: Supports using "x" as a wildcard in build numbers (e.g., "10xx")
4. **Default Values**: Missing build numbers default to "0"

## Examples

| Current Version | Target Version | Result | Explanation |
|-----------------|---------------|--------|-------------|
| `1.2.3+100` | `1.2.4` | `false` | Current version 1.2.3 is less than target 1.2.4 |
| `1.2.3+100` | `^1.2.0` | `true` | Current version 1.2.3 satisfies the range ^1.2.0 |
| `1.2.3+100` | `1.2.3+100` | `true` | Exact version and build number match |
| `1.2.3+100` | `1.2.3+99` | `false` | Versions match but build numbers don't |
| `1.2.3+1045` | `1.2.3+10xx` | `true` | Build number matches pattern 10xx |
| `1.2.3` | `1.2.3+100` | `false` | Missing build number defaults to 0, doesn't match 100 |
| `1.2.3+100` | `1.2.3` | `false` | Build number 100 doesn't match default 0 |
| `1.2.3` | `1.2.3` | `true` | Both versions and default build numbers match |

## Important Notes

1. For exact version matches, build numbers must match exactly (compared with `===`)
2. When using semver ranges (^, ~, <, >), build numbers are ignored
3. Pattern matching only applies when versions exactly match and target build contains "x"
4. This function handles npm-style semver ranges in the targetAppVersion

