import { defineClientConfig } from "@vuepress/client";
import ChartJS from "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS";
import ECharts from "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts";
import CodeDemo from "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import CodeTabs from "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import FlowChart from "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/styles/align.scss";
import "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Tabs from "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs";
import "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "D:/a/vue/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.75/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("ECharts", ECharts);
    app.component("CodeDemo", CodeDemo);
    app.component("CodeTabs", CodeTabs);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
    
  }
});