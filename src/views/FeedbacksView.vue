<template>
  <div class="max-w-screen-lg mx-auto p-4">
    <h2 class="text-2xl font-semibold mb-4">Feedbacks</h2>

    <div class="space-y-4">
      <div
        v-for="feedback in feedbacks"
        :key="feedback.id"
        class="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition duration-300"
      >
        <div class="flex items-center justify-between mb-2">
          <div>
            <h3 class="text-xl font-bold text-gray-800">{{ feedback.user.name }}</h3>
            <p class="text-gray-600 text-sm">{{ feedback.feedback_date }}</p>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-yellow-500 font-semibold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.09 3.362a1 1 0 00.95.69h3.551c.969 0 1.371 1.24.588 1.81l-2.874 2.085a1 1 0 00-.364 1.118l1.09 3.362c.3.922-.755 1.688-1.54 1.118l-2.874-2.085a1 1 0 00-1.176 0l-2.874 2.085c-.784.57-1.839-.196-1.54-1.118l1.09-3.362a1 1 0 00-.364-1.118L2.32 8.79c-.783-.57-.38-1.81.588-1.81h3.55a1 1 0 00.951-.69l1.09-3.362z"/>
              </svg>
              {{ feedback.rating }}/5
            </span>
          </div>
        </div>
        <p class="text-gray-700 mt-2">{{ feedback.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useFeedbackStore } from '@/stores/feedback'

const feedbackStore = useFeedbackStore()

const feedbacks = ref([])

onMounted(async() => {
  const data = await feedbackStore.fetchFeedbacks()
  feedbacks.value = data.data
})
</script>
