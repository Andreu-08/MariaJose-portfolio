<template>
  <nav class="py-3 md:py-6 lg:py-8 px-4 md:px-12 lg:px-16" aria-label="Navegación principal">
    <!-- Contenedor principal de navegación -->
    <header class="flex items-center justify-between">
      
      <!-- Logo y nombre con enlace a inicio -->
      <a href="#inicio" class="flex items-center gap-2 md:gap-4 group" aria-label="Ir al inicio - María José Muñoz Aroca">
        
        <!-- Logo con efecto hover -->
        <figure class="relative m-0" aria-hidden="true">
          <div class="absolute inset-0 bg-steel-100 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-out"></div>
          <img 
            :src="logoGota" 
            alt=""
            width="128"
            height="128"
            class="h-12 w-12 md:h-24 md:w-24 lg:h-32 lg:w-32 relative z-10 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6"
          />
        </figure>
        
        <!-- Nombre con efecto hover -->
        <strong class="transition-all duration-500 ease-out group-hover:translate-x-1 font-bold leading-tight text-steel-900 text-base md:text-2xl lg:text-3xl xl:text-4xl not-italic">
          <span class="transition-colors duration-500 ease-out group-hover:text-steel-800">
            <span class="text-steel-600 transition-colors duration-500 ease-out" aria-hidden="true">M</span>ª<span class="text-steel-600 transition-colors duration-500 ease-out" aria-hidden="true">J</span>osé 
            Muñoz Aroca
          </span>
        </strong>
      </a>

      <!-- Menú desktop -->
      <ul class="hidden md:flex items-center gap-2 lg:gap-3" role="list">
        <li><NavLink seccion="#inicio" :activa="seccionActiva === 'inicio'">Inicio</NavLink></li>
        <li><NavLink seccion="#sobre-mi" :activa="seccionActiva === 'sobre-mi'">Sobre Mí</NavLink></li>
        <li><NavLink seccion="#proyectos" :activa="seccionActiva === 'proyectos'">Proyectos</NavLink></li>
        <li><NavLink seccion="#articulos" :activa="seccionActiva === 'articulos'">Artículos</NavLink></li>
        <li><NavLink seccion="#formacion" :activa="seccionActiva === 'formacion'">Formación</NavLink></li>
        <li>
          <a 
            href="#contacto" 
            :class="claseBotonContacto"
            :aria-current="seccionActiva === 'contacto' ? 'page' : undefined"
          >
            <span :class="claseBrilloContacto" aria-hidden="true" />
            <span class="relative z-10">Contacto</span>
          </a>
        </li>
      </ul>

      <!-- Botón hamburguesa móvil -->
      <button
        type="button"
        @click="menuAbierto = !menuAbierto"
        class="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-steel-50 transition-colors duration-300 ease-out"
        :aria-label="menuAbierto ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
        :aria-expanded="menuAbierto"
        aria-controls="menu-movil"
      >
        <span class="w-6 h-0.5 bg-steel-700 rounded-full transition-all duration-300 ease-out" :class="menuAbierto ? 'rotate-45 translate-y-2' : ''" aria-hidden="true"></span>
        <span class="w-6 h-0.5 bg-steel-700 rounded-full transition-all duration-300 ease-out" :class="menuAbierto ? 'opacity-0' : ''" aria-hidden="true"></span>
        <span class="w-6 h-0.5 bg-steel-700 rounded-full transition-all duration-300 ease-out" :class="menuAbierto ? '-rotate-45 -translate-y-2' : ''" aria-hidden="true"></span>
      </button>
      
    </header>

    <!-- Menú móvil desplegable -->
    <MenuMovil 
      :menuAbierto="menuAbierto" 
      :seccionActiva="seccionActiva"
      @cerrar="menuAbierto = false" 
    />
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import NavLink from '../ui/NavLink.vue'
import MenuMovil from '../ui/MenuMovil.vue'
import logoGota from '../../assets/images/logo-gota-boton-sin-fondo.png'

// ===== CONFIGURACIÓN =====
const SECCIONES = ['inicio', 'sobre-mi', 'proyectos', 'articulos', 'formacion', 'contacto']
const OFFSET_HEADER = 150
const TRANSICION_LENTA = 'duration-500 ease-out'

// ===== ESTADO REACTIVO =====
const menuAbierto = ref(false)
const seccionActiva = ref('inicio')

// ===== MÉTODOS =====
const detectarSeccion = () => {
  const seccionVisible = SECCIONES.find(seccion => {
    const elemento = document.getElementById(seccion)
    if (!elemento) return false
    
    const { top, bottom } = elemento.getBoundingClientRect()
    return top <= OFFSET_HEADER && bottom >= OFFSET_HEADER
  })
  
  if (seccionVisible) {
    seccionActiva.value = seccionVisible
  }
}

// ===== CLASES COMPUTADAS =====
const claseBotonContacto = computed(() => [
  'relative px-4 py-2 text-sm lg:text-base font-medium rounded-lg text-white overflow-hidden transition-all',
  TRANSICION_LENTA,
  seccionActiva.value === 'contacto' 
    ? 'bg-steel-700 shadow-lg scale-105 animate-pulse-subtle' 
    : 'bg-steel-600 hover:bg-steel-700 hover:shadow-md hover:-translate-y-0.5'
])

const claseBrilloContacto = computed(() => [
  'absolute inset-0 bg-white/10 transition-opacity',
  TRANSICION_LENTA,
  seccionActiva.value === 'contacto' ? 'opacity-100' : 'opacity-0'
])

// ===== LIFECYCLE HOOKS =====
onMounted(() => {
  detectarSeccion()
  window.addEventListener('scroll', detectarSeccion)
})

onUnmounted(() => {
  window.removeEventListener('scroll', detectarSeccion)
})
</script>

