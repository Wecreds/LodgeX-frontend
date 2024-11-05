<template>
  <div class="fixed bottom-5 left-5 p-0 cursor-pointer">
    <RouterLink to="/">
      <HomeIcon class="w-6 h-6 text-rich-black" />
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
      <transition :name="transitionName" mode="out-in">
        <div v-if="step === 1" key="step1">
          <form
            class="space-y-6"
            action="#"
            method="POST"
            @submit.prevent="nextStep()"
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
                  required=""
                  v-model="newUser.email"
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
                  v-model="newUser.password"
                  required=""
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label
                  for="confirm password"
                  class="block text-sm/6 font-medium text-rich-black"
                  >Confirm Password</label
                >
              </div>
              <div class="mt-2">
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  v-model="confirmPassword"
                  required=""
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none"
                />
                <p v-if="diffPassword" class="text-center text-red-700 font-bold">Password's doesnt match.</p>
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
                :disabled="diffPassword"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div v-else-if="step === 2" key="step2">
          <form
            class="space-y-6"
            action="#"
            method="POST"
            @submit.prevent="nextStep()"
          >
            <div>
              <label
                for="name"
                class="block text-sm/6 font-medium text-rich-black"
                >Name</label
              >
              <div class="mt-2">
                <input
                  v-model="newUser.name"
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
                  v-model="newUser.telephone"
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
                <div class="items-center hidden md:flex">
                  <InformationCircleIcon
                    class="w-6 h-6 top-1 relative z-50"
                    v-on:mouseover="IDCardInfo = true"
                    v-on:mouseleave="IDCardInfo = false"
                  />
                  <transition name="info-fade">
                    <div
                      v-if="IDCardInfo"
                      class="ml-12 bg-gray-300 z-40 absolute rounded-lg w-52 text-rich-black p-4"
                    >
                      You can use your identification card or driver's license.
                      Please ensure the document is in .PDF or .XLS format and
                      includes both the front and back sides.
                    </div>
                  </transition>
                </div>
              </div>
              <div class="mt-2">
                <input
                  id="document"
                  name="document"
                  type="file"
                  @change="handleFileUpload($event)"
                  capture
                  required=""
                  class="block w-full outline-none"
                  accept="multipart/form-data"
                />
              </div>
            </div>
            <div class="flex gap-4">
              <button
                @click="prevStep()"
                type="reset"
                class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
              >
                <ArrowLeftIcon class="w-6 h-6" />
              </button>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
              >
                <ArrowRightIcon class="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
        <div v-else-if="step === 3" key="step3">
          <form
            class="space-y-6"
            action="#"
            method="POST"
            @submit.prevent="registerUser()"
          >
            <div class="flex justify-between">
              <div class="flex flex-col">
                <label
                  for="birth date"
                  class="block text-sm/6 font-medium text-rich-black"
                  >Birth Date</label
                >
                <input
                  id="birth"
                  name="birth"
                  type="date"
                  required=""
                  v-model="newUser.personal_info.birthDate"
                  class="block w-fit rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none text-center mt-1"
                />
              </div>
              <div class="flex flex-col justify-center">
                <label
                  for="nationality"
                  class="block text-sm/6 font-medium text-rich-black"
                  >Nationality</label
                >
                <NationalitySelectorComponent v-model="newUser.personal_info.nationality"/>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex flex-col w-6/12">
                <label
                  for="country"
                  class="block text-sm/6 font-medium text-rich-black"
                  >Country</label
                >
                <CountrySelectorComponent v-model="selectedCountry" />
              </div>
              <div class="flex flex-col justify-center w-5/12 items-center">
                <label
                  for="state"
                  class="block text-sm/6 font-medium text-rich-black text-right"
                  >State</label
                >
                <StateSelectorComponent
                  :selectedCountry="selectedCountry"
                  v-model="selectedState"
                />
              </div>
            </div>
            <div class="flex justify-between gap-4">
              <div class="flex flex-col w-8/12">
                <label
                  for="city"
                  class="block text-sm/6 font-medium text-rich-black"
                  >City</label
                >
                <CitySelectorComponent
                  :selectedCountry="selectedCountry"
                  :selectedState="selectedState"
                  v-model="newUser.personal_info.city"
                />
              </div>
              <div class="flex flex-col justify-center w-1/3 items-center">
                <label
                  for="postal code"
                  class="block text-sm/6 font-medium text-rich-black text-right"
                  >Postal Code</label
                >
                <input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  required=""
                  v-model="newUser.personal_info.postalCode"
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none text-center mt-1"
                />
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex flex-col w-9/12">
                <label
                  for="street address"
                  class="block text-sm/6 font-medium text-rich-black"
                  >Street Address</label
                >
                <input
                  id="streetAddress"
                  name="streetAddress"
                  type="text"
                  v-model="newUser.personal_info.streetAddress"
                  required=""
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none text-center mt-1"
                />
              </div>
            </div>
            <div class="flex gap-4">
              <button
                @click="prevStep()"
                type="reset"
                class="flex w-4/12 justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
              >
                <ArrowLeftIcon class="w-6 h-6" />
              </button>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
              >
                Finish sign up
              </button>
            </div>
          </form>
        </div>
      </transition>
      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Already have an account?
        {{ ' ' }}
        <RouterLink
          to="login"
          class="font-semibold text-primary-color hover:text-secondary-color"
          >Sign in</RouterLink
        >
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import Swal from 'sweetalert2'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  HomeIcon,
} from '@heroicons/vue/24/solid'
import { InformationCircleIcon } from '@heroicons/vue/24/outline'
import NationalitySelectorComponent from '@/components/NationalitySelectorComponent.vue'
import CountrySelectorComponent from '@/components/CountrySelectorComponent.vue'
import StateSelectorComponent from '@/components/StateSelectorComponent.vue'
import CitySelectorComponent from '@/components/CitySelectorComponent.vue'

const step = ref(1)

const IDCardInfo = ref(false)

const router = useRouter()

const selectedCountry = ref(null)
const selectedState = ref(null)
const diffPassword = computed(() => confirmPassword.value !== newUser.value.password)

const confirmPassword = ref('')

const userStore = useUserStore()

const transitionName = ref('slide-right')

const newUser = ref({
  email: undefined,
  password: undefined,
  name: undefined,
  document: undefined,
  personal_info: {
    nationality: undefined,
    country: computed(() => selectedCountry.value),
    birth_date: undefined,
    city: undefined,
    state: computed(() => selectedState.value),
    street_address: undefined,
    postal_code: undefined,
  },
  telephone: undefined,
})

function handleFileUpload($event){
  const file = $event.target.files[0]
  if (file) {
    newUser.value.document = file;
  }
}

const registerUser = async() => {
    const response = await userStore.registerUser(newUser.value)
    if(response.status === 201){
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'User registered successfully, you will be redirected to the login page.',
        confirmButtonText: 'Ok',
      }).then(() => {
        router.push({ name: 'login' })
      })
    } else if(response === "email"){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'A account with that email address already exists.',
      })
    } else if(response === "telephone"){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'A account with that telephone number already exists.',
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'A unknown error occurred, please try again later.',
      })
    }
}

const nextStep = () => {
  transitionName.value = 'slide-right'
  step.value++
}

const prevStep = () => {
  transitionName.value = 'slide-left'
  step.value--
}
</script>
<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
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
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.slide-left-enter-from {
  transform: translateX(-20%);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(20%);
  opacity: 0;
}

.info-fade-enter-active,
.info-fade-leave-active {
  transition: opacity 0.25s ease;
}

.info-fade-enter-from,
.info-fade-leave-to {
  opacity: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
