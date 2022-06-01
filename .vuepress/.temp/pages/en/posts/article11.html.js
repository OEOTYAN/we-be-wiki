export const data = {
  "key": "v-d7123568",
  "path": "/en/posts/article11.html",
  "title": "文章 11",
  "lang": "en-US",
  "frontmatter": {
    "icon": "edit",
    "date": "2022-01-11T00:00:00.000Z",
    "category": [
      "CategoryA",
      "CategoryB"
    ],
    "tag": [
      "tag A",
      "tag B"
    ],
    "summary": "文章 11 标题 2 这里是内容。 标题 3 这里是内容。",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/we-be-wiki/en/posts/article11.html"
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
          "content": "文章 11"
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
          "content": "en-US"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale:alternate",
          "content": "zh-CN"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "tag A"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "tag B"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2022-01-11T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "标题 2",
      "slug": "标题-2",
      "children": [
        {
          "level": 3,
          "title": "标题 3",
          "slug": "标题-3",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 0.06,
    "words": 19
  },
  "filePathRelative": "en/posts/article11.md"
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
