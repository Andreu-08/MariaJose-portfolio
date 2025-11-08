<template>
  <nav class="py-6">
    <div class="flex items-center justify-between">
      
      <!-- ===== LOGO ===== -->
      <!-- Enlace a inicio con logo animado -->
      <a 
        href="#inicio" 
        class="flex items-center gap-3 group scroll-smooth"
      >
        <div class="relative">
          <!-- Círculo de fondo que aparece al hover -->
          <div class="absolute inset-0 bg-steel-100 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300 ease-out"></div>
          
          <!-- Imagen del logo (gota de agua) -->
          <img 
            :src="logoGota" 
            alt="Logo María José - Gota de agua" 
            class="h-24 w-24 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          />
        </div>
      </a>

      <!-- ===== MENÚ DE NAVEGACIÓN ===== -->
      <ul class="flex items-center gap-2">
        <!-- Enlaces de navegación por secciones -->
        <li><NavLink seccion="#inicio">Inicio</NavLink></li>
        <li><NavLink seccion="#sobre-mi">Sobre Mí</NavLink></li>
        <li><NavLink seccion="#proyectos">Proyectos</NavLink></li>
        <li><NavLink seccion="#articulos">Artículos</NavLink></li>
        <li><NavLink seccion="#formacion">Formación</NavLink></li>
        
        <!-- Botón de contacto (CTA) -->
        <li>
          <a 
            href="#contacto" 
            class="px-4 py-2 text-sm font-medium bg-steel-600 text-white rounded-lg hover:bg-steel-700 shadow-sm hover:shadow-md transition-all duration-200 scroll-smooth"
          >
            Contacto
          </a>
        </li>
      </ul>
      
    </div>
  </nav>
</template>

<script setup>
// Importar imagen del logo
import logoGota from '../../assets/images/logo-gota-boton-sin-fondo.png'
// Componente reutilizable para enlaces de navegación
import NavLink from '../ui/NavLink.vue'
</script>

<style scoped>
</style>
