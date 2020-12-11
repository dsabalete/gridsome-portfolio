const c1 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/davidsabalete/repos/gridsome-portfolio/src/pages/404.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/davidsabalete/repos/gridsome-portfolio/src/pages/Index.vue")

export default [
  {
    name: "404",
    path: "/404/",
    component: c1
  },
  {
    name: "home",
    path: "/",
    component: c2
  },
  {
    name: "*",
    path: "*",
    component: c1
  }
]
