import { defineConfig } from "vitepress";
import { enConfig } from "./en";
import { faConfig } from "./fa";
import { shareConfig } from "./share";

export default defineConfig({
  ...shareConfig,
  locales: {
    en: { label: "English", lang: "en-US", ...enConfig },
    fa: { label: "فارسی", lang: "fa-IR", ...faConfig },
  },
});
