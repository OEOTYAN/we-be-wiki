import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/": [
    "",
    {
      text: "介绍",
      icon: "navigation",
      link: "intro.md",
    },
    {
      text: "安装与使用",
        icon: "install",
        link: "guide.md",
    },
    {
      text: "功能介绍",
        icon: "align",
      prefix: "posts/",
        children: "structure",
    },
  ],
});
