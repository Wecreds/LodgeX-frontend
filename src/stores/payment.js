import { defineStore } from 'pinia'

import PaymentService from '@/services/payment'
const paymentService = new PaymentService()

export const usePaymentStore = defineStore('payment', () => {
  const fetchPayment = async (booking_id) => {
    const data = await paymentService.fetchPayment(booking_id)

    return data.data
  }

  return { fetchPayment }
})
