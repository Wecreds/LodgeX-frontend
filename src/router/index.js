import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FullLayout',
      component: () => import('../layouts/FullLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
      ],
    },
    {
      path: '/',
      name: 'BlankLayout',
      component: () => import('../layouts/BlankLayout.vue'),
      children: [],
    },
  ],
})

export default router
