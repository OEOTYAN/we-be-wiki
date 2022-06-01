export const data = {
  "key": "v-4eaf9f84",
  "path": "/guide/page.html",
  "title": "page config",
  "lang": "zh-CN",
  "frontmatter": {
    "icon": "page",
    "title": "page config",
    "footer": "Copyleft 2022-present OEOTYAN",
    "summary": "Content before more comment is regarded as page excerpt.\n",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/guide/page.html"
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
          "content": "page config"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
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
  "excerpt": "<p>Content before <code v-pre>more</code> comment is regarded as page excerpt.</p>\n",
  "headers": [
    {
      "level": 2,
      "title": "Page Information",
      "slug": "page-information",
      "children": []
    },
    {
      "level": 2,
      "title": "Page Content",
      "slug": "page-content",
      "children": []
    },
    {
      "level": 2,
      "title": "Page Structure",
      "slug": "page-structure",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.38,
    "words": 115
  },
  "filePathRelative": "guide/page.md"
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
