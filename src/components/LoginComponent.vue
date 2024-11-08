<template>
  <div
    class="shadow-2xl w-1/3 h-full bg-rich-white absolute z-50 rounded-sm lg:px-15 lg:py-9 md:px-14 md:py-5 sm:py-0 sm:px-12 shrink-0 pt-0"
  >
    <div
      class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 pt-0 lg:px-8 shrink-0"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <div
          class="absolute top-5 right-5 p-0 cursor-pointer"
          v-if="!isLoginRoute"
        >
          <ArrowRightIcon
            class="w-6 h-6 text-rich-black"
            @click="$emit('closeLoginComponent')"
          />
        </div>
        <div class="absolute top-5 right-5 p-0 cursor-pointer" v-else>
          <RouterLink to="/">
            <ArrowRightIcon
              class="w-6 h-6 text-rich-black"
              @click="$emit('closeLoginComponent')"
            />
          </RouterLink>
        </div>
        <div class="w-1/2 mx-auto">
          <img
            class="mx-auto object-contain"
            :src="lodgeStore.logo?.photo.url"
            alt="Logo"
          />
        </div>
        <h2
          class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-rich-black md:text-xl/9 sm:text-lg/9"
        >
          Sign in to your account
        </h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          class="space-y-6"
          action="#"
          method="POST"
          @submit.prevent="logIn()"
        >
          <div>
            <label
              for="email"
              class="block text-sm/6 font-medium text-rich-black"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none"
                v-model="email"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm/6 font-medium text-rich-black"
                >Password</label
              >
              <div class="text-sm">
                <RouterLink
                  to="/forgot-password"
                  class="font-semibold text-primary-color hover:text-secondary-color"
                  >Forgot password?</RouterLink
                >
              </div>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none"
                v-model="password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
            >
              Sign in
            </button>
          </div>
        </form>
        <p class="mt-10 text-center text-sm/6 text-gray-500">
          Don't have a account?
          {{ ' ' }}
          <RouterLink
            to="/register"
            class="font-semibold text-primary-color hover:text-secondary-color"
            >Sign up</RouterLink
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { computed, onMounted, ref } from 'vue'

import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import Swal from 'sweetalert2'

import { useAuthStore } from '@/stores/auth'
import { useLodgeStore } from '@/stores/lodge'

const authStore = useAuthStore()
const lodgeStore = useLodgeStore()

const route = useRoute()
const router = useRouter()

const email = ref('')
const password = ref('')

const isLoginRoute = computed(() => route.path === '/login')
const credentials = computed(() => {
  return {
    email: email.value,
    password: password.value,
  }
})

const logIn = async () => {
  try {
    await authStore.setToken(credentials.value)
    route.path === '/login'
      ? router.push({ name: 'home' })
      : router.push({ name: 'refresh' })
  } catch (error) {
    if (error.status === 401) {
      Swal.fire({
        title: 'Error',
        text: 'No active account found with the given credentials',
        icon: 'error',
      })
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Unknown error occurred, try later',
        icon: 'error',
      })
    }
  }
}

onMounted(() => {
  lodgeStore.fetchImages()
})
</script>
