<script setup>
import ButtonPrimary from '../components/ButtonPrimary.vue';
</script>

<template>
  <div class="bg-[url('/background.svg')] bg-champagne text-center h-screen bg-contain no-repeat flex flex-col p-100 gap-9 justify-center items-center">
    <div class="text-6xl sm:text-8xl font-bold">
      <h1 class="text-black">Your Daily</h1>
      <h1 class="text-red">Podcast</h1>
    </div>
    <div>
      <p class="max-w-xs font-montserrat leading-7">We cover all kinds of categories and a weekly special guest.</p>
    </div>
    <ButtonPrimary padding="24px 48px">SUBSCRIBE</ButtonPrimary>
  </div>
</template>