<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <h1 class="font-bold">{{ doc.title }}</h1>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>
