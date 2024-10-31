<template>
  <select v-model="selectedNationality" id="nationality"
    class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none text-center mt-2">
    <option v-for="nationality in nationalities" :key="nationality" :value="nationality">
      {{ nationality }}
    </option>
  </select>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const selectedNationality = ref(null)
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
