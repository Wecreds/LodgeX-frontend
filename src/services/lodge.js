import axios from 'axios'
export default class LodgeService {
  async fetchLodge() {
    const data = await axios.get('/api/lodges/1')
    return data
  }
  async fetchImages() {
    const { data }= await axios.get('/api/lodge-photos/with_logo')
    return { data }
  }
}
