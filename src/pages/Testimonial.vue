<script setup>
import TestimonialCard from '../components/TestimonialCard.vue';
const User = [
  {fullname: 'Luna lovegood', picture: '/luna.png', platform: 'spotify'},
  {fullname: 'Emily Blunt', picture: '/emily.png', platform: 'google'},
  {fullname: 'Mia', picture: '/mia.png', platform: 'apple'},
]
</script>

<template>
  <div class="relative">
    <div class="flex justify-center items-center">
      <img src="/scribble.svg" alt="" class="absolute">
    </div>
    <div class="bg-white flex flex-col justify-center items-center p-20 sm:pt-20 overflow-hidden">
      <div class="sm:pt-20 flex flex-row relative">
        <img src="/sparkle.svg" alt="" class="absolute top-[-50px] left-[-50px] sm:top-0 sm:left-[-100px]">
        <div class="flex flex-col text-center gap-2">
          <h1 class="text-4xl text-center font-bold sm:text-6xl">What our listeners say</h1>
          <p class="text-gray">Their experience throughout every platform</p>
        </div>
      </div>
      <div class="flex flex-col items-left justify-start overflow-x-auto gap-5 md:flex-row m-40">
        <TestimonialCard v-for="user in User" :user="{fullName: user.fullname,picture: user.picture, platform:user.platform}"/>
      </div>
    </div>
  </div>
</template>