import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FullLayout',
      component: () => import('../layouts/FullLayout.vue'),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
          meta: {
            requiresAuth: false,
          },
        },
        {
          path: '/account',
          name: 'account',
          component: () => import('../views/AccountView.vue'),
        },
        {
          path: '/room/:id',
          name: 'room-detail',
          meta: {
            requiresAuth: false,
          },
          component: () => import('../views/RoomView.vue'),
          props: true,
        },
      ],
    },
    {
      path: '/',
      name: 'BlankLayout',
      component: () => import('../layouts/BlankLayout.vue'),
      meta: {
        requiresAuth: false,
      },
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
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.loggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
