<template>
  <footer class="bg-gray-50 border-t border-gray-200 mt-auto">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col items-center justify-center space-y-4">
        <p class="text-gray-600 text-sm">
          © {{ currentYear }} María José. Todos los derechos reservados.
        </p>
        <div class="flex space-x-6">
          <!-- Enlaces sociales - por desarrollar -->
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

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
</style>
