<template>
  <div
    v-if="room"
    class="room-detail-container min-h-screen p-[30px] max-w-screen-xl mx-auto"
  >
    <div class="flex flex-row justify-start items-start ml-5 mb-1">
      <h2 class="text-3xl font-bold text-rich-black">{{ room.name }}</h2>
      <h2 class="text-xl font-medium text-gray-500">
        {{ room.category.name }}
      </h2>
    </div>
    <div class="flex flex-col lg:flex-row">
      <RoomImageGalery :room-photos="room.photos" />
      <div class="lg:w-2/3 lg:pl-6">
        <p class="text-lg text-gray-700 mb-4">{{ room.description }}</p>
        <div class="mt-6">
          <h3 class="text-xl font-semibold mb-2">Pricing</h3>
          <p class="text-lg font-medium">
            R${{ room.price_by_day }} Pey day Pey Person
          </p>
        </div>
        <div class="flex flex-col gap-2 justify-center items-end w-full">
          <div class="flex gap-2">
            <div>
              <label for="check-in" class="block font-medium mb-1 text-gray-700"
                >Check-in</label
              >
              <DateSelector
                :minDate="minCheckInDate"
                @handleDateSelect="handleCheckInSelect"
              />
            </div>
            <div>
              <label
                for="check-out"
                class="block font-medium mb-1 text-gray-700"
                >Check-out</label
              >
              <DateSelector
                :minDate="minCheckoutDate"
                @handleDateSelect="handleCheckOutSelect"
              />
            </div>
          </div>
          <div class="w-full flex justify-center items-center self-start">
            <GuestRoomSelector @handleGuestSelect="handleGuestSelect" />
            <div class="w-1/2 flex justify-center items-center self-end">
              <button
                :disabled="!startDate || !endDate || !authStore.loggedIn"
                @click="bookRoom()"
                class="flex w-fit justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color mt-4"
              >
                <span v-if="authStore.loggedIn">Book</span>
                <span v-else>Log in to book</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center">Loading...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRoomStore } from '@/stores/room'
import { useAuthStore } from '@/stores/auth'
import { addDays } from 'date-fns'

import RoomImageGalery from '@/components/RoomImageGalery.vue'
import DateSelector from '@/components/DateSelector.vue'
import GuestRoomSelector from '@/components/GuestRoomSelector.vue'
import Swal from 'sweetalert2'

const minCheckInDate = new Date()
const minCheckoutDate = ref()

const roomStore = useRoomStore()
const authStore = useAuthStore()
const route = useRoute()

const roomId = route.params.id

const room = ref(null)

const startDate = ref()
const endDate = ref()
const guestCount = ref(1)

const handleGuestSelect = g => {
  guestCount.value = g
}

const handleCheckInSelect = date => {
  minCheckoutDate.value = addDays(new Date(date), 2)
  startDate.value = date
}

const handleCheckOutSelect = date => {
  endDate.value = date
}

const bookRoom = async () => {
  try{
    const response = await roomStore.bookRoom(
      roomId,
      startDate.value,
      endDate.value,
      guestCount.value,
    )
    if(response.status === 201) {
    Swal.fire({
      title: 'Success',
      text: 'Room booked successfully, go to My bookings to pay',
      icon: 'success',
    })
  }
  } catch(error){
    Swal.fire({
      title: 'Error',
      text: error.response.data.detail,
      icon: 'error',
    })

  }
}

onMounted(async () => {
  room.value = await roomStore.fetchRoomDetails(roomId)
})
</script>
