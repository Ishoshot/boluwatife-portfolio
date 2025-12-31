<script setup lang="ts">
import { useCursor } from '@/composables/useCursor'
import { computed } from 'vue'

const { x, y, cursorVariant } = useCursor()

const isProject = computed(() => cursorVariant.value === 'project')
</script>

<template>
  <div 
    class="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-normal will-change-transform"
    :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }"
  >
    <div class="relative">
      <!-- Project Hover Badge (Text Only) -->
      <div 
        class="absolute top-1 left-3 z-10 px-4 py-2 bg-[#8B4513] text-white text-sm font-medium rounded-full whitespace-nowrap shadow-lg origin-top-left flex items-center justify-center transition-all duration-300 ease-out border border-white/10"
        :class="[
          isProject 
            ? 'opacity-100 scale-100 translate-x-0 translate-y-0' 
            : 'opacity-0 scale-75 -translate-x-1 -translate-y-1'
        ]"
      >
        View more
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  pointer-events: none;
}
</style>
