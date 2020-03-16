import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LeftNav from './components/common/LeftNav'
Vue.config.productionTip = false;
Vue.component('left-nav',LeftNav);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
