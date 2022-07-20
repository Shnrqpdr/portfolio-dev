import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Experience from "../views/Experience.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomeView,
  },
  {
    path: "/experience",
    name: "experience-page",
    component: Experience,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
