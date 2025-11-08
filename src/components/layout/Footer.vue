<template>
  <!-- Pie de página con información de copyright y enlaces sociales -->
  <footer class="bg-gray-50 border-t border-gray-200 mt-auto">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col items-center justify-center space-y-4">
        
        <!-- Texto de copyright con año dinámico -->
        <p class="text-gray-600 text-sm">
          © {{ añoActual }} María José. Todos los derechos reservados.
        </p>
        
        <!-- Enlaces a redes sociales -->
        <div class="flex space-x-6">
          <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors">
            LinkedIn
          </a>
          <a href="#" class="text-gray-500 hover:text-teal-600 transition-colors">
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

<style scoped>
</style>
