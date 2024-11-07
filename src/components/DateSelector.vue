<template>
  <div>
    <VueDatePicker
      v-model="date"
      @update:model-value="$emit('handleDateSelect', formattedDate)"
      :enable-time-picker="false"
      :format="formatDate"
      :min-date="minDate"
    />
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { format } from 'date-fns'

const props = defineProps({
  minDate: {
    type: Date,
    default: null,
  },
})

const date = ref()

const formattedDate = computed(() => {
  return date.value ? format(new Date(date.value), 'yyyy-MM-dd') : null
})

const formatDate = date => format(new Date(date), 'yyyy-MM-dd')

watch(
  () => props.minDate,
  newMinDate => {
    if (date.value && new Date(date.value) < new Date(newMinDate)) {
      date.value = newMinDate
    }
  },
)
</script>
