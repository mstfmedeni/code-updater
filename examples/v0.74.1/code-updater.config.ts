import { metro } from "@code-updater/metro";
import { supabaseDatabase, supabaseStorage } from "@code-updater/supabase";
import { defineConfig } from "code-updater";
import "dotenv/config";

export default defineConfig({
  build: metro({
    enableHermes: true,
  }),
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
