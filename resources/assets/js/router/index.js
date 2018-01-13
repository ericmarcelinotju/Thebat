import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: function (resolve) {
        require(['./../components/auth/Login.vue'], resolve)
      },
      beforeEnter: guest
    },
    {
      path: '/register',
      name: 'register',
      component: function (resolve) {
        require(['./../components/auth/Register.vue'], resolve)
      },
      beforeEnter: guest
    },
    {
      path: '/home',
      name: 'dashboard',
      component: function (resolve) {
        require(['./../components/forum/Index.vue'], resolve)
      },
      beforeEnter: auth
    },
    {
      path: '/forumdetail',
      name: 'forumdetail',
      component: function (resolve) {
        require(['./../components/forum/Detail.vue'], resolve)
      },
      beforeEnter: auth
    },
    {
      path: '/forumsearch',
      name: 'forumsearch',
      component: function (resolve) {
        require(['./../components/forum/Search.vue'], resolve)
      },
      beforeEnter: auth
    },
  ]
})

function auth (to, from, next) {

  const auth = store.getters.auth;

  if (!auth.isLoggedIn) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
}

function guest (to, from, next) {

  const auth = store.getters.auth;

  if (auth.isLoggedIn) {
    next({
      path: '/home'
    })
  } else {
    next()
  }
}

export default router
