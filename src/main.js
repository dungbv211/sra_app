import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import Routes from './router/router'


Vue.use(BootstrapVue);
Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter ({
  routes: Routes
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
