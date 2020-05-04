
// const Home = () => import("../views/Home.vue");
// const About = () => import("../views/About.vue")

export const routes = [
    {
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
