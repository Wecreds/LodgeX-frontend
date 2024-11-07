<template>
  <div v-if="room" class="room-detail-container min-h-screen">
    <h2 class="text-3xl font-bold mb-4">{{ room.name }}</h2>
    <div class="flex flex-col lg:flex-row">
      <img
        src="https://via.assets.so/img.jpg?w=400&h=150&tc=blue&bg=#cecece"
        alt="Room Image"
        class="object-cover w-full h-64 lg:w-1/3 lg:h-auto rounded-md mb-4 lg:mb-0"
      />
      <div class="lg:w-2/3 lg:pl-6">
        <p class="text-lg text-gray-700 mb-4">{{ room.description }}</p>
        <div class="mt-6">
          <h3 class="text-xl font-semibold mb-2">Pricing</h3>
          <p class="text-lg font-medium">
            R${{ room.price_by_day }} Pey day Pey Person
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-2 mt-4 items-end">
      <form @submit.prevent="bookRoom()" class="contents unset-0">
        <div>
          <label
            for="check-in"
            class="block text-xl font-medium text-rich-black"
            >Check-in</label
          >
          <input
            id="startDate"
            name="startDate"
            type="date"
            required=""
            v-model="startDate"
            class="block w-fit rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none text-center mt-1"
          />
        </div>
        <div>
          <label
            for="check-out"
            class="block text-xl font-medium text-rich-black"
            >Check-out</label
          >
          <input
            id="endDate"
            name="endDate"
            type="date"
            required=""
            v-model="endDate"
            class="block w-fit rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none text-center mt-1"
          />
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color self-end"
          >
            Book
          </button>
        </div>
      </form>
    </div>
  </div>
  <div v-else class="text-center">Loading...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRoomStore } from '@/stores/room'

const roomStore = useRoomStore()
const route = useRoute()

const roomId = route.params.id

const room = ref(null)

const startDate = ref()
const endDate = ref()

const bookRoom = async () => {
  try {
    const response = await roomStore.bookRoom(
      roomId,
      startDate.value,
      endDate.value,
    )
    console.log(response)
  } catch (error) {
    console.error('Error booking room:', error)
  }
}

onMounted(async () => {
  room.value = await roomStore.fetchRoomDetails(roomId)
})
</script>

<style scoped>
.room-detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.room-detail-container h2 {
  color: #333;
}

.room-detail-container img {
  border-radius: 8px;
}
</style>
