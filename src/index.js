import Vue from 'vue';
import router from './router';
import App from './Containers/App.vue';

import './styles/main.scss';

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
