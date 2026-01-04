<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Projects from '@/components/Projects.vue'
import Experience from '@/components/Experience.vue'
import Skills from '@/components/Skills.vue'
import About from '@/components/About.vue'
import Testimonials from '@/components/Testimonials.vue'
import { ref, onMounted } from 'vue'
import { useSeoMeta, useHead } from '@unhead/vue'
import { personalInfo, skills, projects } from '@/data'

const isLoaded = ref(false)

// SEO Configuration
const title = `${personalInfo.name} | ${personalInfo.role} Portfolio`
const description = "Full-Stack Product Designer in Lagos, Nigeria. Specializing in end-to-end product design, user research, and scalable design solutions for web and mobile."
const url = 'https://boluwatifeonisuru.com'
const ogImage = 'https://boluwatifeonisuru.com/boluwatife.png'

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
        '@graph': [
          {
            '@type': 'Person',
            '@id': `${url}/#person`,
            name: personalInfo.name,
            url: url,
            image: ogImage,
            jobTitle: personalInfo.role,
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance / Contract'
            },
            sameAs: personalInfo.socials.map(s => s.url).filter(u => u !== '#' && !u.startsWith('mailto'))
          },
          ...projects.map(project => ({
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            creator: { '@id': `${url}/#person` },
            url: project.link !== '#' ? project.link : undefined
          }))
        ]
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
