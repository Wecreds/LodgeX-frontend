import axios from 'axios'
export default class UserService {
  async fetchMe() {
    const { data } = await axios.get('api/users/me')
    return data
  }
  async verifyPassword(password) {
    const { data } = await axios.get(`api/users/verify_password/?password=${password}`)
    return data
  }
  async updateMe(user) {
    const { data } = await axios.put(`api/users/${user.id}/`, user)
    return data
  }
}
