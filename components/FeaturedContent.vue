<template>
  <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
    <div class="relative">
      <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Our services</p>
        <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
          Need more information on using NFTs in your business? Working through your metaverse strategy? We're here to help.
        </p>
      </div>
      <div class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
        <div v-for="post in content" :key="post.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-0.5 text-xs text-gray-400 font-medium uppercase" v-if="post.comingSoon">
                  Coming Soon
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.preview }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import newsletterImg from '~/assets/images/services/newsletter.svg'
  import workshopsImg from '~/assets/images/services/workshops.svg'
  import consultingImg from '~/assets/images/services/consulting.svg'

  const content = [
    {
      id: 1,
      title: 'Weekly Newsletter',
      imageUrl: newsletterImg,
      preview: 'Do you want to keep up with web3, without all the noise? Subscribe to our newsletter! Every week, we’ll send our analysis of what’s happening.',
    },
    {
      id: 2,
      title: 'Workshops',
      comingSoon: true,
      imageUrl: workshopsImg,
      preview: 'Bring your executive team up to speed on core concepts, and uncover web3 use cases for your business.  Our private workshops are available worldwide.',
    },
    {
      id: 3,
      title: 'Consulting',
      comingSoon: true,
      imageUrl: consultingImg,
      preview: 'For companies that need in-depth guidance on putting web3 to use. Block & Mortar will work alongside you to identify key business goals, map out implementation details, and avoid common pitfalls.',
    },
  ]
</script>
