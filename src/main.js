// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import Highcharts from "highcharts"
import Maps from "highcharts/modules/map"
import HighchartsVue from "highcharts-vue"
import store from './store/store'

Maps(Highcharts)
Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(HighchartsVue)
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  vuetify,
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
