import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {i18n} from './plugins/i18n';
import PageSuccess from './pages/PageSuccess.vue';
import PageExchange from './pages/PageExchange.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path: '/', component: PageExchange},
    {path: '/success', component: PageSuccess}
  ]
})

new Vue({
  i18n,
  render: h => h(App),
  router: router,
}).$mount('#app')
