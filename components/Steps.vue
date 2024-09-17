<template>
   <nav class="my-6" aria-label="Progress">
      <ol role="list" class="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
        <li 
          v-for="(step, stepIdx) in props.steps"
          :key="step.name"
          class="relative md:flex-1 md:flex"
          @click.prevent="step.onClick"
        >
          <a v-if="stepIdx < props.currentStep" class="group flex items-center w-full cursor-pointer">
            <span class="px-6 py-4 flex items-center text-sm font-medium">
              <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full group-hover:bg-cyan-800">
                <CheckIcon class="w-6 h-6 text-white" aria-hidden="true" />
              </span>
              <span class="ml-4 text-sm font-medium text-gray-900">{{ step.name }}</span>
            </span>
          </a>
          <a v-else-if="stepIdx === currentStep" class="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-cyan-600 rounded-full">
              <span class="text-cyan-600">{{ step.id }}</span>
            </span>
            <span class="ml-4 text-sm font-medium text-cyan-600">{{ step.name }}</span>
          </a>
          <a v-else :href="step.href" class="group flex items-center">
            <span class="px-6 py-4 flex items-center text-sm font-medium">
              <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                <span class="text-gray-500">{{ step.id }}</span>
              </span>
              <span class="ml-4 text-sm font-medium text-gray-500">{{ step.name }}</span>
            </span>
          </a>
          <template v-if="stepIdx !== props.steps.length - 1">
            <!-- Arrow separator for lg screens and up -->
            <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
              <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
              </svg>
            </div>
          </template>
        </li>
      </ol>

    </nav>
</template>

<script setup>
  import { CheckIcon } from '@heroicons/vue/solid';

  const props = defineProps({
    currentStep: Number,
    steps: [Object],
  })
</script>