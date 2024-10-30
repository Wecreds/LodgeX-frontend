<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="absolute top-5 right-5 p-0 cursor-pointer" v-if="!isLoginRoute">
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
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-rich-black">Sign up</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-rich-black">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-rich-black">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-rich-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-color sm:text-sm/6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-primary-color px-3 py-1.5 text-sm/6 font-semibold text-rich-white shadow-sm hover:bg-secondary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color">Sign in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Already have an account?
        {{ ' ' }}
        <a href="login" class="font-semibold text-primary-color hover:text-secondary-color">Sign in</a>
      </p>
    </div>
  </div>
</template>
<script setup>
</script>
