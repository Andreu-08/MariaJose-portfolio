<template>
  <h1 class="space-y-2">
    <div 
      v-for="(linea, index) in perfil.hero.titulo" 
      :key="index"
      class="overflow-hidden"
    >
      <span 
        :class="[
          'block text-5xl md:text-6xl lg:text-7xl font-bold leading-tight',
          linea.gradiente 
            ? 'bg-linear-to-r from-steel-600 via-steel-500 to-steel-600 bg-clip-text text-transparent'
            : 'text-steel-900'
        ]"
      >
        {{ linea.texto }}
      </span>
    </div>
  </h1>
</template>

<script setup>
import { perfil } from '@/data/perfil.js'
</script>
