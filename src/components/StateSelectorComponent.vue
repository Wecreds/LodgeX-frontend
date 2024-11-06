<template>
  <select
    v-model="selectedState"
    id="state"
    class="block rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none text-center mt-2"
    :class="path === '/register' ? 'w-full' : 'w-min'"
  >
    <option disabled v-if="!states">Select a country first</option>
    <option v-if="states && states.length === 0" disabled>
      No States available
    </option>
    <option v-else v-for="state in states" :key="state" :value="state">
      {{ state }}
    </option>
  </select>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import { useUserStore } from '@/stores/user';

const route = useRoute()

const path = route.path

const userStore = useUserStore()

const props = defineProps({
  selectedCountry: {
    type: String,
  },
})

const selectedState = ref(userStore.userData?.personal_info.state, null)
const states = ref(null)

const loadStates = countryName => {
  axios
    .post('https://countriesnow.space/api/v0.1/countries/states', {
      country: countryName,
    })
    .then(response => {
      states.value = response.data.data.states.map(state => state.name)
    })
    .catch(error => console.error(error))
}

watch(
  () => props.selectedCountry,
  newCountry => {
    if (newCountry) {
      loadStates(newCountry)
    }
  },
)

onMounted(() => {
  if (props.selectedCountry) {
    loadStates(props.selectedCountry)
  }
})
</script>
