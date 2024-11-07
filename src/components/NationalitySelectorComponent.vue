<template>
  <select
    v-model="selectedNationality"
    id="nationality"
    class="block rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none text-center mt-2"
    :class="path === '/register' ? 'w-full' : 'w-min'"
  >
    <option
      v-for="nationality in nationalities"
      :key="nationality"
      :value="nationality"
    >
      {{ nationality }}
    </option>
  </select>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

const route = useRoute()

const path = route.path

const userStore = useUserStore()
const selectedNationality = ref(
  userStore.userData?.personal_info.nationality,
  null,
)
const nationalities = ref([])

onMounted(() => {
  fetch('/nationalities.json')
    .then(response => response.json())
    .then(data => {
      nationalities.value = data
    })
    .catch(error => console.error(error))
})
</script>
