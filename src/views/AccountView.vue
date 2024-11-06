<template>
  <div class="m-12 p-12 flex">
    <div class="flex flex-col gap-4 px-6 w-1/3 p-4">
      <h1 class="text-2xl/9">My Account</h1>
      <hr class="text-black w-full" />
      <div class="text-xl flex flex-col gap-4 justify-start items-start">
        <button class="hover:underline hover:text-gray-500 cursor-pointer" @click="chooseStep(1)">Account
          credentials</button>
        <button class="hover:underline hover:text-gray-500 cursor-pointer" @click="chooseStep(2)">Personal
          information</button>
        <button class="hover:underline hover:text-gray-500 cursor-pointer" @click="chooseStep(3)">My bookings</button>
        <button class="hover:underline hover:text-gray-500 cursor-pointer" @click="chooseStep(4)">Change
          password</button>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="step === 1" key="step1" class="w-full flex flex-col gap-4 bg-gray-200 p-4">
        <div>
          <h1 class="text-2xl/9">Account credentials</h1>
        </div>
        <div class="flex flex-col gap-4">
          <form class="space-y-6" action="#" method="POST" @submit.prevent="changeCredentials()">
            <div>
              <label for="email" class="block text-xl/6 font-medium text-rich-black">Email address</label>
              <input id="email" name="email" type="email" required="" :readonly="!editing"
                v-model="userCredentials.email"
                class="block w-1/2 rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none">
            </div>
            <div>
              <label for="name" class="block text-xl/6 font-medium text-rich-black">Name</label>
              <input id="name" name="name" type="text" required="" :readonly="!editing" v-model="userCredentials.name"
                class="block w-1/2 rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none" />
            </div>
            <div>
              <label for="telephone" class="block text-xl/6 font-medium text-rich-black">Telephone</label>
              <input id="telephone" name="telephone" type="number" required="" :readonly="!editing"
                v-model="userCredentials.telephone"
                class="block w-1/2 rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none" />
            </div>
            <div class="flex flex-row gap-4">

              <button
                class="flex justify-center rounded-md bg-primary-color px-5 py-3 text-2xl/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
                @click="editing = true" v-if="!editing">Edit</button>
              <button
                class="flex justify-center rounded-md bg-primary-color px-5 py-3 text-xl/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
                @click="editing = false" v-else>Stop Editing</button>
              <input id="telephone" name="telephone" type="password" required="" v-model="currentPassword"
                v-if="!editing" placeholder="Password..."
                class="block w-1/3 rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none" />
              <button type="submit"
                class="flex justify-center rounded-md bg-primary-color px-5 py-3 text-2xl/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
                v-if="!editing">Save</button>
            </div>
          </form>
        </div>
      </div>
      <div v-else-if="step === 2" key="step2" class="w-full flex flex-col gap-4 bg-gray-200 p-4">
        <div>
          <h1 class="text-2xl/9">Personal information</h1>
        </div>
        <div class="flex flex-col gap-4">
          <form class="unstyle-me" action="#" method="POST" @submit.prevent="changePersonalInfo()">
            <div class="flex gap-4 w-full">
              <div class="w-1/2 flex flex-col gap-1">
                <label for="birthDate" class="block text-xl/6 font-medium text-rich-black">Birth Date</label>
                <input id="birthDate" name="birthDate" type="date" required="" :readonly="!editing"
                  v-model="userPersonalInfo.birthDate" :value="userPersonalInfo.birthDate"
                  class="block w-1/2 rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none">
              </div>
              <div class="w-1/2 flex flex-col gap-1">
                <label for="nationality" class="block text-xl/6 font-medium text-rich-black">Nationality</label>
                <NationalitySelectorComponent v-model="userPersonalInfo.nationality" />
              </div>
            </div>
            <div class="flex gap-4 w-full">
              <div class="w-1/2 flex flex-col gap-1">
                <label for="email" class="block text-xl/6 font-medium text-rich-black">Country</label>
                <CountrySelectorComponent v-model="userPersonalInfo.country" class="w-1/2" />
              </div>
              <div class="w-1/2 flex flex-col gap-1">
                <label for="state" class="block text-xl/6 font-medium text-rich-black">State</label>
                <StateSelectorComponent :selectedCountry="userPersonalInfo.country" v-model="userPersonalInfo.state" />
              </div>
            </div>
            <div class="flex gap-4 w-full">
              <div class="w-1/2 flex flex-col gap-1">
                <label for="city" class="block text-xl/6 font-medium text-rich-black">City</label>
                <CitySelectorComponent :selectedCountry="userPersonalInfo.country"
                  :selectedState="userPersonalInfo.state" v-model="userPersonalInfo.city" />
              </div>
              <div class="w-1/2 flex flex-col gap-1">
                <label for="birthDate" class="block text-xl/6 font-medium text-rich-black">Street Address</label>
                <input id="birthDate" name="birthDate" type="text" required="" :readonly="!editing"
                  v-model="userPersonalInfo.address"
                  class="block w-1/2 rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none">
              </div>
            </div>
            <div class="flex gap-4 w-full">
              <div class="w-1/2 flex flex-col gap-1">
                <label for="postalCode" class="block text-xl/6 font-medium text-rich-black">Postal Code</label>
                <input id="postalCode" name="postalCode" type="number" required="" :readonly="!editing"
                  v-model="userPersonalInfo.postalCode"
                  class="block w-1/2 rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none">
              </div>
            </div>
            <div class="flex flex-row gap-4 w-full">
              <button
                class="flex justify-center rounded-md bg-primary-color px-5 py-3 text-2xl/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
                @click="editing = true" v-if="!editing">Edit</button>
              <button
                class="flex justify-center rounded-md bg-primary-color px-5 py-3 text-xl/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
                @click="editing = false" v-else>Stop Editing</button>
              <input id="telephone" name="telephone" type="password" required="" v-model="currentPassword"
                v-if="!editing" placeholder="Password..."
                class="block w-1/3 rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none" />
              <button type="submit"
                class="flex justify-center rounded-md bg-primary-color px-5 py-3 text-2xl/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
                v-if="!editing">Save</button>
            </div>
          </form>
        </div>
      </div>
      <div v-else-if="step === 3" key="step3" class="w-full flex flex-col gap-4 bg-gray-200 p-4">
        <div>
          <h1 class="text-2xl font-semibold mb-4">My Bookings</h1>
        </div>
        <div class="text-2xl font-bold" v-if="bookings.length === 0">No bookings were made.</div>
        <div v-for="(booking, index) in bookings" :key="index" class="bg-white p-4 rounded-lg shadow-lg" v-else>
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-xl font-semibold text-gray-800">Booking Date: {{ booking.booking_date }}</h2>
            <span :class="{
              'bg-green-200 text-green-800': booking.booking_status === 'ACTIVE',
              'bg-red-200 text-red-800': booking.booking_status === 'CANCELED',
              'bg-gray-200 text-gray-800': booking.booking_status === 'COMPLETED'
            }" class="px-2 py-1 rounded-full text-sm font-medium">
              {{ booking.booking_status }}
            </span>
          </div>
          <div v-for="availability in booking.room_availability" :key="availability.start_date" class="mt-4">
            <h3 class="text-lg font-semibold text-gray-700">Room Details</h3>
            <div class="flex flex-col gap-2 mt-2">
              <div class="text-gray-600">
                <span class="font-semibold">Room:</span> {{ availability.room.name }}
              </div>
              <div class="text-gray-600">
                <span class="font-semibold">Description:</span> {{ availability.room.description }}
              </div>
              <div class="text-gray-600">
                <span class="font-semibold">Price per Day:</span> ${{ availability.room.price_by_day }}
              </div>
              <div class="text-gray-600">
                <span class="font-semibold">Beds:</span> {{ availability.room.single_beds }} Single, {{
                  availability.room.couple_beds }} Double
              </div>
              <div class="text-gray-600">
                <span class="font-semibold">Category:</span> {{ availability.room.category }}
              </div>
            </div>

            <div class="mt-4">
              <h3 class="text-lg font-semibold text-gray-700">Stay Period</h3>
              <div class="text-gray-600">
                <span class="font-semibold">From:</span> {{ availability.start_date }}
              </div>
              <div class="text-gray-600">
                <span class="font-semibold">To:</span> {{ availability.end_date }}
              </div>
              <div class="text-gray-600">
                <span class="font-semibold">Status:</span> {{ availability.room_status }}
              </div>
              <div v-if="availability.reason" class="text-gray-600">
                <span class="font-semibold">Reason:</span> {{ availability.reason }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="step === 4" key="step4" class="w-full flex flex-col gap-4 bg-gray-200 p-4">
        <div>
          <h1 class="text-2xl/9">Change password</h1>
        </div>
        <div class="flex flex-col gap-1">
          <form class="unstyle-me" action="#" method="POST" @submit.prevent="changePassword(newPassword)">
          <div class="flex flex-col w-1/3">
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-bold text-rich-black">New password</label>
            </div>
            <div>
              <input id="newPassowrd" name="newPassowrd" type="password" v-model="newPassword" required=""
                class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none overflow-hidden" />
            </div>
          </div>
          <div class="flex flex-col w-1/3">
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-bold text-rich-black">Confirm new password</label>
            </div>
            <div>
              <input id="newPassowrd" name="newPassowrd" type="password" v-model="verifyPassword" required=""
                class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none overflow-hidden" />
            </div>
          </div>
          <div class="flex flex-col w-1/3">
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-bold text-rich-black">Current password</label>
              <div class="text-sm">
                <RouterLink
                  to="/forgot-password"
                  class="font-semibold text-primary-color hover:text-secondary-color"
                  >Forgot password?</RouterLink
                >
              </div>
            </div>
            <div>
              <input id="newPassowrd" name="newPassowrd" type="password" v-model="currentPassword" required=""
                class="block w-full rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none overflow-hidden" />
            </div>
          </div>
          <div class="mt-2">
            <button
                class="flex justify-center rounded-md bg-primary-color px-5 py-3 text-xl/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"

                >Set new password</button>
          </div>
        </form>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'

import CountrySelectorComponent from '@/components/CountrySelectorComponent.vue';
import CitySelectorComponent from '@/components/CitySelectorComponent.vue';
import StateSelectorComponent from '@/components/StateSelectorComponent.vue';
import NationalitySelectorComponent from '@/components/NationalitySelectorComponent.vue';

const userStore = useUserStore();
const router = useRouter();

const step = ref(1)

const userCredentials = ref({ email: '', name: '', telephone: '', });
const userPersonalInfo = ref({ birthDate: '', nationality: '', address: '', city: '', state: '', country: '', postalCode: '', createdAt: '' });
const currentPassword = ref('')
const newPassword = ref('')
const verifyPassword = ref('')
const bookings = ref()

const editing = ref(false)

const chooseStep = (s) => {
  step.value = s;
};

const changeCredentials = async () => {
  const { email, name, telephone } = userStore.userData;
  const isUnchanged =
    userCredentials.value.email === email &&
    userCredentials.value.name === name &&
    userCredentials.value.telephone === telephone;

  if (isUnchanged) {
    editing.value = false;
    Swal.fire({
      title: 'No changes',
      text: 'No changes were made.',
      icon: 'warning',
    });
    return;
  }
  const verification = await userStore.verifyPassword(currentPassword.value);
  if (!verification.verified) {
    Swal.fire({
      title: 'Incorrect Password',
      text: 'The password you entered is incorrect.',
      icon: 'error',
    });
    return;
  }
  const response = await userStore.updateMe({ ...userStore.userData, ...userCredentials.value });
  if (response.status === 200) {
    Swal.fire({
      title: 'Success',
      text: 'Your credentials have been updated.',
      icon: 'success',
      confirmButtonText: 'Ok',
    }).then(() => {
      router.push('/refresh')
    });
  }
};

const changePersonalInfo = async () => {
  const { birthDate, nationality, country, state, city, postalCode, streetAddress } = userStore.userData.personal_info;
  const isUnchanged =
    userPersonalInfo.value.birthDate === birthDate &&
    userPersonalInfo.value.nationality === nationality &&
    userPersonalInfo.value.country === country &&
    userPersonalInfo.value.state === state &&
    userPersonalInfo.value.city === city &&
    userPersonalInfo.value.postalCode === postalCode &&
    userPersonalInfo.value.streetAddress === streetAddress;

  if (isUnchanged) {
    editing.value = false;
    Swal.fire({
      title: 'No changes',
      text: 'No changes were made.',
      icon: 'warning',
    });
    return;
  }
  const verification = await userStore.verifyPassword(currentPassword.value);

  if (!verification.verified) {
    Swal.fire({
      title: 'Incorrect Password',
      text: 'The password you entered is incorrect.',
      icon: 'error',
    });
    return;
  }
  const userInstance = {
    id: userStore.userData.id,
    email: userStore.userData.email,
    password: currentPassword.value,
    personal_info: {
      birthDate: userPersonalInfo.value.birthDate,
      city: userPersonalInfo.value.city,
      nationality: userPersonalInfo.value.nationality,
      country: userPersonalInfo.value.country,
      state: userPersonalInfo.value.state,
      postalCode: userPersonalInfo.value.postalCode,
      streetAddress: userPersonalInfo.value.address,
    },
  };
  const response = await userStore.updateMe(userInstance);

  if (response.status === 200) {
    Swal.fire({
      title: 'Success',
      text: 'Your personal information has been updated.',
      icon: 'success',
      confirmButtonText: 'Ok',
    }).then(() => {
      router.push('/refresh')
    });;
  }
};

const changePassword = async(newPassword) => {
  if (newPassword !== verifyPassword.value) {
    Swal.fire({
      title: 'Passwords do not match',
      text: 'The passwords you entered do not match.',
      icon: 'error',
    });
    return;
  }
  const verification = await userStore.verifyPassword(currentPassword.value);
  if (!verification.verified) {
    Swal.fire({
      title: 'Incorrect Password',
      text: 'The password you entered is incorrect.',
      icon: 'error',
    });
    return;
  }
  const response = await userStore.changePassword(newPassword);
  if (response.status === 200) {
    Swal.fire({
      title: 'Success',
      text: 'Your password has been updated.',
      icon: 'success',
      confirmButtonText: 'Ok',
    }).then(() => {
      router.push('/refresh')
    });
  }
}

onMounted(async () => {
  await userStore.fetchMe()
  userCredentials.value = {
    email: userStore.userData.email,
    name: userStore.userData.name,
    telephone: userStore.userData.telephone,
  }
  userPersonalInfo.value = {
    birthDate: userStore.userData.personal_info.birthDate,
    nationality: userStore.userData.personal_info.nationality,
    address: userStore.userData.personal_info.streetAddress,
    city: userStore.userData.personal_info.city,
    state: userStore.userData.personal_info.state,
    country: userStore.userData.personal_info.country,
    postalCode: userStore.userData.personal_info.postalCode,
  }
  bookings.value = await userStore.fetchMyBookings()
})
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
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

.unstyle-me {
  all: unset;
  display: contents;
}
</style>
