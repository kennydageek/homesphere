import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/howitworks',
    name: 'howitworks',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/HowItWorks.vue'),
  },

  {
    path: '/features',
    name: 'features',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/FeaturesView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
