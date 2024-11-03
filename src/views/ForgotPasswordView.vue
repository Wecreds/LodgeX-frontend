<template>
  <div class="fixed bottom-5 left-5 p-0 cursor-pointer">
    <RouterLink to="/">
      <HomeIcon class="w-6 h-6 text-rich-black" />
    </RouterLink>
  </div>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://placehold.co/600x400?text=Logo" alt="Logo" />
    </div>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <transition :name="transitionName" mode="out-in">
        <div v-if="step === 1" key="step1">
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-rich-black">
            Forgot your password
          </h2>
          <p class="mt-4 text-center text-base font-bold tracking-tight text-gray-500">
            Enter the email address you used to register your account, we will send a recovery code to that email
            address. If the email doesn't exist in our database, you will not receive any email.
          </p>
          <form class="space-y-6" action="#" method="POST" @submit.prevent="nextStep">
            <div class="mt-5">
              <label for="email" class="block text-sm/6 font-medium text-rich-black">Email address</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" required=""
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none" />
              </div>
            </div>
            <div>
              <button type="submit"
                class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color">
                Send recovery code
              </button>
            </div>
          </form>
        </div>
        <div v-else-if="step === 2" key="step2">
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-rich-black">
            Forgot your password
          </h2>
          <p class="mt-4 text-center text-lg font-bold tracking-tight text-gray-500">
            Now enter the recovery code that was sent to your email
          </p>
          <form class="space-y-6" action="#" method="POST" @submit.prevent="nextStep">
            <div class="mt-3">
              <label for="name" class="block text-2xl/9 font-bold text-rich-black text-center">Code</label>
              <div class="mt-2 flex space-x-2 justify-center items-center">
                <input v-for="(digit, index) in code" :key="index" v-model="code[index]" @input="onInput(index)"
                  maxlength="1" type="text"
                  class="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500" />
              </div>
            </div>
            <div class="flex gap-4">
              <button @click="prevStep" type="reset"
                class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color">
                Change email
              </button>
              <button type="submit"
                class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color">
                Verify code
              </button>
            </div>
          </form>
        </div>
      </transition>
      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Remembered your password?
        {{ ' ' }}
        <RouterLink to="login" class="font-semibold text-primary-color hover:text-secondary-color">Sign in</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { HomeIcon } from '@heroicons/vue/24/solid'

const step = ref(1)
const code = ref(["", "", "", "", "", ""]);
const transitionName = ref("slide-right");

const onInput = (index) => {
  if (code.value[index] && index < code.value.length - 1) {
    document.querySelectorAll('input')[index + 1].focus();
  }
};

const nextStep = () => {
  transitionName.value = "slide-right";
  step.value++;
}

const prevStep = () => {
  transitionName.value = "slide-left";
  step.value--;
}
</script>
<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.slide-right-enter-from {
  transform: translateX(20%);
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(-20%);
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.slide-left-enter-from {
  transform: translateX(-20%);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(20%);
  opacity: 0;
}
</style>
