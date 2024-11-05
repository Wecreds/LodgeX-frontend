import axios from 'axios'
export default class UserService {
  async fetchMe() {
    const { data } = await axios.get('api/users/me')
    return data
  }
  async verifyPassword(password) {
    const { data }= await axios.get(`api/users/verify_password/?password=${password}`)
    return data
  }
  async updateMe(user) {
    const { data, status } = await axios.put(`api/users/${user.id}/`, user)

    return { data, status }
  }
  async registerDocument(document) {
    const { data, status } = await axios.post('api/media/documents/', {file: document},  {
      headers: {
        'Content-Type': 'multipart/form-data'
      }})
    return { data, status }
  }
  async registerUser(user) {
    const { data, status } = await axios.post('api/users/', user)
    return { data, status }
  }
}
