
const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue")

export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",

        component: About
    }
];
