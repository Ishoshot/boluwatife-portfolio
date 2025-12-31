<script setup lang="ts">
import { DialogRoot, DialogContent, DialogOverlay, DialogPortal, DialogTitle, DialogDescription, DialogClose } from 'radix-vue'
import { X } from 'lucide-vue-next'

defineProps<{
  open: boolean
  title?: string
  description?: string
}>()

const emit = defineEmits<{
  (e: 'update:open', value: boolean): void
}>()
</script>

<template>
  <DialogRoot :open="open" @update:open="emit('update:open', $event)">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 bg-black/40 backdrop-blur-md z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogContent class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-3xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background/95 backdrop-blur-xl p-0 shadow-2xl duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl max-h-[85vh] overflow-y-auto outline-none">
        
        <div class="relative p-8 md:p-12">
          <DialogClose class="absolute right-6 top-6 rounded-full p-2.5 opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none text-muted-foreground">
            <X class="h-5 w-5" />
            <span class="sr-only">Close</span>
          </DialogClose>
          
          <div v-if="title || description" class="mb-8 space-y-2 pr-8">
            <DialogTitle v-if="title" class="text-3xl font-serif font-medium tracking-tight text-foreground">
              {{ title }}
            </DialogTitle>
            <DialogDescription v-if="description" class="text-lg text-muted-foreground leading-relaxed">
              {{ description }}
            </DialogDescription>
          </div>
          
          <slot />
        </div>

      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
