<script setup lang="ts">
import { personalInfo } from '@/data'
import { useClipboard } from '@vueuse/core'
import { Copy, Check, ArrowRight } from 'lucide-vue-next'

const { copy, copied } = useClipboard({ source: personalInfo.email })
const handleCopyEmail = () => copy(personalInfo.email)
// Extract first name for greeting
const firstName = personalInfo.name.split(' ')[1] 
</script>

<template>
  <section class="max-w-3xl mx-auto px-6 py-24 space-y-12">
    <h2 
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
      class="text-3xl font-semibold tracking-tight text-foreground"
    >
      Hello. I'm {{ firstName }}.
    </h2>
    
    <div 
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100, ease: 'easeOut' } }"
      class="space-y-6 text-muted-foreground leading-relaxed text-lg tracking-tight"
    >
      <p>{{ personalInfo.summary }}</p>
    </div>

    <div 
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
      class="flex flex-wrap items-center gap-4 pt-4"
    >
      <button 
        @click="handleCopyEmail"
        class="group flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full transition-all duration-300 text-sm font-medium tracking-wide active:scale-95"
      >
        <div class="relative w-4 h-4">
          <Copy v-if="!copied" class="w-4 h-4 absolute inset-0 transition-opacity duration-200" />
          <Check v-else class="w-4 h-4 absolute inset-0 text-green-600 transition-opacity duration-200" />
        </div>
        <span>{{ copied ? 'Copied' : 'Copy email' }}</span>
      </button>

      <a 
        v-for="social in personalInfo.socials.filter(s => s.name === 'LinkedIn')" 
        :key="social.name"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 px-5 py-2.5 border border-border hover:border-foreground/20 hover:bg-secondary/30 rounded-full transition-all duration-300 text-sm font-medium tracking-wide active:scale-95"
      >
        <component :is="social.icon" class="w-4 h-4" />
        <span>Connect with me</span>
        <ArrowRight class="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  </section>
</template>
