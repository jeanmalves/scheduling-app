import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Schedule from '../views/Schedule.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/schedule/services/:id',
    name: 'schedule',
    component: Schedule,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
