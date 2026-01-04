<script setup lang="ts">
import { useSeoMeta, useHead } from '@unhead/vue'
import { personalInfo } from '@/data'

const title = `Portfolio Presentation | ${personalInfo.name} - Product Designer`
const description = "View my detailed portfolio presentation showcasing my design process, case studies, and impact. Explore end-to-end design solutions for web and mobile products."
const url = 'https://boluwatifeonisuru.com/boluwatife'
const ogImage = 'https://boluwatifeonisuru.com/boluwatife.png'

useHead({
  title,
  link: [
    { rel: 'canonical', href: url }
  ]
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage,
  ogUrl: url,
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
})
</script>

<template>
  <div class="min-h-screen bg-background pt-32 px-6 flex justify-center items-start">
    <iframe 
      src="https://gamma.app/embed/qxbv2o6le0xptg9?mode=present" 
      style="width: 100%; max-width: 1200px; height: 80vh; border: none; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);" 
      allow="fullscreen" 
      title="Onisuru Boluwatife"
    ></iframe>
  </div>
</template>
