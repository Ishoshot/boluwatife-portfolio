<script setup lang="ts">
import { skills } from '@/data'
</script>

<template>
  <section class="max-w-3xl mx-auto px-6 py-24 space-y-16">
    <div 
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
      class="space-y-8"
    >
      <h2 class="text-3xl font-semibold tracking-tight text-foreground">Skills</h2>
      <div class="flex flex-wrap gap-3">
        <span 
          v-for="(skill, index) in skills.core" 
          :key="skill"
          class="px-4 py-2 bg-secondary/30 border border-border/50 text-foreground/90 rounded-full text-sm font-medium tracking-wide transition-colors hover:bg-secondary/60 hover:border-foreground/10 cursor-default"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <div 
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
      class="space-y-8"
    >
      <h2 class="text-3xl font-semibold tracking-tight text-foreground">Tools</h2>
      <div class="flex flex-wrap gap-3">
        <span 
          v-for="(tool, index) in skills.tools" 
          :key="tool"
          class="px-4 py-2 bg-secondary/30 border border-border/50 text-foreground/90 rounded-full text-sm font-medium tracking-wide transition-colors hover:bg-secondary/60 hover:border-foreground/10 cursor-default"
        >
          {{ tool }}
        </span>
      </div>
    </div>
  </section>
</template>
