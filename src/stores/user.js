import { ref } from 'vue'
import { defineStore } from 'pinia'

import UserService from '@/services/user'
const userService = new UserService()

export const useUserStore = defineStore('user', () => {
  const userData = ref()

  const fetchMe = async() => {
    const data = await userService.fetchMe()
    userData.value = data
  }

  const updateMe = async(user) => {
    const data = await userService.updateMe(user)
    return data
  }

  const verifyPassword = async(password) => {
    const data = await userService.verifyPassword(password)
    return data
  }

  return { verifyPassword, updateMe, fetchMe, userData }
})
