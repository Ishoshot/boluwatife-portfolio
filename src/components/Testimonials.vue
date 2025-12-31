<script setup lang="ts">
import { testimonials } from '@/data'
import { Quote } from 'lucide-vue-next'
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-24 md:py-32 bg-background">
    <div class="space-y-16">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
        class="space-y-4 max-w-2xl"
      >
        <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Kind words from colleagues
        </h2>
        <p class="text-lg text-muted-foreground">
          I've been fortunate to work with some amazing people. Here's what they have to say about our collaboration.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100, ease: 'easeOut' } }"
          class="bg-secondary/20 p-8 rounded-2xl border border-border/50 hover:border-border transition-colors duration-300 flex flex-col justify-between"
        >
          <div class="space-y-6">
            <Quote class="w-8 h-8 text-foreground/20" />
            <p class="text-lg text-foreground/80 leading-relaxed font-light">
              "{{ testimonial.text }}"
            </p>
          </div>
          
          <div class="mt-8 pt-6 border-t border-border/50">
            <h4 class="font-medium text-foreground">{{ testimonial.name }}</h4>
            <div class="text-sm text-muted-foreground mt-1">
              {{ testimonial.role }} @ {{ testimonial.company }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
