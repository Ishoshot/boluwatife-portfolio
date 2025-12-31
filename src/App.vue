<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Projects from '@/components/Projects.vue'
import Experience from '@/components/Experience.vue'
import Skills from '@/components/Skills.vue'
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'
import CustomCursor from '@/components/CustomCursor.vue'
import { ref, onMounted, computed } from 'vue'
import { useCursor } from '@/composables/useCursor'

const { cursorVariant } = useCursor()
const isLoaded = ref(false)
const isProjectCursor = computed(() => cursorVariant.value === 'project')

onMounted(() => {
  // Simple fade-in effect on mount
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <div 
    class="min-h-screen bg-background text-foreground antialiased selection:bg-foreground/10 selection:text-foreground transition-colors duration-300"
    :class="{ 'cursor-project': isProjectCursor }"
  >
    <CustomCursor />
    <main class="transition-opacity duration-700 ease-out" :class="isLoaded ? 'opacity-100' : 'opacity-0'">
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Skills />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Global smooth scroll */
html {
  scroll-behavior: smooth;
  cursor: url('/cursor-default.svg') 0 0, auto; /* Native cursor, 0 0 hotspot */
}

a, button {
  cursor: url('/cursor-default.svg') 0 0, auto; /* Keep default cursor for links unless overridden */
}

/* Class to switch to project cursor */
.cursor-project, 
.cursor-project a, 
.cursor-project button {
  cursor: url('/cursor-project.svg') 0 0, auto !important;
}
</style>
