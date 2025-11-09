<template>
  <div 
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visible="{ opacity: 1, y: 0 }"
    :delay="600"
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

/**
 * Componente CTAButtons (Call To Action Buttons)
 * 
 * Botones de llamada a la acción para la sección hero.
 * Incluye acceso a LinkedIn y navegación al formulario de contacto.
 * 
 * Props:
 * @prop {String} urlLinkedin - URL del perfil de LinkedIn
 * 
 * Características:
 * - Animación de entrada coordinada
 * - Dos variantes: primario (LinkedIn) y secundario (Contacto)
 * - Iconos de Lucide integrados
 * - Efectos hover y scale
 * - Focus states accesibles
 * - Links con rel y target apropiados
 */

defineProps({
  urlLinkedin: {
    type: String,
    default: 'https://linkedin.com'
  }
})
</script>
