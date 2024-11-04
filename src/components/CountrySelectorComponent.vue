<template>
  <select
    v-model="selectedCountry"
    id="country"
    class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none text-center mt-2"
  >
    <option v-for="country in countries" :key="country" :value="country">
      {{ country }}
    </option>
  </select>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const selectedCountry = ref(null)
const countries = ref([])

onMounted(() => {
  fetch('https://countriesnow.space/api/v0.1/countries')
    .then(response => response.json())
    .then(data => {
      countries.value = data.data.map(country => country.country)
    })
    .catch(error => console.error(error))
})
</script>
