<template>
  <div class="flex flex-1">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
  import shareImage from '~/assets/images/share.png'

  const title = 'Block & Mortar'
  const description = 'We bring you the top stories on where business meets web3: blockchain, cryptocurrencies, NFTs, and metaverse.'
  const url = 'https://www.blockandmortar.xyz'

  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${title}` : title;
    },
    meta: [
      // Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: `${url}${shareImage}` },
      { property: 'og:image:width', content: '1600' },
      { property: 'og:image:height', content: '900' },
      { property: 'og:url', content: url },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@BlockAndMortar_' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${url}${shareImage}` },
    ]
  })
</script>
