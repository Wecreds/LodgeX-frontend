<template>
  <div>
    Refreshing...
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

onMounted(() => {
  if (route?.redirectedFrom) {
    router.push(route.redirectedFrom.fullPath);
  } else if (router.options.history.state.back) {
    router.back();
  }
});
</script>
