import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Establecimientos from './Establecimientos.vue'
import EstablecimientoPicaccio from './EstablecimientoPicaccio.vue'
import Faq from './Faq.vue'
import Pago from './Pago.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Pago);

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Establecimientos',
    path: '/establecimientos',
    component: Establecimientos
  },
  {
    name: 'EstablecimientoPicaccio',
    path: '/establecimientos/il-picaccio',
    component: EstablecimientoPicaccio
  },
  {
    name: 'Pago',
    path: '/pago',
    component: Pago
  },
  {
    name: 'Faq',
    path: '/faq',
    component: Faq
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});


new Vue(Vue.util.extend({router},App)).$mount('#app');
