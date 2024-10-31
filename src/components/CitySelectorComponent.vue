<template>
  <select v-model="selectedCity" id="city"
    class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none text-center mt-2">
    <option disabled v-if="!cities">Select a state first</option>
    <option v-if="cities && cities.length === 0" disabled>No cities available</option>
    <option v-for="city in cities" :key="city" :value="city">
      {{ city }}
    </option>
  </select>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
  selectedCountry: {
    type: String,
  },
  selectedState: {
    type: String,
  }
});

const selectedCity = ref(null);
const cities = ref(null);

const fetchCities = () => {
  if (props.selectedState) {
    axios.post('https://countriesnow.space/api/v0.1/countries/state/cities', {
      country: props.selectedCountry,
      state: props.selectedState
    })
      .then(response => {
        cities.value = response.data.data;
      })
      .catch(error => console.error(error));
  }
}

watch([() => props.selectedCountry, () => props.selectedState], () => {
    fetchCities();
});

onMounted(() => {
  if (props.selectedState) {
    fetchCities(props.selectedState);
  }
});
</script>
