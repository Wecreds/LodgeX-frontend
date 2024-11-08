<template>
  <div class="container mx-auto">
    <div class="mb-4">
      <img
        :src="selectedImage?.photo.file || images[0]?.photo.file"
        alt="Main Lodge View"
        class="object-cover w-full h-72 md:h-96 rounded-md cursor-pointer"
        @click="toggleGallery"
      />
    </div>

    <div class="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
      <div
        v-for="(image, index) in images.slice(0, 8)"
        :key="index"
        class="cursor-pointer"
        @click="selectImage(image)"
      >
        <img
          :src="image.photo.file"
          alt="Thumbnail"
          class="object-cover w-full h-24 rounded-md transition-transform transform hover:scale-105"
        />
      </div>
      <div
        v-if="images.length > 8"
        class="flex justify-center items-center text-center bg-gray-200 text-gray-700 rounded-md cursor-pointer"
        @click="toggleGallery"
      >
        +{{ images.length - 8 }} more photos
      </div>
    </div>

    <div
      v-if="isGalleryOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10 p-4"
    >
      <div
        class="relative bg-white rounded-lg max-w-screen-md w-full max-h-[80vh] overflow-y-auto"
      >
        <!-- Modal Header -->
        <div class="flex justify-between items-center p-4 border-b">
          <h3 class="text-xl font-semibold">Gallery</h3>
          <button
            @click="toggleGallery"
            class="px-4 py-2 bg-primary-color text-white rounded-md"
          >
            Close
          </button>
        </div>

        <!-- Modal Gallery Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="cursor-pointer"
            @click="selectImage(image)"
          >
            <img
              :src="image.photo.url"
              alt="Gallery Image"
              class="object-cover w-full h-32 sm:h-40 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  roomPhotos: {
    type: Array,
    default: null,
  },
})

const images = ref([])
const selectedImage = ref(null)
const isGalleryOpen = ref(false)

const toggleGallery = () => {
  isGalleryOpen.value = !isGalleryOpen.value
}

const selectImage = image => {
  selectedImage.value = image
}

watch(
  () => props.roomPhotos,
  newPhotos => {
    if (newPhotos && newPhotos.length > 0) {
      console.log(newPhotos)

      selectedImage.value = newPhotos[0]
      images.value = newPhotos
    }
  },
  { immediate: true },
)
</script>
