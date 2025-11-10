<template>
  <!-- ===== PÁGINA PRINCIPAL ===== -->
  <!-- Contiene todas las secciones del portfolio en una sola página -->
  <div class="scroll-smooth">
    
    <!-- Sección: Inicio/Presentación -->
    <InicioSeccion />
    
    <!-- Sección: Sobre Mí -->
    <SobreMiSeccion />
    
    <!-- Sección: Proyectos -->
    <ProyectosSeccion />
    
    <!-- Sección: Formación -->
    <FormacionSeccion />
    
    <!-- Sección: Contacto -->
    <ContactoSeccion />
    
  </div>
</template>

<script setup>
// Importar todos los componentes de sección
import InicioSeccion from '../components/secciones/InicioSeccion.vue'
import SobreMiSeccion from '../components/secciones/SobreMiSeccion.vue'
import ProyectosSeccion from '../components/secciones/ProyectosSeccion.vue'
import FormacionSeccion from '../components/secciones/FormacionSeccion.vue'
import ContactoSeccion from '../components/secciones/ContactoSeccion.vue'
</script>

<style scoped>
/* Desplazamiento suave entre secciones */
html {
  scroll-behavior: smooth;
}
</style>
