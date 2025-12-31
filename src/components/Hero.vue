<script setup lang="ts">
import { hero, personalInfo } from '@/data'
import { useClipboard } from '@vueuse/core'
import { Copy, Check, ArrowRight } from 'lucide-vue-next'

const { copy, copied } = useClipboard({ source: personalInfo.email })
const email = personalInfo.email

const handleCopyEmail = () => {
  copy(email)
}
</script>

<template>
  <section class="max-w-3xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
    <div class="space-y-12">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
        class="flex flex-wrap items-center gap-3"
      >
        <div class="space-y-2">
          <h4 class="text-xl font-medium text-muted-foreground font-serif italic tracking-wide">{{ hero.greeting }}</h4>
          <div class="flex items-center gap-3 flex-wrap">
            <h4 class="text-xl font-medium text-foreground tracking-tight">{{ hero.intro }}</h4>
            <span class="px-3 py-1 bg-secondary/50 border border-border text-foreground/80 rounded-full text-xs font-medium tracking-wide uppercase">
              {{ personalInfo.role }}
            </span>
          </div>
        </div>
      </div>
      
      <h1 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100, ease: 'easeOut' } }"
        class="text-4xl md:text-6xl font-semibold leading-[1.1] text-foreground text-balance tracking-tighter"
      >
        {{ hero.headline }}
      </h1>
      
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
        class="text-2xl text-muted-foreground max-w-2xl text-balance leading-relaxed tracking-tight flex flex-wrap gap-x-3 gap-y-1 items-center"
      >
        <span class="text-foreground/80">Detail-oriented</span>
        <span class="text-border">|</span>
        <span class="text-foreground/80">Strategic</span>
        <span class="text-border">|</span>
        <span class="text-foreground/80">Collaboration</span>
      </div>

      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300, ease: 'easeOut' } }"
        class="flex flex-wrap items-center gap-4 pt-6"
      >
        <button 
          @click="handleCopyEmail"
          class="group flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full transition-all duration-300 text-sm font-medium tracking-wide active:scale-95"
        >
          <div class="relative w-4 h-4">
            <Copy 
              v-if="!copied" 
              class="w-4 h-4 absolute inset-0 transition-opacity duration-200" 
            />
            <Check 
              v-else 
              class="w-4 h-4 absolute inset-0 text-green-600 transition-opacity duration-200" 
            />
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
    </div>
  </section>
</template>
