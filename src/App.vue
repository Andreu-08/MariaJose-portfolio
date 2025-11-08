<script setup>
// Componentes de diseño principal
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import PaginaPrincipal from './views/PaginaPrincipal.vue'
</script>

<template>
  <!-- Contenedor principal con altura completa y fondo degradado -->
  <div class="min-h-screen flex flex-col bg-steel-50">
    <!-- Cabecera del sitio (fija) -->
    <Header />
    <!-- Contenido principal: todas las secciones del portfolio -->
    <main class="flex-1">
      <PaginaPrincipal />
    </main>
    <!-- Pie de página -->
    <Footer />
  </div>
</template>

<style>
/* Configuración global para navegación suave */
html {
  scroll-behavior: smooth;
}
</style>
