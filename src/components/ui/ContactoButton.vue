<template>
  <a
    href="#contacto"
    :class="[
      'inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2',
      variante === 'claro' 
        ? 'bg-white text-steel-700 border-steel-300 hover:border-steel-600 hover:text-steel-900 focus:ring-steel-500'
        : 'bg-steel-600 text-white border-steel-300 hover:border-steel-400 hover:bg-steel-700 focus:ring-steel-400'
    ]"
    aria-label="Ir a la sección de contacto"
  >
    <Mail :size="20" :stroke-width="2" aria-hidden="true" />
    Contacto
  </a>
</template>

<script setup>
import { Mail } from 'lucide-vue-next'

defineProps({
  variante: {
    type: String,
    default: 'claro',
  }
})
</script>
