<script setup>
defineProps({
  padding: String,
})
</script>

<template>
  <button :style="{ padding }" class="bg-black font-bold text-white shadow-md hover:shadow-none duration-300 blur-none text-sm w-max rounded-lg ">
    <slot></slot>
  </button>
</template>