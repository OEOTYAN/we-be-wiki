import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
    base: "/we-be-wiki/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "WorldEdit-BE-wiki",
      description: "WorldEdit-BE-wiki",
    },
    "/": {
      lang: "zh-CN",
      title: "WorldEdit-BE-wiki",
        description: "WorldEdit-BE-wiki",
    },
  },

  theme,
});
