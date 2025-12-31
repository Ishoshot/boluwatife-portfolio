<script setup lang="ts">
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)

// Initialize x/y at 0,0. dragging updates these relative values
const { x, y, isDragging } = useDraggable(el, {
  initialValue: { x: 0, y: 0 },
  preventDefault: true
})
</script>

<template>
  <div 
    ref="el" 
    class="w-fit cursor-grab active:cursor-grabbing touch-none select-none hover:z-50 will-change-transform"
    :class="{ 'z-50 cursor-grabbing': isDragging }"
    :style="{ 
      transform: `translate3d(${x}px, ${y}px, 0) rotate(${x * 0.05}deg)`,
      transition: isDragging ? 'none' : 'transform 0.1s ease-out'
    }"
  >
    <div class="p-3 bg-white shadow-xl rounded-xl -rotate-2 hover:rotate-0 transition-transform duration-300 ease-out w-64 md:w-72 border border-border/5">
      <div class="aspect-[4/5] bg-secondary/20 rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
        <img 
          src="/boluwatife.png" 
          alt="Boluwatife" 
          class="w-full h-full object-cover pointer-events-none"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  </div>
</template>
