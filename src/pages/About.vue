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
    <div class="flex flex-col justify-center items-center gap-10 py-40">
      <h1 class="text-4xl sm:text-6xl text-center max-w-3xl font-bold">Talk. Listen. Get inspired by every minute of it.</h1>
      <div class="flex flex-row md:flex-nowrap justify-center p-4 gap-4  flex-wrap sm:px-36">
        <IllustrationAbout v-for="image in imagesAbout" :image="image"/>
      </div>
    </div>
  </div>
</template>