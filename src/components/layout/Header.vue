<template>
  <!-- Cabecera fija con efecto glassmorphism -->
  <header class="bg-white/95 backdrop-blur-sm border-b border-steel-100 sticky top-0 z-50 transition-all duration-300">
    <div class="container mx-auto px-6 max-w-7xl">
      <!-- Menú de navegación -->
      <Navigation />
    </div>
  </header>
</template>

<script setup>
// Componente de navegación principal
import Navigation from './Navigation.vue'
</script>

<style scoped>
/* Sombra suave por defecto */
header {
  box-shadow: 0 1px 3px rgba(45, 82, 119, 0.05);
}

/* Sombra más pronunciada al pasar el mouse */
header:hover {
  box-shadow: 0 4px 6px rgba(45, 82, 119, 0.08);
}
</style>
