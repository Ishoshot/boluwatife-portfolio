<script setup lang="ts">
import { ref } from 'vue'
import { projects, type Project } from '@/data'
import ProjectCard from './ProjectCard.vue'
import Modal from './Modal.vue'

const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)

const openProject = (project: Project) => {
  selectedProject.value = project
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
      Selected Work
    </h2>
    
    <div class="grid gap-8">
      <ProjectCard 
        v-for="(project, index) in projects" 
        :key="project.id" 
        :project="project"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100, ease: 'easeOut' } }"
        @click="openProject(project)"
      />
    </div>

    <Modal 
      v-model:open="isModalOpen"
      :title="selectedProject?.title"
      :description="selectedProject?.description"
    >
      <div v-if="selectedProject?.details" class="space-y-10 py-4">
        <div class="space-y-4">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">The Problem</h4>
          <p class="text-lg leading-relaxed text-foreground/90">{{ selectedProject.details.problem }}</p>
        </div>

        <div class="space-y-4">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">The Solution</h4>
          <p class="text-lg leading-relaxed text-foreground/90">{{ selectedProject.details.solution }}</p>
        </div>

        <div class="space-y-4">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">The Impact</h4>
          <p class="text-lg leading-relaxed text-foreground/90">{{ selectedProject.details.impact }}</p>
        </div>

        <div class="pt-8 border-t border-border grid grid-cols-2 gap-6">
           <div v-for="stat in selectedProject.stats" :key="stat.label">
            <p class="text-4xl font-semibold tracking-tighter text-foreground tabular-nums">{{ stat.value }}</p>
            <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </Modal>
  </section>
</template>
