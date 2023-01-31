import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../views/TheHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "TheHome",
      component: TheHome,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/TheHome.vue"),
    },
  ],
});

export default router;
