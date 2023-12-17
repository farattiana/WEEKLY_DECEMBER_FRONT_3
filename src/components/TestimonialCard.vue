<script setup>
defineProps({
  user: {
    fullName: String,
    picture: String,
    platform: 'spotify' | 'google' | 'apple'
  }
})

const platforms = {
  spotify: 'Spotify',
  google: 'Google Podcast',
  apple: 'Apple Podcast'
}
</script>

<template>
  <div class="flex flex-col bg-[#fff] rounded-lg gap-6 max-w-xl p-8">
    <span class="text-8xl font-bold text-red">“</span>

    <p class="text-2xl -mt-8">Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.</p>
    
    <div class="flex items-center gap-2.5">
      <img class="rounded-full w-12 h-12" :src="user.picture" alt="">
      <span class="text-sm">{{ user.fullName }},</span>
      <div class="flex items-center gap-2">
        <img :src="user.platform + '.svg'" alt="">
        <span class="font-bold text-sm">{{ platforms[user.platform] }}</span>
      </div>
    </div>
  </div>
</template>