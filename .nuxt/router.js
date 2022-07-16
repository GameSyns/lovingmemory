import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _336f34c2 = () => interopDefault(import('..\\pages\\donation.vue' /* webpackChunkName: "pages/donation" */))
const _6ef74a52 = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _e3ced1fe = () => interopDefault(import('..\\pages\\live-stream.vue' /* webpackChunkName: "pages/live-stream" */))
const _016807ce = () => interopDefault(import('..\\pages\\order-of-service.vue' /* webpackChunkName: "pages/order-of-service" */))
const _3c7875d2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/donation",
    component: _336f34c2,
    name: "donation"
  }, {
    path: "/gallery",
    component: _6ef74a52,
    name: "gallery"
  }, {
    path: "/live-stream",
    component: _e3ced1fe,
    name: "live-stream"
  }, {
    path: "/order-of-service",
    component: _016807ce,
    name: "order-of-service"
  }, {
    path: "/",
    component: _3c7875d2,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
