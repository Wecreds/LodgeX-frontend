import { defineStore } from 'pinia'

import PasswordResetService from '@/services/passwordReset'
const passwordResetService = new PasswordResetService()

export const usePasswordResetStore = defineStore('passwordReset', () => {
  const requestPasswordReset = async(email) => {
      const response = await passwordResetService.sendResetPasswordCode(email)

      return response
  }

  const confirmPasswordReset = async(newPassword, token, email) => {
      const response = await passwordResetService.resetPassword(newPassword, token, email)
      console.log(response);

      return response
  }

  return {

    requestPasswordReset,
    confirmPasswordReset
  }
})
