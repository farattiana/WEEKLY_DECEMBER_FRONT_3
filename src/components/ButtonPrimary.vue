<script setup>
defineProps({
  padding: String,
  shadow: String,
})
</script>

<template>
  <button :class="`bg-black font-bold text-white hover:shadow-none duration-300 blur-none text-sm w-max rounded-lg ${shadow} ${padding}`">
    <slot></slot>
  </button>
</template>