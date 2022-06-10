<template>
  <div class="max-w-7xl mx-auto p-6 lg:px-8">
    <h1 class="mb-8 text-xl font-bold lg:text-4xl">Glossary</h1>
    
    <ContentDoc v-slot="{ doc }">
      <h1 class="font-bold">{{ doc.title }}</h1>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>
