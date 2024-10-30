<template>
  <div class="fixed bg-black opacity-50 min-h-screen w-screen z-40" v-if="loginComponentOpen"></div>
  <header class="bg-rich-white shadow-2xl">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Bella Vista</span>
          <img class="h-8 w-auto" src="https://placehold.co/600x400?text=Logo" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-sm/6 font-semibold text-rich-black">
            Lorem Ipsum
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-primary-color" aria-hidden="true" />
                  </div>
                  <div class="flex-auto">
                    <a :href="item.href" class="block font-semibold text-rich-black">
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

        <a href="#" class="text-sm/6 font-semibold text-rich-black">Lorem Ipsum</a>
        <a href="#" class="text-sm/6 font-semibold text-rich-black">Lorem Ipsum</a>
        <a href="#" class="text-sm/6 font-semibold text-rich-black">Lorem Ipsum</a>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm/6 font-semibold text-rich-black" @click="loginComponentOpen = !loginComponentOpen">Log in</a>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Bella Vista</span>
            <img class="h-8 w-auto" src="https://placehold.co/600x400?text=Logo" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-rich-black hover:bg-gray-50">
                  Lorem Ipsum
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton v-for="item in [...products]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-rich-black hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-rich-black hover:bg-gray-50">Lorem Ipsum</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-rich-black hover:bg-gray-50">Lorem Ipsum</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-rich-black hover:bg-gray-50">Lorem Ipsum</a>
            </div>
            <div class="py-6">
              <a class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-rich-black hover:bg-gray-50" @click="loginComponentOpen = !loginComponentOpen">Log in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  <div class="min-h-screen w-screen flex justify-center items-center z-50 fixed top-0"  v-if="loginComponentOpen">
    <LoginComponent @closeLoginComponent="closeLoginComponent"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

import LoginComponent from './LoginComponent.vue'

const products = [
  { name: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', href: '#', icon: ChartPieIcon },
  { name: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', href: '#', icon: ArrowPathIcon },
]
const mobileMenuOpen = ref(false)
const loginComponentOpen = ref(false)

const closeLoginComponent = () => {
  loginComponentOpen.value = false
}
</script>
