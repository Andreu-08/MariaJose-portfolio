<template>
  <div 
    class="flex flex-wrap items-center gap-3 text-lg md:text-xl text-steel-700"
  >
    <template v-for="(palabraClave, indice) in palabrasClave" :key="palabraClave">
      <!-- Palabra clave -->
      <span 
        class="font-medium transition-colors duration-300 hover:text-steel-600"
      >
        {{ palabraClave }}
      </span>
      
      <!-- Separador (no se muestra después de la última palabra) -->
      <span 
        v-if="indice < palabrasClave.length - 1" 
        class="text-steel-400"
        aria-hidden="true"
      >
        •
      </span>
    </template>
  </div>
</template>

<script setup>
import { perfil } from '@/data/perfil.js'

const palabrasClave = perfil.hero.palabrasClave
</script>
