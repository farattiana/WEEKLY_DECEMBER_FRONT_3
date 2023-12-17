<script setup>
defineProps({
  data: Object,
  required:true
})
</script>

<template>
  <div class="flex flex-col justify-center items-center text-center gap-7">
    <img :src="data.image" alt="" class="w-16 h-16 object-cover">
    <h1 class="text-2xl font-bold">{{ data.title }}</h1>
    <p class="max-w-xs">Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.</p>
  </div>
</template>