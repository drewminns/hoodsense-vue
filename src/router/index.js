import Vue from 'vue';
import Router from 'vue-router';

import Home from '../Containers/Home.vue';
import Typography from '../Containers/Typography.vue';
import Components from '../Containers/Components.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: '/components',
      name: 'Components',
      component: Components
    }
  ]
});

export default router;
