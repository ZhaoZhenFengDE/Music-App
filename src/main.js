import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'

Vue.config.productionTip = false

fastclick.attach(document.body)

const root = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
})
root