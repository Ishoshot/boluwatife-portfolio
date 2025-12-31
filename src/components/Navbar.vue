<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isScrolled = ref(false)
const isOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})

const links = [
  { name: 'Projects', to: { name: 'home', hash: '#projects' } },
  { name: 'Experience', to: { name: 'home', hash: '#experience' } },
  { name: 'About', to: { name: 'home', hash: '#about' } },
  { name: 'Testimonials', to: { name: 'home', hash: '#testimonials' } },
  { name: 'Boluwatife', to: { name: 'boluwatife' }, target: '_blank' },
]
</script>

<template>
  <div>
    <!-- Floating Pill Nav -->
    <nav 
      class="fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ease-out"
      :class="[
        isScrolled ? 'top-6' : 'top-8'
      ]"
    >
      <div 
        class="px-6 py-3 rounded-full flex items-center gap-8 bg-background/80 backdrop-blur-md border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-8">
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

        <!-- Mobile Toggle -->
        <button 
          @click="toggleMenu"
          class="md:hidden flex items-center gap-2 text-sm font-medium text-foreground"
        >
          <span>Menu</span>
          <Menu class="w-4 h-4" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden flex flex-col p-6"
      >
        <div class="flex justify-end">
          <button 
            @click="toggleMenu"
            class="p-2 text-foreground hover:text-muted-foreground transition-colors"
          >
            <X class="w-6 h-6" />
          </button>
        </div>

        <div class="flex-1 flex flex-col items-center justify-center gap-8">
          <router-link 
            v-for="link in links" 
            :key="link.name" 
            :to="link.to"
            :target="link.target"
            @click="closeMenu"
            class="text-2xl font-medium text-foreground/80 hover:text-foreground transition-colors"
            active-class="text-foreground"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </Transition>
  </div>
</template>
