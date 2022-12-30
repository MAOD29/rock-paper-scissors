import { createRouter, createWebHistory } from 'vue-router'
import VersionOne from '../views/VersionOne.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'versionOne',
      component: VersionOne
    },
    {
      path: '/version2',
      name: 'versionTwo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VersionTwo.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => VersionOne
    }
  ]
})

export default router
