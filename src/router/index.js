import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Experience from "../views/Experience.vue";
import Articles from "../views/Articles.vue";

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
  },
  {
    path: "/articles",
    name: "articles-page",
    component: Articles,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
