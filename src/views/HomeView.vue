<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Projects from '@/components/Projects.vue'
import Experience from '@/components/Experience.vue'
import Skills from '@/components/Skills.vue'
import About from '@/components/About.vue'
import Testimonials from '@/components/Testimonials.vue'
import { ref, onMounted } from 'vue'
import { useSeoMeta, useHead } from '@unhead/vue'
import { personalInfo, skills } from '@/data'

const isLoaded = ref(false)

// SEO Configuration
const title = `${personalInfo.name} | ${personalInfo.role}`
const description = personalInfo.summary
const url = 'https://iamteefe.netlify.app'
const ogImage = 'https://iamteefe.netlify.app/boluwatife.png'

useHead({
  title,
  link: [
    { rel: 'canonical', href: url }
  ],
  meta: [
    { name: 'keywords', content: [...skills.core, ...skills.tools, 'Product Design', 'UX/UI', 'Lagos'].join(', ') },
    { name: 'author', content: personalInfo.name },
    { name: 'theme-color', content: '#ffffff' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: personalInfo.name,
        url: url,
        image: ogImage,
        jobTitle: personalInfo.role,
        worksFor: {
          '@type': 'Organization',
          name: 'Freelance / Contract'
        },
        sameAs: personalInfo.socials.map(s => s.url).filter(u => u !== '#' && !u.startsWith('mailto'))
      })
    }
  ]
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage,
  ogUrl: url,
  ogType: 'website',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
})

onMounted(() => {
  // Simple fade-in effect on mount
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <div class="transition-opacity duration-700 ease-out" :class="isLoaded ? 'opacity-100' : 'opacity-0'">
    <Hero />
    <Projects id="projects" />
    <Experience id="experience" />
    <About id="about" />
    <Skills />
    <Testimonials id="testimonials" />
  </div>
</template>
