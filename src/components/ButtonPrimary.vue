<script setup>
defineProps({
  padding: String,
})
</script>

<template>
  <button :style="{ padding }" class="bg-black font-bold text-white shadow-xl blur-none shadow-gray text-sm w-max rounded-lg ">
    <slot></slot>
  </button>
</template>