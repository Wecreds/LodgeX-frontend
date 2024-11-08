import axios from 'axios'
export default class PaymentService {
  async fetchPayment(bookingId) {
    const data = await axios.get(
      `/api/payments/get_or_create_payment/?booking_id=${bookingId}`,
    )
    return data
  }
}
