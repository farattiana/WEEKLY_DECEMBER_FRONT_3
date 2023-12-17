<script setup>
import IllustrationAbout from '../components/IllustrationAbout.vue';
const imagesAbout = [
  'about1.svg',
  'about2.svg'
]

</script>

<template>
  <div class="flex flex-row justify-center p-4 gap-4  flex-wrap sm:px-36">
    <IllustrationAbout v-for="image in imagesAbout" :image="image"/>
  </div>
</template>