import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { layout: 'defaultLayout' },
  },
  {
    path: "/create-link",
    name: "CreateLink",
    component: () => import("../views/CreateLink.vue"),
    meta: { layout: 'defaultLayout' },
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import("../views/Detail.vue"),
    meta: { layout: 'defaultLayout' },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth.vue"),
    meta: { layout: 'authLayout' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
