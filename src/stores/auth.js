import { ref } from 'vue'
import { defineStore } from 'pinia'

import AuthService from '@/services/auth'
const authService = new AuthService()

export const useAuthStore = defineStore('auth', () => {
  const loggedIn = ref(false)

  const setToken = async (credentials) => {
    const data = await authService.fetchToken(credentials)
    localStorage.setItem('auth_token', data.access)
    localStorage.setItem('refresh_auth_token', data.refresh)
    loggedIn.value = true
  }

  const setRefreshToken = async (refreshToken) => {
    const data = await authService.fetchRefreshToken(refreshToken)
    localStorage.setItem('auth_token', data.access)
    loggedIn.value = true
  }

  const unsetToken = () => {
    localStorage.removeItem('auth_token')
    loggedIn.value = false
  }

  return { setToken, setRefreshToken, unsetToken, loggedIn }
})
