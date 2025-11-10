<template>
  <div 
    class="flex flex-wrap gap-4"
  >
    <!-- Botón LinkedIn (Primario) -->
    <a
      :href="urlLinkedin"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 px-6 py-3 bg-steel-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-steel-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-steel-500 focus:ring-offset-2"
      aria-label="Visitar perfil de LinkedIn"
    >
      <Linkedin :size="20" :stroke-width="2" aria-hidden="true" />
      LinkedIn
    </a>

    <!-- Botón Contacto (Secundario) -->
    <a
      href="#contacto"
      class="inline-flex items-center gap-2 px-6 py-3 bg-white text-steel-700 font-medium rounded-lg border-2 border-steel-300 transition-all duration-300 hover:border-steel-600 hover:text-steel-900 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-steel-500 focus:ring-offset-2"
      aria-label="Ir a la sección de contacto"
    >
      <Mail :size="20" :stroke-width="2" aria-hidden="true" />
      Contacto
    </a>
  </div>
</template>

<script setup>
import { Linkedin, Mail } from 'lucide-vue-next'

defineProps({
  urlLinkedin: {
    type: String,
    default: "https://www.linkedin.com/in/m%C2%AA-jos%C3%A9-mu%C3%B1oz-aroca-75151716b/"
  }
})
</script>
