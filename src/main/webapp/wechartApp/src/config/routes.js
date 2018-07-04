/**
 * Created by 680701 on 2017/8/4.
 */
import App from '../app'
import Index from "../page/home/index";
import Login from "../page/login/index";
import Handbook from "../page/handbook/index";
// import * as types from './store/types'
import Vue from 'vue'
import vueRouter from 'vue-router'
import store from '../store/index'
import * as types from '../store/types'
Vue.use(vueRouter);
//meta: {requireAuth: true,}
const routes = [
  {
    path: '/',
    component: App,
    children: [
      {path: '/', redirect: '/index'},
      {path:"/index",component:Index,meta: {requireAuth: false,}},
      {path:"/login",component:Login},
      {path:"/handbook",component:Handbook,meta: {requireAuth: false,}},
    ]
  }
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new vueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token!=0) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})

export  default router
