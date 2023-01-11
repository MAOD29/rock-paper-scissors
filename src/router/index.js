import { createRouter, createWebHistory } from "vue-router";
import TheMenu from "../views/TheMenu.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "TheMenu",
      component: TheMenu,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/TheMenu.vue"),
    },
  ],
});

export default router;
