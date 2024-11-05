import { ref } from 'vue'
import { defineStore } from 'pinia'

import UserService from '@/services/user'
const userService = new UserService()

export const useUserStore = defineStore('user', () => {
  const userData = ref()

  const fetchMe = async () => {
    const data = await userService.fetchMe()
    userData.value = data
  }

  const updateMe = async user => {
    const data = await userService.updateMe(user)
    return data
  }

  const verifyPassword = async password => {
    const data = await userService.verifyPassword(password)
    return data
  }

  const registerUser = async(user) => {
    const userInstance = user
    try{
      const documentResponse = await userService.registerDocument(user.document)
      userInstance.document = documentResponse.data.id
      const data = await userService.registerUser(user)
      return data
    } catch(error){
      if(error.response.data.email){
        return "email"
      } else if(error.response.data.telephone){
        return "telephone"
      } else {
        return "unknown"
      }
    }
  }

  return { registerUser, verifyPassword, updateMe, fetchMe, userData }
})
