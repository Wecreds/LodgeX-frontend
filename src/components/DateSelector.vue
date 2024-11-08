<template>
  <div class="w-full md:w-fit sm:w-fit">
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
<style>
.dp__theme_light {
  --dp-background-color: white;
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #124559;
  --dp-primary-disabled-color: #6bacea;
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ddd;
  --dp-menu-border-color: #ddd;
  --dp-border-color-hover: #aaaeb7;
  --dp-border-color-focus: #124559;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
  --dp-marker-color: #ff6f60;
  --dp-tooltip-color: #fafafa;
  --dp-disabled-color-text: #8e8e8e;
  --dp-highlight-color: #124559;
  --dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);
  --dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);
  --dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);
}
</style>
