import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueLazyload from 'vue-lazyload'
// import 'normalize.css'
import './assets/icofont/icofont.min.css'
import './assets/css/global.css'

Vue.config.productionTip = false

// Vue.use(VueLazyload)

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
