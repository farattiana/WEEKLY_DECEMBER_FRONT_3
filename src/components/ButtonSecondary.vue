<script setup>
defineProps({
  padding: String,
})
</script>

<template>
  <button :class="`bg-transparent border-2 font-bold rounded-lg border-black w-max text-sm ${padding}`">
    <slot></slot>
  </button>
</template>