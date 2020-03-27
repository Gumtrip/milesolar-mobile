'use strict'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  // {
  //     path: '*',
  //     // 重定向
  //     redirect: '/'
  // },
  {
    path: '/products/:id',
    name: 'product.show',
    component: () => import('@/views/product/Show')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/product/List')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('@/views/article/Index')
  },
  {
    path: '/articles/:id',
    name: 'article.show',
    component: () => import('@/views/article/Show')
  },
  {
    path: '/cases',
    name: 'samples',
    component: () => import('@/views/sample/Index')
  },
  {
    path: '/cases/:id',
    name: 'sample.show',
    component: () => import('@/views/sample/Show')
  },
  {
    path: '/contact_us',
    name: 'contact',
    component: () => import('@/views/contact/Index')
  }
]
const router = new Router({
  mode: 'history', // 默认是hash，带"#"
  linkExactActiveClass: 'is-active',
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  next()
})

export default router
