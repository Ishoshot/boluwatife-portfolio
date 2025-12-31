<script setup lang="ts">
import { personalInfo } from '@/data'
import { useClipboard } from '@vueuse/core'
import { Copy, Check, ArrowRight } from 'lucide-vue-next'
import DraggablePhoto from './DraggablePhoto.vue'

const { copy, copied } = useClipboard({ source: personalInfo.email })
const handleCopyEmail = () => copy(personalInfo.email)
// Extract first name for greeting
const firstName = personalInfo.name.split(' ')[1] 
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-24 md:py-32">
    <div class="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start relative">
      <!-- Photo Area (Draggable) -->
      <div class="hidden md:block relative h-[600px] pointer-events-none">
        <DraggablePhoto class="pointer-events-auto absolute top-10 left-10" />
      </div>

      <!-- Content -->
      <div class="space-y-12">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
          class="text-4xl md:text-5xl font-semibold tracking-tight text-foreground font-serif"
        >
          Hello. I'm {{ firstName }}.
        </h2>
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100, ease: 'easeOut' } }"
          class="space-y-8 text-muted-foreground leading-relaxed text-xl tracking-tight font-light"
        >
          <p>{{ personalInfo.summary }}</p>
          <p>
            As a designer, I love digging into complex problems and figuring out innovative and logical solutions. I’m naturally curious, so I’m always exploring new ideas and ways to improve.
          </p>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
          class="flex flex-wrap items-center gap-4 pt-4"
        >
          <button 
            @click="handleCopyEmail"
            class="group flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full transition-all duration-300 text-base font-medium tracking-wide active:scale-95"
          >
            <div class="relative w-4 h-4">
              <Copy v-if="!copied" class="w-4 h-4 absolute inset-0 transition-opacity duration-200" />
              <Check v-else class="w-4 h-4 absolute inset-0 text-green-600 transition-opacity duration-200" />
            </div>
            <span>{{ copied ? 'Copied' : 'Copy email' }}</span>
          </button>

          <a 
            v-for="social in personalInfo.socials.filter(s => ['LinkedIn', 'Behance', 'Dribbble', 'Instagram'].includes(s.name))" 
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-6 py-3 border border-border hover:border-foreground/20 hover:bg-secondary/30 rounded-full transition-all duration-300 text-base font-medium tracking-wide active:scale-95"
          >
            <component :is="social.icon" class="w-4 h-4" />
            <span>{{ social.name }}</span>
            <ArrowRight class="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
