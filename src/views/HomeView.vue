<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Projects from '@/components/Projects.vue'
import Experience from '@/components/Experience.vue'
import Skills from '@/components/Skills.vue'
import About from '@/components/About.vue'
import Testimonials from '@/components/Testimonials.vue'
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

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
