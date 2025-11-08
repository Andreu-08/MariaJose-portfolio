<template>
  <!-- 
    Componente reutilizable para enlaces de navegación
    - Aplica estilos consistentes a todos los enlaces del menú
    - Usa anclas (#seccion) para navegación suave por scroll
  -->
  <a 
    :href="seccion" 
    class="px-4 py-2 text-sm font-medium text-steel-700 rounded-lg hover:text-steel-600 hover:bg-steel-50 transition-all duration-200 scroll-smooth"
  >
    <!-- El contenido del enlace (texto) se pasa desde el componente padre -->
    <slot />
  </a>
</template>

<script setup>
// Props (propiedades que recibe el componente)
defineProps({
  seccion: {
    type: String,      // ID de la sección (ejemplo: "#sobre-mi")
    required: true     // Es obligatorio pasar una sección
  }
})
</script>
