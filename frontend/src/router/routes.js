
//About
const About = () => import("../views/About");
const AboutPartners = () => import("../components/About/Parthners");
const AboutTargets = () => import("../components/About/Targets");
const ContactForm = () => import("../components/Contact/ContactForm");

// Buisness
const Services = () => import("../components/Buisness/Services");
const NotFound = () => import("../views/NotFound");
// const About = () => import("../views/About.vue")
// const NotFoundComponent = () => import("../components/NotFoundComponent");

export const routes = [
  {
    path: "/home",
    name: "home",
    meta: { layout: "main", title: "Главная" },
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/",
    redirect: "/home",
  },
  //About
  {
    path: "/about",
    name: "about",
    meta: { layout: "about", title: "О Проекте" },
    component: About,
    children: [{ path: "partner", component: AboutPartners }],
  },
  {
    path: "/about/partners",
    component: AboutPartners,
    meta: {
      layout: "empty",
      title: "Партнеры",
    },
    name: "AboutPartners",
  },
  {
    path: "/about/targets",
    component: AboutTargets,
    meta: {
      layout: "empty",
      title: "Цели",
    },
    name: "AboutTargets",
  },

  {
    path: "/business",
    name: "business",
    meta: { layout: "business", title: "Бизнесу" },
    component: () => import("../views/Business.vue"),
  },
  {
    path: "/business/services",
    name: "services",
    meta: { title: "Услуги" },
    component: Services,
  },
  {
    path: "/school",
    name: "school",
    meta: { layout: "school", title: "Школам" },
    component: () => import("../views/School.vue"),
  },
  {
    path: "/volunteers",
    name: "volunteers",
    meta: { layout: "volunteers", title: "Волонтерам" },
    component: () => import("../views/Volunteers.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    meta: { layout: "contact", title: "Контакты" },
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/contacts/contact_form",
    name: "contact_form",
    meta: { layout: "empty", title: "Контактная форма"},
    component: ContactForm,
  },

  {
    path: '/404',
    name: '404',
    component: NotFound,
    meta: { title: "404"},
  },
  {
    path: '*',
    redirect: '/404'
  }
];
