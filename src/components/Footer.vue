<script setup lang="ts">
import { personalInfo } from '@/data'
</script>

<template>
  <footer class="max-w-3xl mx-auto px-6 py-16 mt-12 border-t border-border/40">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
      <div class="flex flex-col items-center md:items-start gap-1">
        <p class="text-foreground font-medium tracking-tight">{{ personalInfo.name }}</p>
        <p class="text-xs text-muted-foreground tracking-wide uppercase">Designed & Built • © {{ new Date().getFullYear() }}</p>
      </div>

      <div class="flex items-center gap-8">
        <a 
          v-for="social in personalInfo.socials" 
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide relative group"
        >
          {{ social.name }}
          <span class="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </div>
  </footer>
</template>
