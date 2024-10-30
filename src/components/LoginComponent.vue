<template>
  <div
    class="shadow-2xl w-fit px-16 py-10 bg-rich-white absolute z-50 rounded-sm"
  >
    <div
      class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
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
        <img
          class="mx-auto h-10 w-auto"
          src="https://placehold.co/600x400?text=Logo"
          alt="Logo"
        />
        <h2
          class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-rich-black"
        >
          Sign in to your account
        </h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
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
                class="block w-full rounded-md border-0 py-1.5 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6"
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
                <a
                  href="#"
                  class="font-semibold text-primary-color hover:text-secondary-color"
                  >Forgot password?</a
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
                class="block w-full rounded-md border-0 py-1.5 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6"
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
          <a
            href="register"
            class="font-semibold text-primary-color hover:text-secondary-color"
            >Sing up</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { computed } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

const route = useRoute()

const isLoginRoute = computed(() => route.path === '/login')
</script>
