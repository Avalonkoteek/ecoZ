
// const Home = () => import("../views/Home.vue");

//About
const About = () => import('../views/About')
const AboutPartners = () => import('../components/About/Parthners')
const AboutTargets = () => import('../components/About/Targets')
// const About = () => import("../views/About.vue")

export const routes = [
    {
        path: '/home',
        name: 'home',
        meta:{layout:'main'},
        component: () => import('../views/Home.vue')
    },
    {
        path: '/',
        redirect:'/home',
    },
    //About
    {
        path: '/about',
        name: 'about',
        meta:{layout:'about'},
        component: About,
        children: [

        ]
    },
    {
        path: '/about/partners',
        component: AboutPartners,
        meta: {
            layout:'empty'
        },
        name: 'AboutPartners'
    },
    {
        path: '/about/targets',
        component: AboutTargets,
        meta: {
            layout:'empty'
        },
        name: 'AboutTargets'
    },

    {
        path: '/business',
        name: 'business',
        meta:{layout:'business'},
        component: () => import('../views/Business.vue')
    },
    {
        path: '/school',
        name: 'school',
        meta:{layout:'school'},
        component: () => import('../views/School.vue')
    },
    {
        path: '/volunteers',
        name: 'volunteers',
        meta:{layout:'volunteers'},
        component: () => import('../views/Volunteers.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        meta:{layout:'contact'},
        component: () => import('../views/Contact.vue')
    },
];
