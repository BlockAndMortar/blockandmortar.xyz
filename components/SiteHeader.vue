<template>
  <header id="newsletter" class="bg-gray-900">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-cyan-500 lg:border-none">
        <div class="flex flex-1 items-center justify-center">
          <a href="/">
            <span class="sr-only">Block & Mortar</span>
            <img class="h-10 w-auto" src="@/assets/images/logo.svg" alt="Block & Mortar logo" />
          </a>
          <div class="flex-1 text-right hidden ml-10 space-x-8 lg:block">
            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-cyan-300">
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-cyan-300">
          {{ link.name }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
  const navigation = [
    { name: 'Contact Us', href: '/contact' },
  ]
</script>