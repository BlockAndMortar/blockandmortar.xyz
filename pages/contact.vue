<template>
  <div class="max-w-7xl mx-auto px-6 py-8 lg:px-8">
    <h1 class="mb-8 text-xl font-bold lg:text-4xl">Contact</h1>
    <p>Please drop us a line if you have a question, or if you'd like to work with us.</p>

    <form action="https://formspree.io/f/mlezvkjd" method="post" class="max-w-xl my-8 grid grid-cols-1 gap-y-6 sm:gap-x-8">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <div class="mt-1">
          <input type="text" name="Name" id="name" autocomplete="name" class="py-3 px-4 block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 border rounded-md" required />
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <div class="mt-1">
          <input type="email" name="Email" id="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 border rounded-md" required />
        </div>
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <div class="mt-1">
          <textarea type="text" name="Message" id="message" rows="5" class="py-3 px-4 block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 border rounded-md" required></textarea>
        </div>
      </div>

      <div>
        <button type="submit" class="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
  useHead({
    title: 'Contact'
  })
</script>
