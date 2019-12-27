// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../lib/cbi-charts.common'
import CbiCharts from '../lib/CbiIndexChart'
Vue.use(CbiCharts)

// import '../lib/ve-charts.min.css'
// import '../lib/common.js'
// import './style/iconfont.css'
// Vue.component('VeBar', VeBar)
// Vue.component('VeLine', VeLine)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
