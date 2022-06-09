<template>
  <header class="bg-gray-900">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-teal-500 lg:border-none">
        <div class="flex flex-1 items-center justify-center">
          <a href="/">
            <span class="sr-only">Block & Mortar</span>
            <img class="h-10 w-auto" src="@/assets/images/logo.svg" alt="Block & Mortar logo" />
          </a>
          <div class="flex-1 text-right hidden ml-10 space-x-8 lg:block">
            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-teal-300">
              {{ link.name }}
            </a>
          </div>
        </div>
        <div class="hidden ml-10 space-x-4 lg:block">
          <a 
            href="#"
            class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-white bg-gray-600 hover:bg-gray-700"
          >
            Subscribe to our newsletter
          </a>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-teal-300">
          {{ link.name }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
  const navigation = [
    { name: 'Archives', href: '/newsletter' },
    { name: 'Glossary', href: '/glossary' },
    { name: 'Contact Us', href: '#contact' },
  ]
</script>