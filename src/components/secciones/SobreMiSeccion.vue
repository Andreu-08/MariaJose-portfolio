<template>
  <!-- ===== SECCIÓN SOBRE MÍ ===== -->
  <section 
    id="sobre-mi" 
    class="relative min-h-screen flex items-center justify-center px-4 scroll-mt-20 fondo-sobremi"
  >
    <div class="relative z-10">
      <h1 class="text-5xl font-bold text-steel-900 mb-6">
        Sobre Mí
      </h1>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/**
 * Fondo de la sección sobre mí
 */
.fondo-sobremi {
  background-image: url('@/assets/images/fondo-sobremi.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>