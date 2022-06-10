<template>
  <div class="max-w-7xl mx-auto p-6 lg:px-8">
    <h1 class="mb-8 text-xl font-bold lg:text-4xl">Glossary</h1>

    <table class="min-w-full divide-y divide-gray-300">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Term</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Definition</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <ContentList path="/glossary" v-slot="{ list }">
          <tr v-for="doc in list" :key="doc._path">
            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
              <NuxtLink class="font-bold hover:underline" :to="doc._path">
                {{ doc.title }}
              </NuxtLink>
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <ContentRenderer :value="doc" />  
            </td>
          </tr>
      </ContentList>
      </tbody>
    </table>
  </div>
</template>
