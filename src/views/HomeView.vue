<template>
  <div class="py-8 px-4 sm:px-6 lg:px-8 z-10 mt-5">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">
        {{ lodgeStore?.lodgeInfo?.lodge_name }}
      </h1>

      <div class="flex flex-row gap-1">
        <i class="fas fa-map-marker-alt text-primary-color mt-1"></i>
        <p class="text-gray-600 mb-6">
          {{ lodgeStore?.lodgeInfo?.lodge_location }}
        </p>
      </div>

      <ImageGallery />

      <div class="bg-rich-white p-6 rounded-lg shadow mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          About the Lodge
        </h2>
        <p class="text-gray-600 mb-4">
          {{ lodgeStore?.lodgeInfo?.lodge_description }}
        </p>
      </div>

      <div class="bg-rich-white p-6 rounded-lg shadow mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Amenities</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="amenity in lodgeStore?.lodgeInfo?.amenities"
            :key="amenity.id"
            class="flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
          >
            <i :class="amenity.icon + ' mr-2'"></i> {{ amenity.name }}
          </span>
        </div>
      </div>

      <div class="bg-rich-white p-6 rounded-lg shadow mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Policies</h3>
        <ul class="space-y-4">
          <li
            v-for="policy in lodgeStore?.lodgeInfo?.policies"
            :key="policy.id"
            class="flex items-center text-gray-600"
          >
            <i :class="policy.icon + ' text-primary-color mr-4 text-xl'"></i>
            <div>
              <h4 class="font-semibold text-gray-800">{{ policy.title }}</h4>
              <p>{{ policy.description }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="bg-rich-white p-6 rounded-lg shadow mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">
          Payment Methods
        </h3>
        <ul class="space-y-4">
          <li
            v-for="payment in lodgeStore?.lodgeInfo?.payment_methods"
            :key="payment.id"
            class="flex items-center text-gray-600"
          >
            <i :class="payment.icon + ' text-primary-color mr-4 text-xl'"></i>
            <p>{{ payment.method }}</p>
          </li>
        </ul>
      </div>

      <div class="bg-rich-white p-6 rounded-lg shadow mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">
          Availability
        </h3>
        <div class="flex gap-4 items-end flex-col">
          <div class="flex gap-2 justify-start item-center w-full">
            <div>
              <label for="check-in" class="block font-medium mb-1 text-gray-700"
                >Check-in</label
              >
              <DateSelector :minDate="minCheckInDate" @handleDateSelect="handleCheckInSelect" />
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
            <div class="w-1/3 flex justify-center items-center">
              <GuestRoomSelector @handleGuestSelect="handleGuestSelect" />
            </div>
          </div>
          <div class="self-start">
            <button
              type="submit" @click="fetchAvailableRooms()" :disabled="!startDate || !endDate"
              class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color self-end"
            >
              Search for available rooms
            </button>
          </div>
        </div>
        <hr class="my-5">
        <div>
          <div
            v-if="availableRooms"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
          >
            <div
              v-for="room in availableRooms"
              :key="room.id"
              class="bg-rich-white p-4 rounded-lg shadow"
            >
              <h4 class="text-xl font-semibold text-gray-800">
                {{ room.name }}
              </h4>
              <p class="text-gray-600">{{ room.description }}</p>
              <p class="text-primary-color font-semibold mt-2">
                R${{ room.price_by_day }} per night
              </p>
              <button
                @click="goToRoomDetail(room.id)"
                class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color mt-4"
              >
                See details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useLodgeStore } from '@/stores/lodge'
import { useRoomStore } from '@/stores/room'
import { useRouter } from 'vue-router'
import { addDays } from 'date-fns'

import ImageGallery from '@/components/ImageGallery.vue'
import DateSelector from '@/components/DateSelector.vue'
import GuestRoomSelector from '@/components/GuestRoomSelector.vue'

const router = useRouter()

const lodgeStore = useLodgeStore()
const roomStore = useRoomStore()

const startDate = ref()
const endDate = ref()
const minCheckoutDate = ref()
const availableRooms = ref()
const guestCount = ref(1)

const minCheckInDate = new Date()

const handleCheckInSelect = date => {
  minCheckoutDate.value = addDays(new Date(date), 2)
  startDate.value = date
}

const handleCheckOutSelect = date => {
  endDate.value = date
}

const handleGuestSelect = g => {
  guestCount.value = g
  console.log(guestCount.value)
}

const fetchAvailableRooms = async () => {
  await roomStore.fetchAvailableRooms(
    startDate.value,
    endDate.value,
    guestCount.value,
  )
  availableRooms.value = roomStore.availableRooms
}

const goToRoomDetail = roomId => {
  router.push({ name: 'room-detail', params: { id: roomId } })
}

onMounted(async () => {
  await lodgeStore.fetchLodge()
})
</script>
