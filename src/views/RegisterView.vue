<template>
  <div class="absolute bottom-5 right-5 p-0 cursor-pointer">
    <RouterLink to="/">
      <ArrowRightIcon
        class="w-6 h-6 text-rich-black"
        @click="$emit('closeLoginComponent')"
      />
    </RouterLink>
  </div>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://placehold.co/600x400?text=Logo"
        alt="Logo"
      />
      <h2
        class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-rich-black"
      >
        Sign up
      </h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <transition name="form-fade-slide" mode="out-in">
        <div v-if="step === 1" key="step1">
          <form class="space-y-6" action="#" method="POST" @submit.prevent="nextStep()">
            <div>
              <label for="email" class="block text-sm/6 font-medium text-rich-black"
                >Email address</label
              >
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required=""
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none"
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
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required=""
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm/6 font-medium text-rich-black"
                  >Confirm Password</label
                >
              </div>
              <div class="mt-2">
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  required=""
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div v-else-if="step === 2" key="step2">
          <form class="space-y-6" action="#" method="POST" @submit.prevent="prevStep()">
            <div>
              <label for="name" class="block text-sm/6 font-medium text-rich-black"
                >Name</label
              >
              <div class="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required=""
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label
                  for="telephone"
                  class="block text-sm/6 font-medium text-rich-black"
                  >Telephone</label
                >
              </div>
              <div class="mt-2">
                <input
                  id="telephone"
                  name="telephone"
                  type="number"
                  required=""
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none overflow-hidden"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label
                  for="document"
                  class="block text-sm/6 font-medium text-rich-black"
                  >ID Card</label
                >
                <div class="flex items-center sm:hidden md:flex lg:flex">
                  <InformationCircleIcon class="w-6 h-6 top-1 relative z-50" v-on:mouseover="IDCardInfo = true" v-on:mouseleave="IDCardInfo = false"/>
                  <transition name="info-fade">
                    <div v-if="IDCardInfo" class="ml-12 bg-gray-300 z-40 absolute rounded-lg w-52 text-rich-black p-4">You can use your identification card or driver's license. Please ensure the document is in .PDF or .XLS format and includes both the front and back sides.</div>
                  </transition>
                </div>
              </div>
              <div class="mt-2">
                <input
                  id="document"
                  name="document"
                  type="file"
                  required=""
                  class="block w-full outline-none"
                  accept="application/pdf,application/vnd.ms-excel"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </transition>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Already have an account?
        {{ ' ' }}
        <a
          href="login"
          class="font-semibold text-primary-color hover:text-secondary-color"
          >Sign in</a
        >
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import { InformationCircleIcon } from '@heroicons/vue/24/outline'

const step = ref(1);

const IDCardInfo = ref(false);

const nextStep = () => {
  step.value ++;
};

const prevStep = () => {
  step.value --;
};
</script>
<style scoped>
.form-fade-slide-enter-active, .form-fade-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.info-fade-enter-active, .info-fade-leave-active {
  transition: opacity 0.25s ease;
}

.info-fade-enter-from,
.info-fade-leave-to {
  opacity: 0;
}

.form-fade-slide-enter-from,
.form-fade-slide-leave-to {
  opacity: 0;
}
.form-fade-slide-enter-from {
  transform: translateX(-20%);
}
.form-fade-slide-leave-to {
  transform: translateX(20%);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number]{
    -moz-appearance: textfield;
}
</style>
