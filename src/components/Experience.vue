<script setup lang="ts">
import { ref } from 'vue'
import { experience, type Experience } from '@/data'
import Modal from './Modal.vue'
import { ArrowUpRight } from 'lucide-vue-next'

const selectedExp = ref<Experience | null>(null)
const isModalOpen = ref(false)

const openExperience = (exp: Experience) => {
  selectedExp.value = exp
  isModalOpen.value = true
}
</script>

<template>
  <section class="max-w-3xl mx-auto px-6 py-24 space-y-16">
    <h2 
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
      class="text-3xl font-semibold tracking-tight text-foreground"
    >
      Experience
    </h2>
    
    <div class="space-y-8">
      <div 
        v-for="(exp, index) in experience" 
        :key="exp.company" 
        class="group cursor-pointer relative pl-8 border-l border-border hover:border-foreground/30 transition-colors duration-500"
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 800, delay: index * 100, ease: 'easeOut' } }"
        @click="openExperience(exp)"
      >
        <span class="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-background border border-border group-hover:border-foreground group-hover:scale-110 transition-all duration-300"></span>
        
        <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
          <div class="space-y-1">
            <h3 class="text-xl font-medium text-foreground group-hover:text-foreground/80 transition-colors flex items-center gap-2">
              {{ exp.role }}
              <ArrowUpRight class="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </h3>
            <p class="text-base text-muted-foreground">{{ exp.company }}</p>
          </div>
          <span class="text-sm font-medium text-muted-foreground/60 tabular-nums">{{ exp.period }}</span>
        </div>
        
        <p class="text-muted-foreground leading-relaxed max-w-2xl text-base group-hover:text-foreground/70 transition-colors">
          {{ exp.description }}
        </p>
      </div>
    </div>

    <Modal 
      v-model:open="isModalOpen"
      :title="selectedExp?.role"
      :description="`${selectedExp?.company} • ${selectedExp?.period}`"
    >
      <div v-if="selectedExp?.details" class="space-y-10 py-6">
        <div class="space-y-6">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">Key Responsibilities</h4>
          <ul class="space-y-4">
            <li v-for="(item, i) in selectedExp.details.responsibilities" :key="i" class="flex gap-4 text-lg leading-relaxed text-foreground/90">
              <span class="mt-2.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="space-y-6">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">Key Achievements</h4>
          <ul class="space-y-4">
            <li v-for="(item, i) in selectedExp.details.achievements" :key="i" class="flex gap-4 text-lg leading-relaxed text-foreground/90">
              <span class="mt-2.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  </section>
</template>
