<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type { Project } from '@/data'
import { useCursor } from '@/composables/useCursor'

defineProps<{
  project: Project
}>()

const { setCursorVariant } = useCursor()
</script>

<template>
  <button 
    @mouseenter="setCursorVariant('project')"
    @mouseleave="setCursorVariant('default')"
    class="group relative flex flex-col h-full w-full text-left p-8 rounded-3xl bg-card border border-border/50 hover:border-foreground/10 hover:bg-secondary/40 transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
  >
    <div class="flex flex-col h-full gap-8">
      <div class="flex items-start justify-between w-full">
        <div class="flex items-center gap-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          <span>{{ project.year }}</span>
          <span class="w-1 h-1 rounded-full bg-border"></span>
          <span>{{ project.category }}</span>
        </div>
        <div class="p-2 rounded-full bg-secondary/50 text-foreground/50 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
          <ArrowUpRight class="w-4 h-4" />
        </div>
      </div>

      <div class="space-y-3">
        <h3 class="text-2xl font-semibold tracking-tight text-foreground group-hover:text-foreground/90 transition-colors">
          {{ project.title }}
        </h3>
        <p class="text-muted-foreground leading-relaxed text-base line-clamp-3">
          {{ project.description }}
        </p>
      </div>

      <div class="mt-auto pt-8 grid grid-cols-2 gap-6 border-t border-border/40 w-full">
        <div v-for="stat in project.stats" :key="stat.label">
          <p class="text-3xl font-semibold tracking-tighter text-foreground tabular-nums">{{ stat.value }}</p>
          <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </button>
</template>
