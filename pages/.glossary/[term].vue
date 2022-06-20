<template>
  <div class="max-w-7xl mx-auto px-6 py-8 lg:px-8">
    <h1 class="mb-8 text-xl font-bold lg:text-4xl">Glossary</h1>
    
    <ContentDoc v-slot="{ doc }">
      <h1 class="text-2xl mb-2 font-bold">{{ doc.title }}</h1>
      <div class="lg:text-xl">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </div>
</template>
