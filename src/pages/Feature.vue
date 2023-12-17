<script setup>
import ButtonPrimary from '../components/ButtonPrimary.vue';
import CardFeature from '../components/Card.feature.vue';
const TableData = [
  {image: '/feature1.svg', title: 'Topic by Request'},
  {image: '/feature2.svg', title: 'Exclusive Content'},
  {image: '/feature3.svg', title: 'Join the Community'},
  {image: '/feature4.svg', title: 'Livestreaming Access'},
  {image: '/feature5.svg', title: 'Exclusive Episodes & Merch'},
  {image: '/feature6.svg', title: 'And much more!'},
]
</script>

<template>
  <div class="relative flex flex-col gap-20">
    <div class="flex justify-center items-center">
      <img src="/scribble.svg" alt="" class="absolute">
    </div>
    <div class="flex flex-col h-4 justify-center items-center p-20 sm:pt-40">
      <div class="sm:pt-20 flex flex-row relative">
        <div class="flex flex-col text-center gap-2">
          <h1 class="text-4xl text-center font-bold sm:text-6xl">Membership benefits</h1>
          <p class="text-gray">Become our sponsor and get all benefits</p>
        </div>
        <img src="/scribbleFeature.svg" alt="" class="hidden sm:flex absolute top-[-50px] right-[-50px]">
      </div>
    </div>
    <div class="flex flex-row gap-10 flex-wrap justify-center items-center">
      <CardFeature v-for="(data) in TableData" :data="data"/>
    </div>
    <div class="flex justify-center items-center m-20">
      <ButtonPrimary padding="20px 36px">SEE PRICING</ButtonPrimary>
    </div>
  </div>
</template>