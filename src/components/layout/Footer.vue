<template>
  <footer class="bg-steel-50 border-t border-steel-200 mt-auto">
    <div class="container mx-auto px-4 py-6 md:py-8">
      <div class="flex flex-col items-center justify-center space-y-3 md:space-y-4">

        <p class="text-steel-600 text-xs md:text-sm text-center">
          © {{ añoActual }} María José. Todos los derechos reservados.
        </p>
        
        <div class="flex space-x-4 md:space-x-6">
          <a href="https://linkedin.com/in/tu-perfil" target="_blank"
            class="text-steel-500 hover:text-steel-700 transition-colors text-sm md:text-base">
            LinkedIn
          </a>
          <a href="mailto:tu@email.com"
            class="text-steel-500 hover:text-steel-700 transition-colors text-sm md:text-base">
            Email
          </a>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
const añoActual = computed(() => new Date().getFullYear())
</script>

<style scoped></style>
