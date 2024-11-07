import { ref } from 'vue'
import { defineStore } from 'pinia'

import RoomService from '@/services/room'
const roomService = new RoomService()

export const useRoomStore = defineStore('room', () => {
  const availableRooms = ref()

  const fetchAvailableRooms = async (startDate, endDate, guestCount) => {
    const data = await roomService.fetchAvailableRooms(
      startDate,
      endDate,
      guestCount,
    )

    availableRooms.value = data.data
  }

  const checkRoomAvailability = async (startDate, endDate, roomId) => {
    const data = await roomService.checkRoomAvailability(
      startDate,
      endDate,
      roomId,
    )
    return data.data.available
  }

  const fetchRoomDetails = async roomId => {
    const data = await roomService.fetchRoomDetails(roomId)
    console.log(data)

    return data.data
  }

  const bookRoom = async (roomId, startDate, endDate) => {
    const data = await roomService.bookRoom(roomId, startDate, endDate)
    return data
  }

  return {
    bookRoom,
    fetchRoomDetails,
    fetchAvailableRooms,
    checkRoomAvailability,
    availableRooms,
  }
})
