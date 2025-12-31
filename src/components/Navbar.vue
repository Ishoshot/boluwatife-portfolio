<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const links = [
  { name: 'Projects', to: { name: 'home', hash: '#projects' } },
  { name: 'Experience', to: { name: 'home', hash: '#experience' } },
  { name: 'About', to: { name: 'home', hash: '#about' } },
  { name: 'Boluwatife', to: { name: 'boluwatife' }, target: '_blank' },
]
</script>

<template>
  <nav 
    class="fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ease-out"
    :class="[
      isScrolled ? 'top-6' : 'top-8'
    ]"
  >
    <div 
      class="px-6 py-3 rounded-full flex items-center gap-8 bg-background/80 backdrop-blur-md border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <router-link 
        v-for="link in links" 
        :key="link.name" 
        :to="link.to"
        :target="link.target"
        class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide relative group"
        active-class="text-foreground"
      >
        {{ link.name }}
        <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-foreground rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
      </router-link>
    </div>
  </nav>
</template>
