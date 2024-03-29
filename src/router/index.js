import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   // 子项目history模式下，父项目的模糊匹配。不建议这样做
  //   // path: '/vue*',
  //   path: '/vue',
  //   name: 'vue',
  //   component: () => import(/* webpackChunkName: "about" */ '../components/Vue')
  // },
  // {
  //   path: '/react',
  //   name: 'react',
  //   component: () => import(/* webpackChunkName: "about" */ '../components/React')
  // },
  // {
  //   path: '/angular',
  //   name: 'angular',
  //   component: () => import(/* webpackChunkName: "about" */ '../components/Angular.vue')
  // },
  {
    path: '/login',
    name: 'login',
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "layout" */ '../components/Layout.vue'),
  },
  {
    path: '/layout',
    component: () => import(/* webpackChunkName: "layout" */ '../components/Layout.vue'),
    children: [
      {
        path: '/vite-example',
        name: 'vite-example',
        component: () => import(/* webpackChunkName: "about" */ '../components/Vite.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
