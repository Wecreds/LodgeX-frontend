<template>
  <div class="shadow-2xl w-fit p-16 bg-rich-white absolute z-50 rounded-sm">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="absolute top-2 right-2 p-0 cursor-pointer">
            <ArrowRightIcon class="w-6 h-6 text-rich-black" @click="$emit('closeLoginComponent')"/>
        </div>
        <img class="mx-auto h-10 w-auto" src="https://placehold.co/600x400?text=Logo" alt="Logo">
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none">
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-primary-color hover:text-secondary-color">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none">
            </div>
          </div>
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color">Sign in</button>
          </div>
        </form>
        <p class="mt-10 text-center text-sm/6 text-gray-500">
            Don't have a account?
          <a href="#" class="font-semibold text-primary-color hover:text-secondary-color">Sing up</a>
        </p>
      </div>
  </div>
</template>
<script setup>
import {
 ArrowRightIcon,
} from '@heroicons/vue/24/solid'
</script>
