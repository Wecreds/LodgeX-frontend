<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
      <h1 class="text-2xl font-semibold mb-4 text-center">Submit feedback</h1>
      <form @submit.prevent="submitFeedback" class="space-y-4">
        <div>
          <label for="rating" class="block text-sm font-medium text-gray-700">Rating (1 to 5)</label>
          <input
            v-model="form.rating"
            type="number"
            id="rating"
            min="1"
            max="5"
            step="0.1"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm p-2"
          />
          <small class="text-gray-500">Enter a note between 1 and 5.</small>
        </div>
        <div>
          <label for="comment" class="block text-sm font-medium text-gray-700">Comment</label>
          <textarea
            v-model="form.comment"
            id="comment"
            rows="4"
            maxlength="255"
            required
            placeholder="Write down your comment here..."
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm p-2"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-primary-color text-white font-semibold py-2 px-4 rounded hover:bg-secondary-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
        >
          Submit feedback
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useFeedbackStore } from '@/stores/feedback'
import { useUserStore } from '@/stores/user';
import { useRoute, useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const feedbackStore = useFeedbackStore()
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

const form = ref({
  rating: 1,
  comment: '',
  user: userStore.userData.id,
  booking: route.params.bookingId
})

const submitFeedback = async() => {
  const response = await feedbackStore.postFeedback(form.value)
  if(response.status == 201){
    Swal.fire({
      title: 'Feedback submitted!',
      text: 'Thank you for your feedback!',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      router.push('/')
    })
  }

}

</script>
