import Vue from 'vue';
import Router from 'vue-router';
import Events from '@/views/Events.vue';
import NotFoundComponent from '@/views/NotFoundComponent.vue';
import Result from '@/views/Result.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Events
    },
    {
      path: '/events',
      name: 'event-list',
      component: Events
    },
    {
      path: '/result/:resultID',
      name: 'result-page',
      component: Result
    },

    // 404
    {
      path: '*',
      name: '404-page',
      component: NotFoundComponent
    }
  ]
});
