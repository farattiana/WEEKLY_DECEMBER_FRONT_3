<script setup>
defineProps({
  image:String
})
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <img :src="image" alt="" class="sm:w-64 sm:h-64  w-32 h-32 object-cover">
    <p class="max-w-md text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</p>
  </div>
</template>