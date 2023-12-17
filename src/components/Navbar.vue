<script setup>
import { onMounted } from 'vue'
import ButtonPrimary from './ButtonPrimary.vue'
import ButtonSecondary from './ButtonSecondary.vue'

onMounted(() => {
  const burger = document.getElementById('burger-menu')
  const burgerClose = document.getElementById('nav-close')
  const nav = document.getElementById('nav')

  burger.addEventListener('click', () => {
    nav.classList.remove('-right-full')
    nav.classList.add('right-0')
  })
  burgerClose.addEventListener('click', () => {
    nav.classList.remove('right-0')
    nav.classList.add('-right-full')
  })
})
</script>

<template>
  <header class="absolute top-0 left-0 right-0 bg-blue text-black p-4 flex justify-between items-center sm:px-36 ">
    <img src="/logo.svg" alt="" class="w-12 h-12 object-cover sm:h-16 sm:w-16">
    
    <nav class="flex items-center justify-between lg:w-5/6 ml-12">
      <ul class="hidden gap-16 font-bold lg:flex">
        <li><a href="">Episodes</a></li>
        <li><a href="">About</a></li>
        <li><a href="" class="flex items-center gap-1">
          More
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M14.6668 8.00016C14.6668 11.6768 11.6761 14.6668 8.00011 14.6668C4.32411 14.6668 1.33344 11.6768 1.33344 8.00016C1.33344 4.32416 4.32411 1.3335 8.00011 1.3335C11.6761 1.3335 14.6668 4.32416 14.6668 8.00016" stroke="black" stroke-opacity="0.4" stroke-width="1.5"/>
            <path d="M10.8139 7.03865C10.8139 7.16598 10.7653 7.29398 10.6679 7.39131L8.35459 9.71598C8.26059 9.80998 8.13325 9.86265 7.99992 9.86265C7.86725 9.86265 7.73992 9.80998 7.64592 9.71598L5.33125 7.39131C5.13658 7.19598 5.13658 6.87998 5.33258 6.68465C5.52858 6.48998 5.84525 6.49065 6.03992 6.68598L7.99992 8.65465L9.95992 6.68598C10.1546 6.49065 10.4706 6.48998 10.6666 6.68465C10.7653 6.78198 10.8139 6.91065 10.8139 7.03865Z" fill="black"/>
          </svg>
        </a></li>
      </ul>

      <div class="items-center gap-5 hidden xl:flex">
        <ButtonSecondary padding="px-6 py-3">RECENT EPISODES</ButtonSecondary>
        <ButtonPrimary padding="px-6 py-3" shadow="shadow-sm">SUBSCRIBE</ButtonPrimary>
      </div>
    </nav>

    <span id="burger-menu" class="text-3xl xl:hidden">&#9776</span>

    <nav id="nav" class="flex flex-col px-12 py-6 top-0 bottom-0 -right-full duration-500 gap-20 xl:hidden fixed z-10 bg-white h-screen">
      <span id="nav-close" class="text-5xl">&times;</span>
      <ul class="flex flex-col gap-16 font-bold">
        <li><a href="">Episodes</a></li>
        <li><a href="">About</a></li>
        <li><a href="" class="flex items-center gap-1">
          More
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M14.6668 8.00016C14.6668 11.6768 11.6761 14.6668 8.00011 14.6668C4.32411 14.6668 1.33344 11.6768 1.33344 8.00016C1.33344 4.32416 4.32411 1.3335 8.00011 1.3335C11.6761 1.3335 14.6668 4.32416 14.6668 8.00016" stroke="black" stroke-opacity="0.4" stroke-width="1.5"/>
            <path d="M10.8139 7.03865C10.8139 7.16598 10.7653 7.29398 10.6679 7.39131L8.35459 9.71598C8.26059 9.80998 8.13325 9.86265 7.99992 9.86265C7.86725 9.86265 7.73992 9.80998 7.64592 9.71598L5.33125 7.39131C5.13658 7.19598 5.13658 6.87998 5.33258 6.68465C5.52858 6.48998 5.84525 6.49065 6.03992 6.68598L7.99992 8.65465L9.95992 6.68598C10.1546 6.49065 10.4706 6.48998 10.6666 6.68465C10.7653 6.78198 10.8139 6.91065 10.8139 7.03865Z" fill="black"/>
          </svg>
        </a></li>
      </ul>

      <div class="items-center gap-5 flex flex-col">
        <ButtonSecondary padding="px-6 py-3">RECENT EPISODES</ButtonSecondary>
        <ButtonPrimary padding="px-6 py-3" shadow="shadow-sm">SUBSCRIBE</ButtonPrimary>
      </div>
    </nav>
  </header>
</template>

<style>
</style>