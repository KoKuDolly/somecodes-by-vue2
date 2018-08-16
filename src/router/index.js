import Vue from 'vue'
import VueRouter from 'vue-router'
import {routers} from './router'
import Cookies from 'js-cookie'
import iView from 'iview'
import Util from '../libs/util'

Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  routes: routers
}

export const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  // console.log(routers)
  iView.LoadingBar.start()
  Util.title(to.meta.title)
  if (!Cookies.get('user') && to.name !== 'login') {
    next({name: 'login'})
  } else if (Cookies.get('user') && to.name === 'login') {
    Util.title()
    next({name: 'home_index'})
  } else {
    Util.toDefaultPage([...routers], to.name, router, next)
  }
})

router.afterEach(to => {
  // Util.openNewPage(router.app, to.name, to.params, to.query)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})
