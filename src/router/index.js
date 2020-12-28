// Vue
import Vue from 'vue'
import VueRouter from 'vue-router'

// Third Party
import qs from 'qs'

// Local
import routes from './routes'
import store from '../store'

// Main Section
Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

// Variable Section
const routesSigned = ['waste', 'demolition', 'reservation', 'my_page']

const isIncludedRoute = function (routeNames, routeName) {
  if (routeNames.indexOf(routeName) >= 0) {
    return true
  } else {
    return false
  }
}

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach(async (to, from, next) => {
    if (isIncludedRoute(routesSigned, to.name)) {
      if (!(store.getters.user && store.getters.user.id)) {
        // Get kakaoUser
        const kakaoUser = await Vue.prototype.$kakaologin()

        // Get user
        const { data: user } = await Vue.prototype.$axios.post('/users/kakaologin/', qs.stringify(kakaoUser))
        if (!user) { return }
        store.commit('setUser', user)
      }

      if (!(store.getters.user && store.getters.user.address1)) {
        this.$router.push({ name: 'address' })
      }
    }
    next()
  })

  return Router
}
