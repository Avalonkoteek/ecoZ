import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/About.vue')
  },
  {
    path: '/business',
    name: 'business',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Business.vue')
  },
  {
    path: '/school',
    name: 'school',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/School.vue')
  },
  {
    path: '/volunteers',
    name: 'volunteers',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Volunteers.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Contact.vue')
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;