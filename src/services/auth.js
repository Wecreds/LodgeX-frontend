import axios from 'axios'
export default class AuthService {
  async fetchToken(credentials) {
    const { data } = await axios.post('/token/', credentials)
    return data
  }
  async fetchRefreshToken(refreshToken) {
    const { data } = await axios.post('/token/refresh/', refreshToken)
    return data
  }
}
