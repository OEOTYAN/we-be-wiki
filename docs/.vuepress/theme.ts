import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

    themeColor: {
        purple: "#5c6ac4",
        red: "#f26d6d",
        green: "#3eaf7c",
        orange: "#fb9b5f",
    },

  iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

    copyright:"Copyleft 2022-present OEOTYAN",

    footer: "Released under AGPL-3.0 Licensed",
    
    displayFooter:true,

  logo: "/logo.svg",

    docsDir: "docs",
    docsBranch: "master",

    pageInfo: ["Author", "ReadingTime", "Word", "PageView"],
    repo: "OEOTYAN/we-be-wiki",
  locales: {
  /*  "/en/": {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      displayFooter: true,
    },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      displayFooter: true,
    },
  },

    plugins: {
        copyCode: {},

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
        repo: "OEOTYAN/we-be-wiki",
        repoId: "R_kgDOHbmVJQ",
      category: "Announcements",
        categoryId: "DIC_kwDOHbmVJc4CPaKW",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
