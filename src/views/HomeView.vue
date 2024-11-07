<template>
  <div class="py-8 px-4 sm:px-6 lg:px-8 z-10 mt-5">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ lodgeStore?.lodgeInfo?.lodge_name }}</h1>

      <div class="flex flex-row gap-1">
        <i class="fas fa-map-marker-alt text-primary-color mt-1"></i>
        <p class="text-gray-600 mb-6">{{ lodgeStore?.lodgeInfo?.lodge_location }}</p>
      </div>

      <ImageGallery />

      <div class="bg-rich-white p-6 rounded-lg shadow mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">About the Lodge</h2>
        <p class="text-gray-600 mb-4">{{ lodgeStore?.lodgeInfo?.lodge_description }}</p>
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
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Payment Methods</h3>
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
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useLodgeStore } from '@/stores/lodge'

import ImageGallery from '@/components/ImageGallery.vue'

const lodgeStore = useLodgeStore()

onMounted(async () => {
  await lodgeStore.fetchLodge()
})
</script>
