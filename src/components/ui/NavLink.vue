<template>
  <a 
    :href="seccion" 
    :class="claseEnlace"
  >
    <!-- Indicadores superior e inferior -->
    <span 
      v-for="posicion in ['top', 'bottom']"
      :key="posicion"
      :class="claseIndicador(posicion)"
    />
    
    <!-- Fondo al estar activo -->
    <span :class="claseFondo" />
    
    <!-- Texto del enlace -->
    <span class="relative z-10">
      <slot />
    </span>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  seccion: {
    type: String,
    required: true
  },
  activa: {
    type: Boolean,
    default: false
  }
})

// Clases base compartidas
const TRANSICION_BASE = 'transition-all duration-500 ease-out'

// Clases computadas
const claseEnlace = computed(() => [
  'relative px-4 py-2 text-sm lg:text-base font-medium whitespace-nowrap',
  TRANSICION_BASE,
  props.activa 
    ? 'text-steel-600 font-bold' 
    : 'text-steel-700 hover:text-steel-600'
])

const claseIndicador = (posicion) => [
  'absolute left-0 h-0.5 bg-linear-to-r from-steel-500 to-steel-600 rounded-full',
  TRANSICION_BASE,
  posicion === 'top' ? 'top-0' : 'bottom-0',
  props.activa ? 'w-full' : 'w-0'
]

const claseFondo = computed(() => [
  'absolute inset-0 bg-steel-100 rounded-lg',
  TRANSICION_BASE,
  props.activa ? 'opacity-100' : 'opacity-0 hover:opacity-60'
])
</script>
