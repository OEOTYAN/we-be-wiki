export const siteData = {
  "base": "/we-be-wiki/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [],
  "locales": {
    "/en/": {
      "lang": "en-US",
      "title": "WorldEdit-BE-wiki",
      "description": "WorldEdit-BE-wiki"
    },
    "/": {
      "lang": "zh-CN",
      "title": "WorldEdit-BE-wiki",
      "description": "WorldEdit-BE-wiki"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
