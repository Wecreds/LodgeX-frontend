<template>
  <div
    class="payment-container min-h-screen flex items-center justify-center p-6"
    v-if="paymentData"
  >
    <div
      class="max-w-md w-full bg-white rounded-lg shadow-lg p-8 space-y-6 border border-gray-200"
    >
      <h2 class="text-2xl font-bold text-gray-800 border-b pb-4 mb-4">
        Payment Details
      </h2>
      <div class="payment-details space-y-3">
        <p class="text-lg">
          <strong class="text-gray-700">Status: </strong>
          <span
            :class="{
              'text-green-600': paymentData.payment_status_display === 'PAID',
              'text-red-600': paymentData.payment_status_display === 'PENDING',
            }"
          >
            {{ paymentData.payment_status_display }}
          </span>
        </p>
        <p class="text-lg text-gray-700">
          <strong>Booking Price: </strong>
          <span class="text-gray-900">R$ {{ paymentData.booking_price }}</span>
        </p>
        <p class="text-lg text-gray-700">
          <strong>Service Price: </strong>
          <span class="text-gray-900">R$ {{ paymentData.service_price }}</span>
        </p>
        <p class="text-lg text-gray-700">
          <strong>Payment Date: </strong>
          <span class="text-gray-900">
            {{ paymentData.payment_date || 'Not Paid' }}
          </span>
        </p>
        <p class="text-lg text-gray-700">
          <strong>Payment Method: </strong>
          <span class="text-gray-900">
            {{ paymentData.payment_method_display }}
          </span>
        </p>
      </div>
    </div>
  </div>
  <div v-else class="flex items-center justify-center h-screen">
    <p class="text-gray-500 text-lg">Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePaymentStore } from '@/stores/payment'
import { useRoute } from 'vue-router'

const paymentStore = usePaymentStore()
const route = useRoute()

const paymentData = ref()

onMounted(async () => {
  paymentData.value = await paymentStore.fetchPayment(route.params.bookingId)
})
</script>
