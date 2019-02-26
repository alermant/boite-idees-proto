import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import IdeasAnalysis from './views/IdeasAnalysis.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/ideas-analysis',
      name: 'Ideas analysis',
      component: IdeasAnalysis,
    },
  ],
});
