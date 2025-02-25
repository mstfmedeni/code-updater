## 1.3.3 (2025-02-25)

This was a version bump only, there were no code changes.

## 1.3.2 (2025-02-25)

This was a version bump only, there were no code changes.

## 1.3.1 (2025-02-25)

This was a version bump only, there were no code changes.

## 1.3.0 (2025-02-24)

This was a version bump only, there were no code changes.

## 1.2.0 (2025-02-24)

This was a version bump only, there were no code changes.

## 1.2.0-0 (2025-02-24)

This was a version bump only, there were no code changes.

## 1.1.0 (2025-02-24)

This was a version bump only, there were no code changes.

# 1.0.0 (2025-02-23)

This was a version bump only, there were no code changes.

## 0.12.2 (2025-02-23)

### 🩹 Fixes

- **aws:** Lambda@Edge ARN version append ([#140](https://github.com/mstfmedeni/code-updater/pull/140))

### ❤️ Thank You

- Sungyu Kang

## 0.12.1 (2025-02-23)

### 🚀 Features

- **aws:** introduce AWS S3 + Lambda@Edge infra ([#85](https://github.com/mstfmedeni/code-updater/pull/85))
- **console:** Improve UX by preventing screen flickering ([#133](https://github.com/mstfmedeni/code-updater/pull/133))
- **console:** improve sidebar with animation when save ([#137](https://github.com/mstfmedeni/code-updater/pull/137))
- **console:** Modify to support HMR by migrating from Rsbuild to Vite ([#138](https://github.com/mstfmedeni/code-updater/pull/138))
- **mock:** add delay to api calls ([#139](https://github.com/mstfmedeni/code-updater/pull/139))

### 🩹 Fixes

- **aws:** rm lambda zip ([b831c37](https://github.com/mstfmedeni/code-updater/commit/b831c37))

### ❤️ Thank You

- gronxb
- jingjinge @jingjing2222
- max.cha @Coreight98
- Sungyu Kang

## 0.12.0 (2025-02-21)

### 🚀 Features

- **native:** manage up to two bundles for immediate rollback ([#130](https://github.com/mstfmedeni/code-updater/pull/130))

### 🩹 Fixes

- **ios:** remove comment ([07b3c15](https://github.com/mstfmedeni/code-updater/commit/07b3c15))

### ❤️ Thank You

- gronxb
- Sungyu Kang

## 0.11.0 (2025-02-20)

### 🩹 Fixes

- **ios:** warn requiresMainQueueSetup ([#127](https://github.com/mstfmedeni/code-updater/pull/127))
- **react-native:** wrap reload in requestAnimationFrame ([#129](https://github.com/mstfmedeni/code-updater/pull/129))

### ❤️ Thank You

- Sungyu Kang

## 0.10.2 (2025-02-20)

### 🚀 Features

- **standalone:** api-based `standaloneRepository` database plugin ([#83](https://github.com/mstfmedeni/code-updater/pull/83))

### 🩹 Fixes

- **cli:** getCwd bundle failed on cloudflareD1R2Worker ([#126](https://github.com/mstfmedeni/code-updater/pull/126))

### ❤️ Thank You

- Hieu Do @minhhieu76qng
- Neil Agarwal

## 0.10.1 (2025-02-19)

### 🚀 Features

- **console:** after clicking save, show loading icon ([#117](https://github.com/mstfmedeni/code-updater/pull/117))
- **metro:** `enableHermes` options compile binary ([#120](https://github.com/mstfmedeni/code-updater/pull/120))

### 🩹 Fixes

- sets bundleUrl before reload for custom RCTBridges for brownfield app ([#119](https://github.com/mstfmedeni/code-updater/pull/119))
- **android:** UI Blocking code in Android when fetching JS Bundle && Add kotlin config in to 0.71 sample ([#122](https://github.com/mstfmedeni/code-updater/pull/122))

### ❤️ Thank You

- HyunWoo Lee (Nunu Lee) @l2hyunwoo
- jingjinge @jingjing2222
- Sungyu Kang
- wes4m

## 0.10.0 (2025-02-19)

### 🚀 Features

- **console:** after clicking save, show loading icon ([#117](https://github.com/mstfmedeni/code-updater/pull/117))
- **metro:** `enableHermes` options compile binary ([#120](https://github.com/mstfmedeni/code-updater/pull/120))

### 🩹 Fixes

- sets bundleUrl before reload for custom RCTBridges for brownfield app ([#119](https://github.com/mstfmedeni/code-updater/pull/119))
- **android:** UI Blocking code in Android when fetching JS Bundle && Add kotlin config in to 0.71 sample ([#122](https://github.com/mstfmedeni/code-updater/pull/122))

### ❤️ Thank You

- HyunWoo Lee (Nunu Lee) @l2hyunwoo
- jingjinge @jingjing2222
- Sungyu Kang
- wes4m

## 0.9.0 (2025-02-17)

### 🩹 Fixes

- **ios:** ensure UI thread is not blocked by sending events, spreading out by 200ms ([#111](https://github.com/mstfmedeni/code-updater/pull/111))
- **ios:** Improve KVO observer management for download tasks ([#112](https://github.com/mstfmedeni/code-updater/pull/112))

### ❤️ Thank You

- Elijah Windsor
- Sungyu Kang

## 0.8.0 (2025-02-16)

### 🩹 Fixes

- ensure that the UI thread is not blocked when updating ([#106](https://github.com/mstfmedeni/code-updater/pull/106))
- **android:** Prevent bundle loading when URL is null ([#103](https://github.com/mstfmedeni/code-updater/pull/103))
- **android:** prevent ProGuard from blocking access to `mBundleLoader` ([#107](https://github.com/mstfmedeni/code-updater/pull/107))
- **android:** new arch ProGuard ([#108](https://github.com/mstfmedeni/code-updater/pull/108))
- **ios:** Add progress tracking for download tasks in CodeUpdater ([#109](https://github.com/mstfmedeni/code-updater/pull/109))

### ❤️ Thank You

- Elijah Windsor
- mustafa MEDENi @mstfmedeni
- Sungyu Kang

## 0.7.0 (2025-02-14)

### 🩹 Fixes

- **android:** Prevent bundle loading when URL is null ([#103](https://github.com/mstfmedeni/code-updater/pull/103))

### ❤️ Thank You

- Sungyu Kang

## 0.6.7 (2025-02-14)

### 🚀 Features

- **database:** changeset-based `commitBundle` and remove `setBundles` interface ([#93](https://github.com/mstfmedeni/code-updater/pull/93))
- **mock:** `mockDatabase` for console development ([#89](https://github.com/mstfmedeni/code-updater/pull/89))
- **react-native:** change default `reloadOnForceUpdate` to `true` ([#100](https://github.com/mstfmedeni/code-updater/pull/100))

### 🩹 Fixes

- **cloudflare:** change cloudflare 4.1.0 api spec ([#98](https://github.com/mstfmedeni/code-updater/pull/98))
- **react-native:** If `shouldForceUpdate` is false, fallbackComponent pass ([#102](https://github.com/mstfmedeni/code-updater/pull/102))

### ❤️ Thank You

- max.cha @Coreight98
- Sungyu Kang

## 0.6.6 (2025-02-13)

### 🚀 Features

- **database:** changeset-based `commitBundle` and remove `setBundles` interface ([#93](https://github.com/mstfmedeni/code-updater/pull/93))
- **mock:** `mockDatabase` for console development ([#89](https://github.com/mstfmedeni/code-updater/pull/89))

### 🩹 Fixes

- loop ([27789a4](https://github.com/mstfmedeni/code-updater/commit/27789a4))
- **cloudflare:** change cloudflare 4.1.0 api spec ([3128f05](https://github.com/mstfmedeni/code-updater/commit/3128f05))

### ❤️ Thank You

- gronxb
- max.cha @Coreight98
- Sungyu Kang

## 0.6.5 (2025-02-05)

### 🩹 Fixes

- **react-native:** compatibility with TypeScript 4 ([#82](https://github.com/mstfmedeni/code-updater/pull/82))

### ❤️ Thank You

- Sungyu Kang

## 0.6.4 (2025-02-04)

### 🩹 Fixes

- **clouflare:** set cloudflare account id ([#81](https://github.com/mstfmedeni/code-updater/pull/81))
- **deploy:** improve error handling for storage and database plugins ([bbaffa5](https://github.com/mstfmedeni/code-updater/commit/bbaffa5))

### ❤️ Thank You

- gronxb
- Sungyu Kang

## 0.6.3 (2025-02-04)

### 🚀 Features

- **cloudflare:** improve error handling for Cloudflare API calls ([09f7ef7](https://github.com/mstfmedeni/code-updater/commit/09f7ef7))

### 🩹 Fixes

- **supabase:** improve error handling for Supabase upload ([#77](https://github.com/mstfmedeni/code-updater/pull/77))

### ❤️ Thank You

- gronxb
- Sungyu Kang

## 0.6.2 (2025-02-02)

This was a version bump only, there were no code changes.

## 0.6.1 (2025-02-02)

### 🚀 Features

- introduce cloudflare d1 + r2 + wokrer ([#60](https://github.com/mstfmedeni/code-updater/pull/60))
- **aws:** extendable `s3Database` config ([#74](https://github.com/mstfmedeni/code-updater/pull/74))

### ❤️ Thank You

- Sungyu Kang

## 0.6.1-rc.6 (2025-02-02)

### 🩹 Fixes

- config toml ([406e200](https://github.com/mstfmedeni/code-updater/commit/406e200))

### ❤️ Thank You

- gronxb

## 0.6.1-rc.5 (2025-02-02)

### 🩹 Fixes

- available db ([3d2b83e](https://github.com/mstfmedeni/code-updater/commit/3d2b83e))

### ❤️ Thank You

- gronxb

## 0.6.1-rc.4 (2025-02-02)

### 🚀 Features

- using tmp dir ([24d6bd6](https://github.com/mstfmedeni/code-updater/commit/24d6bd6))
- worker name ([a6319f6](https://github.com/mstfmedeni/code-updater/commit/a6319f6))

### 🩹 Fixes

- files ([ef4b70f](https://github.com/mstfmedeni/code-updater/commit/ef4b70f))
- name ([7756bb6](https://github.com/mstfmedeni/code-updater/commit/7756bb6))

### ❤️ Thank You

- gronxb

## 0.6.1-rc.3 (2025-02-02)

### 🩹 Fixes

- dist ([b7c68d8](https://github.com/mstfmedeni/code-updater/commit/b7c68d8))

### ❤️ Thank You

- gronxb

## 0.6.1-rc.2 (2025-02-02)

### 🩹 Fixes

- package.json ([55eb38b](https://github.com/mstfmedeni/code-updater/commit/55eb38b))
- build worker ([6dddd48](https://github.com/mstfmedeni/code-updater/commit/6dddd48))

### ❤️ Thank You

- gronxb

## 0.6.1-rc.1 (2025-02-02)

### 🩹 Fixes

- files ([83d2302](https://github.com/mstfmedeni/code-updater/commit/83d2302))

### ❤️ Thank You

- gronxb

## 0.6.1-rc.0 (2025-02-02)

### 🚀 Features

- command ([b3c0f7a](https://github.com/mstfmedeni/code-updater/commit/b3c0f7a))
- d2 + r2 list ([2081721](https://github.com/mstfmedeni/code-updater/commit/2081721))
- make r2 + d1 ([60fe8f1](https://github.com/mstfmedeni/code-updater/commit/60fe8f1))
- unused script ([effa7b3](https://github.com/mstfmedeni/code-updater/commit/effa7b3))
- init worker ([9d3ee22](https://github.com/mstfmedeni/code-updater/commit/9d3ee22))
- d1 migrations ([0d3a3f0](https://github.com/mstfmedeni/code-updater/commit/0d3a3f0))
- migration cloudflare api ([d0b8052](https://github.com/mstfmedeni/code-updater/commit/d0b8052))
- r2 storage ([1fb9d49](https://github.com/mstfmedeni/code-updater/commit/1fb9d49))
- init get cloudflare token ([dedbbcc](https://github.com/mstfmedeni/code-updater/commit/dedbbcc))
- cloudflare worket end ([b6de9be](https://github.com/mstfmedeni/code-updater/commit/b6de9be))
- worker get updater info ([5eb120b](https://github.com/mstfmedeni/code-updater/commit/5eb120b))
- sep semver satisfies ([a956820](https://github.com/mstfmedeni/code-updater/commit/a956820))
- filter compatible app versions ([0639e25](https://github.com/mstfmedeni/code-updater/commit/0639e25))
- /api/check-update ([792aaa4](https://github.com/mstfmedeni/code-updater/commit/792aaa4))
- init command ([67afea4](https://github.com/mstfmedeni/code-updater/commit/67afea4))
- worker deploy ([977861f](https://github.com/mstfmedeni/code-updater/commit/977861f))
- **aws:** extendable `s3Database` config ([#74](https://github.com/mstfmedeni/code-updater/pull/74))
- **cloudflare:** d1Database ([67c44f1](https://github.com/mstfmedeni/code-updater/commit/67c44f1))
- **r2Storage:** use wrangler ([b778377](https://github.com/mstfmedeni/code-updater/commit/b778377))

### 🩹 Fixes

- folder ([e5a6954](https://github.com/mstfmedeni/code-updater/commit/e5a6954))
- move deps ([e0c2ca8](https://github.com/mstfmedeni/code-updater/commit/e0c2ca8))
- chorE ([df5b453](https://github.com/mstfmedeni/code-updater/commit/df5b453))
- rename file ([2e0bed6](https://github.com/mstfmedeni/code-updater/commit/2e0bed6))
- lint ([867837b](https://github.com/mstfmedeni/code-updater/commit/867837b))
- cloudflare ([59c4082](https://github.com/mstfmedeni/code-updater/commit/59c4082))
- todo ([413f7f0](https://github.com/mstfmedeni/code-updater/commit/413f7f0))
- test ([3c6f6f1](https://github.com/mstfmedeni/code-updater/commit/3c6f6f1))
- comment ([e7a055c](https://github.com/mstfmedeni/code-updater/commit/e7a055c))
- folder ([00f7d48](https://github.com/mstfmedeni/code-updater/commit/00f7d48))
- cf ([88dc7e6](https://github.com/mstfmedeni/code-updater/commit/88dc7e6))
- semver ([dc41a66](https://github.com/mstfmedeni/code-updater/commit/dc41a66))
- semver ([917b917](https://github.com/mstfmedeni/code-updater/commit/917b917))
- binding ([c625c83](https://github.com/mstfmedeni/code-updater/commit/c625c83))
- docs ([5ecfdec](https://github.com/mstfmedeni/code-updater/commit/5ecfdec))
- process ([f3d0547](https://github.com/mstfmedeni/code-updater/commit/f3d0547))
- link ([4d2ceab](https://github.com/mstfmedeni/code-updater/commit/4d2ceab))

### ❤️ Thank You

- gronxb
- Sungyu Kang

## 0.6.0 (2025-01-23)

### 🚀 Features

- **react-native:** support 0.77.0 swift template ([#72](https://github.com/mstfmedeni/code-updater/pull/72))

### 🩹 Fixes

- **supabase:** improve error message for upload failures in supabaseStorage ([#71](https://github.com/mstfmedeni/code-updater/pull/71))

### ❤️ Thank You

- Sungyu Kang

## 0.5.10 (2025-01-22)

### 🩹 Fixes

- **supabase:** improve error message for upload failures in supabaseStorage ([ab6f9f5](https://github.com/mstfmedeni/code-updater/commit/ab6f9f5))

### ❤️ Thank You

- gronxb

## 0.5.9 (2025-01-22)

### 🚀 Features

- **cli:** get-plugin-env ([#70](https://github.com/mstfmedeni/code-updater/pull/70))
- **metro:** add `entryFile`, `sourcemap` parameter to metro() ([#69](https://github.com/mstfmedeni/code-updater/pull/69))

### ❤️ Thank You

- Sungyu Kang

## 0.5.8 (2025-01-21)

### 🩹 Fixes

- **code-updater:** move Metro package to devDependencies and remove unused dependencies ([#66](https://github.com/mstfmedeni/code-updater/pull/66))
- **supabase:** update log messages for generated configuration files ([#65](https://github.com/mstfmedeni/code-updater/pull/65))

### ❤️ Thank You

- Sungyu Kang

## 0.5.7 (2025-01-21)

### 🩹 Fixes

- **supabase:** db pushing stdio inherit ([#64](https://github.com/mstfmedeni/code-updater/pull/64))

### ❤️ Thank You

- Sungyu Kang

## 0.5.6 (2025-01-21)

### 🩹 Fixes

- **cli:** yarn add ([#62](https://github.com/mstfmedeni/code-updater/pull/62))

### ❤️ Thank You

- Sungyu Kang

## 0.5.5 (2025-01-18)

This was a version bump only, there were no code changes.

## 0.5.4 (2025-01-18)

### 🩹 Fixes

- **postgres:** semver_match more test ([#57](https://github.com/mstfmedeni/code-updater/pull/57))

### ❤️ Thank You

- Sungyu Kang

## 0.5.3 (2025-01-17)

### 🚀 Features

- **console:** always show gitCommitHash ([#56](https://github.com/mstfmedeni/code-updater/pull/56))

### ❤️ Thank You

- Sungyu Kang

## 0.5.2 (2025-01-17)

### 🚀 Features

- **react-native:** CodeUpdater.runUpdateProcess ([#55](https://github.com/mstfmedeni/code-updater/pull/55))

### ❤️ Thank You

- Sungyu Kang

## 0.5.0 (2025-01-16)

### 🩹 Fixes

- **android:** set bundle ([#54](https://github.com/mstfmedeni/code-updater/pull/54))

### ❤️ Thank You

- Sungyu Kang

## 0.4.1-5 (2025-01-16)

### 🩹 Fixes

- **react-native:** wrap progress ([0ab3201](https://github.com/mstfmedeni/code-updater/commit/0ab3201))

### ❤️ Thank You

- gronxb

## 0.4.1-4 (2025-01-16)

### 🚀 Features

- default version 1.0.x ([4204a89](https://github.com/mstfmedeni/code-updater/commit/4204a89))

### 🩹 Fixes

- **metro:** bundleId throw kind error ([09b56f4](https://github.com/mstfmedeni/code-updater/commit/09b56f4))
- **react-native:** wrap ([26c926b](https://github.com/mstfmedeni/code-updater/commit/26c926b))

### ❤️ Thank You

- gronxb

## 0.4.1-3 (2025-01-16)

### 🩹 Fixes

- **react-native:** js deps ([a9b264f](https://github.com/mstfmedeni/code-updater/commit/a9b264f))

### ❤️ Thank You

- gronxb

## 0.4.1-2 (2025-01-16)

### 🩹 Fixes

- ensure install package ([fb6aa8f](https://github.com/mstfmedeni/code-updater/commit/fb6aa8f))
- **code-updater:** metro select install ([f9af86c](https://github.com/mstfmedeni/code-updater/commit/f9af86c))

### ❤️ Thank You

- gronxb

## 0.4.1-1 (2025-01-16)

### 🩹 Fixes

- lock ([ce85e37](https://github.com/mstfmedeni/code-updater/commit/ce85e37))
- **code-updater:** supabase peer deps ([#53](https://github.com/mstfmedeni/code-updater/pull/53))

### ❤️ Thank You

- gronxb
- Sungyu Kang

## 0.4.1-0 (2025-01-16)

### 🩹 Fixes

- lock ([ce85e37](https://github.com/mstfmedeni/code-updater/commit/ce85e37))
- **code-updater:** supabase peer deps ([#53](https://github.com/mstfmedeni/code-updater/pull/53))

### ❤️ Thank You

- gronxb
- Sungyu Kang

## 0.4.0 (2025-01-16)

### 🚀 Features

- **react-native:** CodeUpdater.wrap add onCheckUpdateCompleted ([#50](https://github.com/mstfmedeni/code-updater/pull/50))

### 🩹 Fixes

- **ios:** old arch build ([#52](https://github.com/mstfmedeni/code-updater/pull/52))

### ❤️ Thank You

- Sungyu Kang

## 0.3.1 (2025-01-16)

### 🚀 Features

- init command change templates ([#44](https://github.com/mstfmedeni/code-updater/pull/44))
- init video ([9a31d14](https://github.com/mstfmedeni/code-updater/commit/9a31d14))
- providers ([54a38e2](https://github.com/mstfmedeni/code-updater/commit/54a38e2))
- **react-native:** CodeUpdater.wrap Component ([#41](https://github.com/mstfmedeni/code-updater/pull/41))
- **supabase:** init `supabase` command ([#40](https://github.com/mstfmedeni/code-updater/pull/40))

### 🩹 Fixes

- remove generate-secret-key ([#45](https://github.com/mstfmedeni/code-updater/pull/45))
- **docs:** order ([a9fe3c6](https://github.com/mstfmedeni/code-updater/commit/a9fe3c6))

### ❤️ Thank You

- gronxb
- Sungyu Kang

## 0.3.0 (2025-01-13)

### 🚀 Features

- **react-native:** CodeUpdater.wrap Component ([#41](https://github.com/mstfmedeni/code-updater/pull/41))
- **supabase:** init `supabase` command ([#40](https://github.com/mstfmedeni/code-updater/pull/40))

### ❤️ Thank You

- Sungyu Kang

## 0.2.0 (2025-01-02)

### 🚀 Features

- postgres `get_update_info` qurery and ensure test ([#34](https://github.com/mstfmedeni/code-updater/pull/34))
- improve deploy command ([#35](https://github.com/mstfmedeni/code-updater/pull/35))
- console config ([#37](https://github.com/mstfmedeni/code-updater/pull/37))

### 🩹 Fixes

- semver valid and chore deps ([#36](https://github.com/mstfmedeni/code-updater/pull/36))
- babel out dir ([#38](https://github.com/mstfmedeni/code-updater/pull/38))

### ❤️ Thank You

- Sungyu Kang

## 0.1.6-0 (2024-12-30)

### 🚀 Features

- postgres sql test with pglite ([7d93b5b](https://github.com/mstfmedeni/code-updater/commit/7d93b5b))
- test re-cycle ([9b52885](https://github.com/mstfmedeni/code-updater/commit/9b52885))
- migration semverSatisfies ([e4120e4](https://github.com/mstfmedeni/code-updater/commit/e4120e4))
- **js:** migration js ([52ebc51](https://github.com/mstfmedeni/code-updater/commit/52ebc51))

### 🩹 Fixes

- testcase ([72607da](https://github.com/mstfmedeni/code-updater/commit/72607da))
- test (8/18) ([b0dff12](https://github.com/mstfmedeni/code-updater/commit/b0dff12))
- insert (14/18) ([aaba5d1](https://github.com/mstfmedeni/code-updater/commit/aaba5d1))
- test (16/18) ([ac61ee7](https://github.com/mstfmedeni/code-updater/commit/ac61ee7))
- test (18/18) ([d8545f1](https://github.com/mstfmedeni/code-updater/commit/d8545f1))
- eng ([11a86d4](https://github.com/mstfmedeni/code-updater/commit/11a86d4))

### ❤️ Thank You

- gronxb

## 0.1.5 (2024-12-27)

This was a version bump only, there were no code changes.

## 0.1.4 (2024-11-04)

### 🚀 Features

- metro using cli spawn ([f03c1f4](https://github.com/mstfmedeni/code-updater/commit/f03c1f4))

### 🩹 Fixes

- nx projects ([5e37368](https://github.com/mstfmedeni/code-updater/commit/5e37368))
- cwd ([2fe6507](https://github.com/mstfmedeni/code-updater/commit/2fe6507))
- async config ([9cef90f](https://github.com/mstfmedeni/code-updater/commit/9cef90f))
- using cli ([94ee6e2](https://github.com/mstfmedeni/code-updater/commit/94ee6e2))

### ❤️  Thank You

- Sungyu Kang @gronxb

## 0.1.3 (2024-11-04)

### 🚀 Features

- support types ([f6e7a42](https://github.com/mstfmedeni/code-updater/commit/f6e7a42))
- downloadAndSave ([bbd5909](https://github.com/mstfmedeni/code-updater/commit/bbd5909))
- init ([59e4a2f](https://github.com/mstfmedeni/code-updater/commit/59e4a2f))
- rollback check ([f1a8348](https://github.com/mstfmedeni/code-updater/commit/f1a8348))
- snapshot test bundle ([ecb47fc](https://github.com/mstfmedeni/code-updater/commit/ecb47fc))
- cli ([b5fc0f5](https://github.com/mstfmedeni/code-updater/commit/b5fc0f5))
- already update guard ([#5](https://github.com/mstfmedeni/code-updater/pull/5))
- bundle version format date ([7364eb9](https://github.com/mstfmedeni/code-updater/commit/7364eb9))
- migration @clack/prompts ([d7ba630](https://github.com/mstfmedeni/code-updater/commit/d7ba630))
- support zip ([#9](https://github.com/mstfmedeni/code-updater/pull/9))
- manage update source ([#15](https://github.com/mstfmedeni/code-updater/pull/15))
- console gui ([#16](https://github.com/mstfmedeni/code-updater/pull/16))
- trpc ([#19](https://github.com/mstfmedeni/code-updater/pull/19))
- deps ([7dc65cc](https://github.com/mstfmedeni/code-updater/commit/7dc65cc))
- rename rn version example ([74950f4](https://github.com/mstfmedeni/code-updater/commit/74950f4))
- dev pass ([6872508](https://github.com/mstfmedeni/code-updater/commit/6872508))
- **android:** support android ([5aefa4a](https://github.com/mstfmedeni/code-updater/commit/5aefa4a))
- **android:** support android reload ([33f1f6a](https://github.com/mstfmedeni/code-updater/commit/33f1f6a))
- **cli:** rollback command ([#6](https://github.com/mstfmedeni/code-updater/pull/6))
- **cli:** list command ([#7](https://github.com/mstfmedeni/code-updater/pull/7))
- **cli:** prune command ([484b1aa](https://github.com/mstfmedeni/code-updater/commit/484b1aa))
- **cli:** perf rollback ([#10](https://github.com/mstfmedeni/code-updater/pull/10))
- **console:** check user-agent ([4a737ae](https://github.com/mstfmedeni/code-updater/commit/4a737ae))
- **console:** link `code-updater.config.ts` ([#20](https://github.com/mstfmedeni/code-updater/pull/20))
- **console:** migrate solid & hono ([#24](https://github.com/mstfmedeni/code-updater/pull/24))
- **docs:** setup vitepress ([5059fb5](https://github.com/mstfmedeni/code-updater/commit/5059fb5))
- **node:** intergration backend core func ([af2aecb](https://github.com/mstfmedeni/code-updater/commit/af2aecb))
- **node:** s3 base url ([56b8299](https://github.com/mstfmedeni/code-updater/commit/56b8299))
- **node:** support reloadAfterUpdate ([4ceb067](https://github.com/mstfmedeni/code-updater/commit/4ceb067))
- **react-native:** native modules ([b473098](https://github.com/mstfmedeni/code-updater/commit/b473098))
- **react-native:** default bundle url ([91da142](https://github.com/mstfmedeni/code-updater/commit/91da142))
- **react-native:** support assets push ([e7ca528](https://github.com/mstfmedeni/code-updater/commit/e7ca528))
- **react-native:** multiple download interface ([9d6d05c](https://github.com/mstfmedeni/code-updater/commit/9d6d05c))
- **react-native:** log Downloaded all files ([2e60990](https://github.com/mstfmedeni/code-updater/commit/2e60990))
- **react-native:** failover when download failed ([26bc530](https://github.com/mstfmedeni/code-updater/commit/26bc530))
- **react-native:** bundleURLWithoutFallback ([9317f8c](https://github.com/mstfmedeni/code-updater/commit/9317f8c))
- **react-native:** reloadAfterUpdate ([7c7beaa](https://github.com/mstfmedeni/code-updater/commit/7c7beaa))

### 🩹 Fixes

- default ([78e4ffa](https://github.com/mstfmedeni/code-updater/commit/78e4ffa))
- assets show ([c4a5711](https://github.com/mstfmedeni/code-updater/commit/c4a5711))
- bundle version number ([9393638](https://github.com/mstfmedeni/code-updater/commit/9393638))
- rollback ([9df7355](https://github.com/mstfmedeni/code-updater/commit/9df7355))
- permission ([cb7263d](https://github.com/mstfmedeni/code-updater/commit/cb7263d))
- import ([36dcaca](https://github.com/mstfmedeni/code-updater/commit/36dcaca))
- correct module and main entry points in package.json ([abd88fd](https://github.com/mstfmedeni/code-updater/commit/abd88fd))
- peer deps ([7573967](https://github.com/mstfmedeni/code-updater/commit/7573967))
- shims ([86003ca](https://github.com/mstfmedeni/code-updater/commit/86003ca))
- biome.json ([c595077](https://github.com/mstfmedeni/code-updater/commit/c595077))
- src and error ([798d24d](https://github.com/mstfmedeni/code-updater/commit/798d24d))
- files ([39b1f0e](https://github.com/mstfmedeni/code-updater/commit/39b1f0e))
- **console:** port permission ([fc3c6da](https://github.com/mstfmedeni/code-updater/commit/fc3c6da))
- **deps:** devDependencies ([2ad256c](https://github.com/mstfmedeni/code-updater/commit/2ad256c))
- **react-native:** dont error private error ([9f44b7d](https://github.com/mstfmedeni/code-updater/commit/9f44b7d))
- **react-native:** syntax error ([c4684ea](https://github.com/mstfmedeni/code-updater/commit/c4684ea))
- **react-native:** getAppVersionId using my module ([6ab1ec8](https://github.com/mstfmedeni/code-updater/commit/6ab1ec8))
- **react-native:** RN Bridge ([2b57c53](https://github.com/mstfmedeni/code-updater/commit/2b57c53))
- **react-native:** encode uri ([1feb925](https://github.com/mstfmedeni/code-updater/commit/1feb925))
- **react-native:** getUpdateInfo test case ([fed0c19](https://github.com/mstfmedeni/code-updater/commit/fed0c19))

### ❤️  Thank You

- gronxb @gronxb
- Sungyu Kang @gronxb