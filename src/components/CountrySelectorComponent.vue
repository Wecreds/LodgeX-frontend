<template>
  <select v-model="selectedCountry" id="country"
    class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none text-center mt-2">
    <option value="" disabled>Select your country</option>
    <option v-for="country in countries" :key="country" :value="country">
      {{ country }}
    </option>
  </select>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const selectedCountry = ref(null);
const countries = ref([]);

onMounted(() => {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      countries.value = data.map(country => country.name.common);
    })
    .catch(error => console.error(error));
});
</script>
