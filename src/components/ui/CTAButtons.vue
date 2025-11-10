<template>
  <div class="flex flex-wrap gap-4">
    <!-- Botón LinkedIn (Primario) -->
    <a :href="perfil.linkedin" target="_blank" rel="noopener noreferrer"
      class="inline-flex items-center gap-2 px-6 py-3 bg-steel-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-steel-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-steel-500 focus:ring-offset-2"
      aria-label="Visitar perfil de LinkedIn">
      <Linkedin :size="20" :stroke-width="2" aria-hidden="true" />
      LinkedIn
    </a>

    <!-- Botón Contacto (Secundario) -->
    <ContactoButton variante="claro" />
  </div>
</template>

<script setup>
import { Linkedin } from 'lucide-vue-next'
import { perfil } from '@/data/perfil.js'
import ContactoButton from './ContactoButton.vue'
</script>
