export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "项目主页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "icon": "home",
    "title": "项目主页",
    "heroImage": "/logo.svg",
    "heroText": "WorldEdit-BE",
    "tagline": "反正是个BDS插件",
    "actions": [
      {
        "text": "查看文档 →",
        "link": "/intro/",
        "type": "primary"
      },
      {
        "text": "github",
        "link": "https://github.com/OEOTYAN/WorldEdit-BE"
      },
      {
        "text": "下载",
        "link": "https://github.com/OEOTYAN/WorldEdit-BE/releases"
      },
      {
        "text": "赞助",
        "link": "https://afdian.net/@oeotyan"
      }
    ],
    "features": [
      {
        "title": "有点功能",
        "icon": "layout",
        "details": "起码比别人多"
      },
      {
        "title": "勉强能用",
        "icon": "support",
        "details": "总的来说，反正比别的好"
      },
      {
        "title": "完全开源",
        "icon": "free",
        "details": "不像某些，喜欢藏着掖着"
      },
      {
        "title": "更多新特性",
        "icon": "more",
        "details": "可能正在写，也可能没有"
      }
    ],
    "copyright": false,
    "footer": "Released under AGPL-3.0 Licensed | Copyleft 2022-present OEOTYAN",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/we-be-wiki/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "WorldEdit-BE-wiki"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "项目主页"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale:alternate",
          "content": "en-US"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0.16,
    "words": 49
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
