import { defineClientConfig } from "@vuepress/client";
import Badge from "D:/a/vue/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.75/node_modules/vuepress-plugin-components/lib/client/components/Badge";
import FontIcon from "D:/a/vue/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.75/node_modules/vuepress-plugin-components/lib/client/components/FontIcon";
import { useStyleTag } from "D:/a/vue/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.75/node_modules/vuepress-plugin-components/lib/client/composables";
import BackToTop from "D:/a/vue/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.75/node_modules/vuepress-plugin-components/lib/client/components/BackToTop";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");`, { id: "icon" });
    
  },
  rootComponents: [
    BackToTop,
    
  ],
});