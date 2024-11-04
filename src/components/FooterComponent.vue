<template>
  <footer class="bg-rich-white shadow-top">
    <div class="mx-auto w-full max-w-screen-xl py-6 lg:py-8 px-5 lg:px-0">
      <div class="md:flex sm:justify-center md:justify-between">
        <div class="mb-6 md:mb-0">
          <RouterLink to="/" class="flex items-center">
            <img
              src="https://placehold.co/600x400?text=Logo"
              class="w-1/4 me-3"
              alt="Logo"
            />
          </RouterLink>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-rich-black uppercase">
              Follow us
            </h2>
            <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                <a
                  href="https://www.instagram.com/bellavistacasadeeventos/"
                  class="hover:underline"
                  >Instagram</a
                >
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bellavistacasadeeventos/"
                  class="hover:underline"
                  >TripAdvisor</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-rich-black uppercase">
              Legal
            </h2>
            <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                <RouterLink to="/" class="hover:underline"
                  >Privacy Policy</RouterLink
                >
              </li>
              <li>
                <RouterLink to="#" class="hover:underline"
                  >Terms &amp; Conditions</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center">
          Made by <span class="font-bold">Enzo Lazzarin Dal'osto</span>.
          Educational Project.
        </span>
        <div class="flex sm:justify-center sm:mt-0">
          <a
            href="https://www.linkedin.com/in/enzo-dalosto/"
            class="text-gray-500 hover:text-rich-black"
          >
            <i class="fa-brands fa-linkedin"></i>
            <span class="sr-only">Linkedin Account</span>
          </a>
          <a
            href="https://www.instagram.com/lazzarin.dalosto/"
            class="text-gray-500 hover:text-rich-black ms-5"
          >
            <i class="fa-brands fa-instagram"></i>
            <span class="sr-only">Instagram Account</span>
          </a>
          <a
            href="https://github.com/Wecreds"
            class="text-gray-500 hover:text-rich-black ms-5"
          >
            <i class="fa-brands fa-github"></i>
            <span class="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
