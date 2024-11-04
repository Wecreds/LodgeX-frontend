<template>
  <div class="fixed bottom-5 left-5 p-0 cursor-pointer">
    <RouterLink to="/">
      <HomeIcon class="w-6 h-6 text-rich-black" />
    </RouterLink>
  </div>
  <div
    class="flex min-h-screen justify-center items-center px-6 py-12 lg:px-8 text-rich-black"
  >
    <LoginComponent />
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { HomeIcon } from '@heroicons/vue/24/solid'
import LoginComponent from '@/components/LoginComponent.vue'
</script>
