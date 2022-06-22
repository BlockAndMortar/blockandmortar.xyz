<template>
  <div class="max-w-7xl mx-auto px-6 py-8 lg:px-8">
    <h1 class="mb-4 text-xl font-bold lg:text-4xl">{{ title }}</h1>

    <ul class="divide-y">
      <li class="py-4" v-for="doc in data" :key="doc.__path">
        <div class="text-gray-500 text-sm">
          {{ $dayjs(doc.published_at).utc().format('MMMM D, YYYY') }}
        </div>
        <NuxtLink class="text-2xl font-bold hover:underline" :to="doc._path">
          {{ doc.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const title = 'Newsletter'
  const { data } = await useAsyncData('newsletter', () => {
    return queryContent('/newsletter')
        .where({ _partial: false })
        .sort({ published_at: -1 })
        .find()
  })

  useHead({ title })
</script>