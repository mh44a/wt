<script setup lang="ts">
import 'animate.css'

useHead({
  title: 'MISRAPOWER',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})
</script>

<template>
  <NuxtLayout />
  <div class="grid-pattern absolute -z-10 -top-5 w-full h-full"></div>

  <div class="container mx-auto p-4">
    <NuxtPage />
  </div>

  <footer class="bg-zinc-900">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/"
          class="hover:underline">misrapower.com</a>. Tüm hakları saklıdır.
      </span>

      <ul class="flex flex-wrap gap-2 items-center justify-center text-base font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Icon name="mdi:instagram" />
        </li>
        <li>
          <Icon name="mdi:instagram" />
        </li>
      </ul>
    </div>
  </footer>
</template>
