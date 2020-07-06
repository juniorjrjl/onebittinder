import Vue from 'vue';
import axios from 'axios';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store';
import ActionCableVue from 'actioncable-vue';
import 'buefy/dist/buefy.css';
import './registerServiceWorker';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Buefy);
Vue.use(ActionCableVue, {debug: true, debugLevel: 'error', connectionUrl: `ws:/${process.env.VUE_APP_WS}/cable`});

axios.defaults.baseURL = `${process.env.VUE_APP_API}/api/v1`;
axios.defaults.headers.posts = {};
axios.defaults.headers.posts['Content-Type'] = 'application/json';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
