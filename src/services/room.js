import axios from 'axios'
export default class RoomService {
  async fetchAvailableRooms(startDate, endDate, guestCount) {
    const data = await axios.get('/api/available', {
      params: {
        start_date: startDate,
        end_date: endDate,
        guest_count: guestCount,
      },
    })

    return data
  }
  async checkRoomAvailability(startDate, endDate, roomId) {
    const { data } = await axios.post('/api/check-availability', {
      params: {
        start_date: startDate,
        end_date: endDate,
        room_id: roomId,
        booking_status: 1,
      },
    })

    return data
  }
  async fetchRoomDetails(roomId) {
    const data = await axios.get(`/api/rooms/${roomId}`)
    return data
  }

  async bookRoom(roomId, startDate, endDate, guest_count) {
    const data = await axios.post('/api/booking_create/', {
      room_id: roomId,
      start_date: startDate,
      end_date: endDate,
      guest_count: guest_count,
    })

    return data.data
  }
}
