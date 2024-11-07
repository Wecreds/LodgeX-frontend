<template>
  <div class="font-Roboto bg-rich-white">
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import { computed, watch } from 'vue';
import { useLodgeStore } from '@/stores/lodge';

const lodgeStore = useLodgeStore();

const logo = computed(() => lodgeStore?.logo);

watch(logo, (newLogo) => {
  const favicon = document.getElementById('favicon');
  if (newLogo) {
    console.log(newLogo);
    favicon.href = newLogo.photo.url;
  } else {
    favicon.href = '';
  }
});

</script>
