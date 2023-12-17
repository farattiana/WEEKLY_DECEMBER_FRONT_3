<script setup>
import IllustrationAbout from '../components/IllustrationAbout.vue';
const imagesAbout = [
  'about1.svg',
  'about2.svg'
]

</script>

<template>
  <div class="relative">
    <div class="flex justify-center items-center">
      <img src="/scribbleAbout.svg" alt="" class="absolute">
    </div>
    <div class="flex flex-col justify-center items-center gap-10 pt-40">
      <h1 class="text-4xl sm:text-6xl text-center max-w-4xl font-bold">Talk. Listen. Get inspired by every minute of it.</h1>
      <div class="flex flex-row md:flex-nowrap justify-center p-4 gap-4  flex-wrap sm:px-36">
        <IllustrationAbout v-for="image in imagesAbout" :image="image"/>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center bg-champagne md:m-44 p-11 gap-10">
      <span class="text-8xl text-center font-bold text-red">“</span>
      <p class="font-bold text-3xl sm:text-4xl text-center max-w-3xl">One of the best daily podcasts that covers every topic on Spotify.</p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-3">
        <div class="flex flex-row items-center font-bold gap-3">
          <img src="/avatar.png" alt="" class="rounded-[50%]">
          <p>John Smith,</p>
        </div>
        <div class="flex flex-row items-center gap-3">
          <img src="/spot.png" alt="">
          <p>Social Community Manager</p>
        </div>
      </div>
    </div>
  </div>
</template>