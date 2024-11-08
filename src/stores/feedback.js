import { defineStore } from 'pinia'

import FeedbackService from '@/services/feedback'
const feedbackService = new FeedbackService()

export const useFeedbackStore = defineStore('feedback', () => {
  const fetchFeedbacks = async() => {
    const data = await feedbackService.fetchFeedbacks()
    return data
  }

  const postFeedback = async(feedback) => {
    const data = await feedbackService.postFeedback(feedback)
    return data.data
  }

  return { fetchFeedbacks, postFeedback }
})
