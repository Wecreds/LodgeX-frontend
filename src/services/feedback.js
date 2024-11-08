import axios from 'axios'
export default class FeedbackService {
  async postFeedback(feedback) {
    const data = await axios.post('/api/feedbacks/', feedback)
    return data
  }

  async fetchFeedbacks() {
    const data = await axios.get('/api/feedbacks')
    return data
  }
}
