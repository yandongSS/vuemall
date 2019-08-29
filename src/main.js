import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import toast from 'components/content/toast'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
Vue.use(toast)
Vue.use(VueLazyLoad,{
  loading:require('assets/img/55.gif')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
