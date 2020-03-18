import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
Vue.config.productionTip = false
import './mixin'
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
