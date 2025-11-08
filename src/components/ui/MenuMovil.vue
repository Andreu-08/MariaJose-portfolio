<template>
  <div v-if="menuAbierto" class="md:hidden mt-4 py-4 border-t border-steel-100">
    <ul class="flex flex-col gap-3">
      <li 
        v-for="enlace in ENLACES" 
        :key="enlace.id" 
        @click="emit('cerrar')"
      >
        <NavLink 
          :seccion="enlace.seccion" 
          :activa="seccionActiva === enlace.id"
        >
          {{ enlace.texto }}
        </NavLink>
      </li>
      
      <li @click="emit('cerrar')">
        <a href="#contacto" :class="claseBotonContacto">
          <span :class="claseBrilloContacto" />
          <span class="relative z-10">Contacto</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import NavLink from './NavLink.vue'

const props = defineProps({
  menuAbierto: {
    type: Boolean,
    required: true
  },
  seccionActiva: {
    type: String,
    default: 'inicio'
  }
})

const emit = defineEmits(['cerrar'])

// Configuración de enlaces
const ENLACES = [
  { id: 'inicio', seccion: '#inicio', texto: 'Inicio' },
  { id: 'sobre-mi', seccion: '#sobre-mi', texto: 'Sobre Mí' },
  { id: 'proyectos', seccion: '#proyectos', texto: 'Proyectos' },
  { id: 'articulos', seccion: '#articulos', texto: 'Artículos' },
  { id: 'formacion', seccion: '#formacion', texto: 'Formación' }
]

const TRANSICION_BASE = 'transition-all duration-300'

// Clases computadas para botón contacto
const claseBotonContacto = computed(() => [
  'relative block px-5 py-4 text-center text-base font-medium rounded-lg overflow-hidden',
  TRANSICION_BASE,
  props.seccionActiva === 'contacto'
    ? 'bg-steel-700 text-white shadow-lg scale-105 animate-pulse-subtle font-bold'
    : 'bg-steel-600 text-white hover:bg-steel-700 hover:shadow-md'
])

const claseBrilloContacto = computed(() => [
  'absolute inset-0 bg-white/10',
  TRANSICION_BASE,
  props.seccionActiva === 'contacto' ? 'opacity-100' : 'opacity-0'
])
</script>

<style scoped>
li :deep(a) {
  display: block;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  width: 100%;
}
</style>
