<template>
  <div
    class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-steel-100/80 backdrop-blur-sm border border-steel-200">
    <!-- Icono de lucide-vue-next -->
    <ArrowBigRightDash class="w-4 h-4 text-steel-700" />

    <!-- Texto del badge -->
    <span class="text-sm font-medium text-steel-700">
      {{ perfil.hero.especialidad }}
    </span>
  </div>
</template>

<script setup>
import { ArrowBigRightDash } from 'lucide-vue-next'
import { perfil } from '@/data/perfil.js'
</script>
