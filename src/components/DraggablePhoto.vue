<script setup lang="ts">
import { ref } from 'vue'

const el = ref<HTMLElement | null>(null)
const x = ref(0)
const y = ref(0)
const isDragging = ref(false)

let startX = 0
let startY = 0
let initialX = 0
let initialY = 0

const onPointerDown = (e: PointerEvent) => {
  // Prevent default to stop text selection/scrolling interactions
  e.preventDefault()
  
  isDragging.value = true
  
  // Record initial pointer position
  startX = e.clientX
  startY = e.clientY
  
  // Record initial transform values
  initialX = x.value
  initialY = y.value
  
  // Attach global listeners
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
  window.addEventListener('pointercancel', onPointerUp)
}

const onPointerMove = (e: PointerEvent) => {
  if (!isDragging.value) return
  
  // Calculate delta
  const dx = e.clientX - startX
  const dy = e.clientY - startY
  
  // Apply delta to initial transform
  x.value = initialX + dx
  y.value = initialY + dy
}

const onPointerUp = () => {
  isDragging.value = false
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
  window.removeEventListener('pointercancel', onPointerUp)
}
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
    @pointerdown="onPointerDown"
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
