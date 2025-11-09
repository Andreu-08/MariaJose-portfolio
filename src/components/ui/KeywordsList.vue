<template>
  <div 
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visible="{ opacity: 1, y: 0 }"
    :delay="500"
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
/**
 * Componente KeywordsList
 * 
 * Lista horizontal de palabras clave con separadores visuales.
 * Muestra las áreas de especialización o conceptos destacados.
 * 
 * Props:
 * @prop {Array<string>} palabrasClave - Array de palabras clave a mostrar
 * 
 * Características:
 * - Animación de entrada suave
 * - Separadores visuales entre elementos
 * - Efecto hover en cada palabra
 * - Responsive con wrap automático
 */

defineProps({
  palabrasClave: {
    type: Array,
    required: true,
    default: () => [],
    validator: (value) => Array.isArray(value) && value.every(item => typeof item === 'string')
  }
})
</script>
