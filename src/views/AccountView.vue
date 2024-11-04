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
              <input id="email" name="email" type="email" required="" :readonly="!editing" v-model="userCredentials.email"
                class="block w-1/2 rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none" >
            </div>
            <div>
              <label for="name" class="block text-xl/6 font-medium text-rich-black">Name</label>
              <input id="name" name="name" type="text" required="" :readonly="!editing" v-model="userCredentials.name"
                class="block w-1/2 rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none" />
            </div>
            <div>
              <label for="telephone" class="block text-xl/6 font-medium text-rich-black">Telephone</label>
              <input id="telephone" name="telephone" type="number" required="" :readonly="!editing" v-model="userCredentials.telephone"
                class="block w-1/2 rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none" />
            </div>
            <div class="flex flex-row gap-4">

              <button
              class="flex justify-center rounded-md bg-primary-color px-5 py-3 text-2xl/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color" @click="editing = true" v-if="!editing">Edit</button>
              <button  class="flex justify-center rounded-md bg-primary-color px-5 py-3 text-xl/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color" @click="editing = false" v-else>Stop Editing</button>
              <input id="telephone" name="telephone" type="text" required="" v-model="currentPassword" v-if="!editing" placeholder="Password..."
              class="block w-1/3 rounded-md border-0 py-1.5 px-2 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6 outline-none" />
              <button type="submit"
              class="flex justify-center rounded-md bg-primary-color px-5 py-3 text-2xl/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color" v-if="!editing">Save</button>
            </div>
          </form>
        </div>
      </div>
      <div v-else-if="step === 2" key="step2" class="w-4/6 bg-pink-700">
        <div>
          <h1 class="text-2xl/9">Personal Information</h1>
        </div>
      </div>
      <div v-else-if="step === 3" key="step3" class="w-4/6 bg-pink-700">
        <div>
          <h1 class="text-2xl/9">My bookings</h1>
        </div>
      </div>
      <div v-else-if="step === 4" key="step4" class="w-4/6 bg-pink-700">
        <div>
          <h1 class="text-2xl/9">Change password</h1>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
import Swal from 'sweetalert2'

const userStore = useUserStore();

const step = ref(1)

const userCredentials = ref({email: '', name: '', telephone: '', });
const currentPassword = ref('')

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
  try {
    const verification = await userStore.verifyPassword(currentPassword.value);
    if (!verification.verified) {
      Swal.fire({
        title: 'Incorrect Password',
        text: 'The password you entered is incorrect.',
        icon: 'error',
      });
      return;
    }
    console.log('updateMe');
    await userStore.updateMe({ ...userStore.userData, ...userCredentials.value });
    editing.value = false;
  } catch (error) {
    Swal.fire({
      title: 'Verification Failed',
      text: error,
      icon: 'error',
    });
  }
};

onMounted(async() => {
  await userStore.fetchMe()
  userCredentials.value = {
    email: userStore.userData.email,
    name: userStore.userData.name,
    telephone: userStore.userData.telephone,
  }
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
</style>
