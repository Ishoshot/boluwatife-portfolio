<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import CustomCursor from '@/components/CustomCursor.vue'
import Navbar from '@/components/Navbar.vue'
import { computed } from 'vue'
import { useCursor } from '@/composables/useCursor'

const { cursorVariant } = useCursor()
const isProjectCursor = computed(() => cursorVariant.value === 'project')
</script>

<template>
  <div 
    class="min-h-screen bg-background text-foreground antialiased selection:bg-foreground/10 selection:text-foreground transition-colors duration-300"
    :class="{ 'cursor-project': isProjectCursor }"
  >
    <CustomCursor />
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<style>
/* Global smooth scroll */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
