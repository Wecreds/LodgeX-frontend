<template>
  <div
    class="fixed bg-black w-full min-h-screen opacity-50 z-40"
    v-if="loginComponentOpen"
  ></div>
  <header class="bg-rich-white shadow-2xl w-full">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Lodge Name</span>
          <img
            class="h-16 w-auto"
            :src="lodgeStore.logo?.photo.url"
            alt="Logo"
          />
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton
            class="flex items-center gap-x-1 text-sm/6 font-semibold text-rich-black"
          >
            Lorem Ipsum
            <ChevronDownIcon
              class="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div class="p-4">
                <div
                  v-for="item in products"
                  :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                >
                  <div
                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 text-gray-600 group-hover:text-primary-color"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="flex-auto">
                    <a
                      :href="item.href"
                      class="block font-semibold text-rich-black"
                    >
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <RouterLink to="/" class="text-sm/6 font-semibold text-rich-black"
          >Lorem Ipsum</RouterLink
        >
        <RouterLink to="/feedbacks" class="text-sm/6 font-semibold text-rich-black"
          >Feedbacks</RouterLink
        >
        <RouterLink :to="{name: 'account', params: {
                  step: 3
                }}" class="text-sm/6 font-semibold text-rich-black">My Bookings</RouterLink
        >
      </PopoverGroup>
      <div
        class="hidden lg:flex lg:flex-1 lg:justify-end cursor-pointer"
        v-if="!authStore.loggedIn"
      >
        <span
          class="text-sm/6 font-semibold text-rich-black"
          @click="loginComponentOpen = !loginComponentOpen"
          >Log in</span
        >
      </div>
      <div
        class="hidden lg:flex lg:flex-1 lg:justify-end text-rich-black"
        v-else
      >
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex justify-center rounded-md text-sm/6 font-semibold focus:outline-none"
            >
              My Account
              <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute right-0 mt-2 w-56 origin-top-right divide-y focus:outline-none bg-rich-white rounded-sm shadow-2xl"
            >
              <div class="px-1 py-1">
                <RouterLink :to="{name: 'account', params: {
                  step: 1
                }}">
                  <MenuItem class="hover:underline">
                    <button
                      class="text-rich-black flex w-full items-center rounded-md px-2 py-2 text-sm"
                    >
                      Account settings
                    </button>
                  </MenuItem>
                </RouterLink>
              </div>
              <div class="px-1 py-1">
                <MenuItem class="hover:underline" @click="logOut()">
                  <button
                    class="text-rich-black flex w-full items-center rounded-md px-2 py-2 text-sm"
                  >
                    Logout
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </nav>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-fit overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">LodgeX</span>
            <img class="h-8 w-auto" :src="lodgeStore.logo?.photo.url" alt="" />
          </RouterLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6 mr-2" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-rich-black hover:bg-gray-50"
                >
                  Lorem Ipsum
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...products]"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-rich-black hover:bg-gray-50"
                    >{{ item.name }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>
              <RouterLink
                to="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-rich-black hover:bg-gray-50"
              >
                Lorem Ipsum</RouterLink
              >
              <RouterLink
                to="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-rich-black hover:bg-gray-50"
              >
                Lorem Ipsum</RouterLink
              >
              <RouterLink
                to="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-rich-black hover:bg-gray-50"
              >
                Lorem Ipsaum</RouterLink
              >
            </div>
            <div
              class="py-6 hover:bg-gray-50 cursor-pointer"
              v-if="!authStore.loggedIn"
            >
              <button
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-rich-black"
                @click="
                  (loginComponentOpen = !loginComponentOpen),
                    (mobileMenuOpen = false)
                "
              >
                Log in
              </button>
            </div>
            <div class="text-rich-black" v-else>
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-rich-black hover:bg-gray-50"
                >
                  My account
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel
                  class="mt-2 space-y-2 flex flex-col justify-center"
                >
                  <DisclosureButton
                    class="block rounded-lg py-2 text-sm/7 font-semibold text-rich-black hover:bg-gray-50"
                    ><RouterLink to="/account"
                      >Account settings</RouterLink
                    ></DisclosureButton
                  >
                  <DisclosureButton
                    class="block rounded-lg py-2 text-sm/7 font-semibold text-rich-black hover:bg-gray-50"
                    @click="logOut()"
                    >Log out</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  <div
    class="min-h-screen w-screen flex justify-center items-center z-50 fixed top-0"
    v-if="loginComponentOpen"
  >
    <LoginComponent @closeLoginComponent="closeLoginComponent" />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { RouterLink, useRouter } from 'vue-router'

import LoginComponent from './LoginComponent.vue'

import { useAuthStore } from '@/stores/auth'
import { useLodgeStore } from '@/stores/lodge'

const authStore = useAuthStore()
const lodgeStore = useLodgeStore()

const router = useRouter()

const logOut = () => {
  authStore.unsetToken()
  router.push('/refresh')
}

const products = [
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const mobileMenuOpen = ref(false)
const loginComponentOpen = ref(false)

const closeLoginComponent = () => {
  loginComponentOpen.value = false
}

onMounted(async () => {
  await lodgeStore.fetchImages()
})
</script>
