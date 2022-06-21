<template>
  <article class="max-w-7xl mx-auto px-6 py-8 lg:px-8">
    <div class="text-xm">
      <NuxtLink class="back" to="/newsletter">
        ← Back to newsletters
      </NuxtLink>
    </div>

    <div class="mt-6 mb-2">
      <div class="text-gray-500 text">{{ $dayjs(published_at).format('MMMM D, YYYY') }}</div>
      <h1 class="text-2xl font-bold lg:text-4xl">{{ title }}</h1>
    </div>

    <p class="pt-4 italic">
      Welcome to the Block & Mortar newsletter! 
      Every week, we bring you the top stories on where business meets web3: blockchain, cryptocurrencies, NFTs, and metaverse.
      Brought to you by
      <a href="https://www.robbin.co/" target="_blank">Scott Robbin</a>
      and
      <a href="https://qethanm.cc/" target="_blank">Q McCallum</a>.
    </p>

    <section :id="slugFor(section)" class="pt-4 first:pt-2" v-for="section in sections" :key="section._path">
      <h2 class="mb-4 text-xl font-bold lg:text-2xl">
        <a :href="'#' + slugFor(section)">{{ section.title }}</a>
      </h2>

      <MarkdownRenderer :value="section" />
    </section>

    <p class="mt-12 pt-4 italic border-t">
      Reading this online? 
      <a href="/#newsletter-signup">Subscribers</a> get this in their inbox on Tuesdays. 
    </p>
  </article>
</template>

<script setup>
  const { path } = useRoute()
  const { data: page } = await useAsyncData(`newsletter-${path}`, () => queryContent().where({ _path: path }).findOne())
  const { data: sections } = await useAsyncData(`newsletter-${path}-sections`, () => queryContent(path).where({ _partial: true }).find())
  const { title, published_at } = page._value

  function slugFor(section) {
    const fileName = section._path.split('/').pop()
    return fileName.split('.').pop();
  }

  useHead({ title })
</script>

<style>
  article a,
  .back {
    @apply text-teal-500 hover:underline;
  }

  article p {
    @apply my-4;
  }

  article blockquote {
    @apply py-2 px-4 italic border-l-4 bg-gray-100 text-gray-700 border-gray-500;
  }

  article ol,
  article ul {
    @apply ml-8;
  }

  article ol {
    @apply list-decimal;
  }

  article ul {
    @apply list-disc;
  }

  article li {
    @apply mb-2;
  }
</style>