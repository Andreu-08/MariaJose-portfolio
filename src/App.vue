<script setup>
// Componentes de diseño principal
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import PaginaPrincipal from './views/PaginaPrincipal.vue'
</script>

<template>
  <div>
    <!-- Cabecera del sitio -->
    <Header />
    <!-- Contenido principal -->
    <main>
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
