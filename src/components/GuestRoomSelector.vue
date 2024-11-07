<template>
  <div class="relative w-full">
    <label class="block font-medium mb-1 text-gray-700"
      >Adults · Children</label
    >
    <input
      type="text"
      readonly
      :value="formattedGuestRoom"
      @click="showGuestOptions = !showGuestOptions"
      class="cursor-pointer border border-gray-300 rounded px-2 py-1.5 w-full text-gray-800"
    />
    <div
      v-if="showGuestOptions"
      class="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-full z-10"
    >
      <div class="flex items-center justify-between mb-3">
        <span class="text-gray-700">Adults</span>
        <div class="flex items-center space-x-2">
          <button
            @click="adults--"
            :disabled="adults <= 1"
            class="w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center"
          >
            -
          </button>
          <span class="text-gray-800">{{ adults }}</span>
          <button
            @click="adults++"
            class="w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between mb-3">
        <span class="text-gray-700">Children</span>
        <div class="flex items-center space-x-2">
          <button
            @click="childrenDecrease"
            :disabled="children <= 0"
            class="w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center"
          >
            -
          </button>
          <span class="text-gray-800">{{ children }}</span>
          <button
            @click="childrenIncrease"
            class="w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
      <button
        @click="handleOk()"
        class="mt-4 w-full bg-primary-color text-white py-2 rounded-lg font-semibold"
      >
        OK
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'

const showGuestOptions = ref(false)
const adults = ref(1)
const children = ref(0)

const emit = defineEmits('handleGuestSelect')

const childrenIncrease = () => {
  children.value++
}

const childrenDecrease = () => {
  children.value--
}

const formattedGuestRoom = computed(() => {
  return `${adults.value} Adult${adults.value > 1 ? 's' : ''} · ${children.value} ${children.value > 1 ? 'Children' : 'Child'}`
})

const handleOk = () => {
  showGuestOptions.value = false
  const guestCount = adults.value + children.value
  emit('handleGuestSelect', guestCount)
}
</script>
