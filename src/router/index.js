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
        {
          path: '/account',
          name: 'account',
          component: () => import('../views/AccountView.vue'),
        },
      ],
    },
    {
      path: '/',
      name: 'BlankLayout',
      component: () => import('../layouts/BlankLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue'),
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/RegisterView.vue'),
        },
        {
          path: '/forgot-password',
          name: 'forgot-password',
          component: () => import('../views/ForgotPasswordView.vue'),
        },
        {
          path: '/refresh',
          name: 'refresh',
          component: () => import('../views/RefreshView.vue'),
        }
      ],
    },
  ],
})

export default router
