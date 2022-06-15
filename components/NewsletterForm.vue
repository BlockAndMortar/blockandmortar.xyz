<template>
  <div class="pt-4 pb-14 bg-gray-900 lg:pt-8 lg:overflow-hidden">
    <div class="mx-auto max-w-7xl px-4 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div class="lg:py-24">
            <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span class="block">Subscribe to our</span>
              <span class="pb-3 block text-cyan-200 sm:pb-5">Weekly Newsletter</span>
            </h1>
            <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
              We bring you the top stories on where business meets web3: blockchain, cryptocurrencies, NFTs, and metaverse. 
            </p>
            <div class="mt-10 sm:mt-12">
              <form
                action="https://buttondown.email/api/emails/embed-subscribe/blockandmortar"
                method="post"
                target="popupwindow"
                onsubmit="window.open('https://newsletter.blockandmortar.xyz', 'popupwindow')"
                class="sm:max-w-xl sm:mx-auto lg:mx-0"
              >
                <div class="sm:flex">
                  <div class="min-w-0 flex-1">
                    <label for="email" class="sr-only">Email address</label>
                    <input id="email" type="email" placeholder="Enter your email" class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900" />
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <button type="submit" class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="hidden mt-12 -mb-16 sm:-mb-48 lg:block lg:m-0 lg:relative">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="~/assets/images/newsletter.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>