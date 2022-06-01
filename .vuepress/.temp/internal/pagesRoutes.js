import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-5d7259d4","/guide.html",{"title":"安装与使用","icon":"install"},["/guide","/guide.md"]],
  ["v-184f4da6","/intro.html",{"title":"介绍","icon":"navigation"},["/intro","/intro.md"]],
  ["v-8daa1a0e","/",{"title":"项目主页","icon":"home"},["/index.html","/README.md"]],
  ["v-2d0a870d","/en/",{"title":"项目主页","icon":"home"},["/en/index.html","/en/README.md"]],
  ["v-50a4c495","/en/slide.html",{"title":"幻灯片页","icon":"slides"},["/en/slide","/en/slide.md"]],
  ["v-d2657760","/posts/region.html",{"title":"选区","icon":"view"},["/posts/region","/posts/region.md"]],
  ["v-596c86ec","/posts/tool.html",{"title":"工具","icon":"tool"},["/posts/tool","/posts/tool.md"]],
  ["v-da7be6a6","/en/posts/article10.html",{"title":"文章 10","icon":"edit"},["/en/posts/article10","/en/posts/article10.md"]],
  ["v-d7123568","/en/posts/article11.html",{"title":"文章 11","icon":"edit"},["/en/posts/article11","/en/posts/article11.md"]],
  ["v-d3a8842a","/en/posts/article12.html",{"title":"文章 12","icon":"edit"},["/en/posts/article12","/en/posts/article12.md"]],
  ["v-e37ff166","/en/posts/article9.html",{"title":"文章 9","icon":"edit"},["/en/posts/article9","/en/posts/article9.md"]],
  ["v-7646b408","/en/posts/article/article1.html",{"title":"文章 1","icon":"edit"},["/en/posts/article/article1","/en/posts/article/article1.md"]],
  ["v-72dd02ca","/en/posts/article/article2.html",{"title":"文章 2","icon":"edit"},["/en/posts/article/article2","/en/posts/article/article2.md"]],
  ["v-6f73518c","/en/posts/article/article3.html",{"title":"文章 3","icon":"edit"},["/en/posts/article/article3","/en/posts/article/article3.md"]],
  ["v-6c09a04e","/en/posts/article/article4.html",{"title":"文章 4","icon":"edit"},["/en/posts/article/article4","/en/posts/article/article4.md"]],
  ["v-689fef10","/en/posts/article/article5.html",{"title":"文章 5","icon":"edit"},["/en/posts/article/article5","/en/posts/article/article5.md"]],
  ["v-65363dd2","/en/posts/article/article6.html",{"title":"文章 6","icon":"edit"},["/en/posts/article/article6","/en/posts/article/article6.md"]],
  ["v-61cc8c94","/en/posts/article/article7.html",{"title":"文章 7","icon":"edit"},["/en/posts/article/article7","/en/posts/article/article7.md"]],
  ["v-5e62db56","/en/posts/article/article8.html",{"title":"文章 8","icon":"edit"},["/en/posts/article/article8","/en/posts/article/article8.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
