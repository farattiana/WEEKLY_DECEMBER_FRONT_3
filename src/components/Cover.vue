<script setup>
const images = [
  '/cover1.png',
  '/cover1.png',
  '/cover2.png',
  '/cover3.png',
  '/cover4.png',
  '/cover5.png',
  '/cover6.png'
]
</script>

<template>
  <div class="bg-champagne overflow-hidden">
    <div class="bg-champagne flex flex-center justify-center overflow-x-auto scrollbar-hide gap-5">
      <img v-for="image in images" :src="image" alt="" class="w-72 h-72 object-cover">
    </div>
  </div>
</template>