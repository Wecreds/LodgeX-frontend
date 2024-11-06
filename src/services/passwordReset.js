import axios from 'axios'
export default class PasswordResetService {
  async sendResetPasswordCode(email) {
    try{
      const { data, status } = await axios.post('api/password_reset/', {email})
      return { data, status }
    } catch (error) {
      return error.status
    }


  }
  async resetPassword(password, token, email) {
    try{
      const { data, status } = await axios.post('api/password_reset/confirm/', {token: token, new_password: password, email: email})
      return { data, status }
    } catch (error) {
      return error.response
    }
  }
}
