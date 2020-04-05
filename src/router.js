import Vue from 'vue';
import Router from 'vue-router';
import Heroes from './views/heroes.vue';
import About from './views/about.vue';
import HeroDetail from './views/hero-detail.vue';
import Feedback from './views/feedback.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/heroes',
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: Heroes,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/heroes/:id',
      name: 'hero-detail',
      component: HeroDetail,
      props: r => ({ id: parseInt(r.params.id) }),
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback,
    },
  ],
});
