<template>
  <nav class="py-4">
    <div class="flex items-center justify-between">
      <!-- Logo / Nombre -->
      <router-link to="/" class="text-2xl font-bold text-gray-800 hover:text-teal-600 transition-colors">
        María José
      </router-link>

      <!-- Menú de navegación -->
      <ul class="flex space-x-8">
        <li>
          <router-link 
            to="/" 
            class="text-gray-600 hover:text-teal-600 transition-colors"
            active-class="text-teal-600 font-semibold"
          >
            Inicio
          </router-link>
        </li>
        <li>
          <router-link 
            to="/sobre-mi" 
            class="text-gray-600 hover:text-teal-600 transition-colors"
            active-class="text-teal-600 font-semibold"
          >
            Sobre Mí
          </router-link>
        </li>
        <li>
          <router-link 
            to="/proyectos" 
            class="text-gray-600 hover:text-teal-600 transition-colors"
            active-class="text-teal-600 font-semibold"
          >
            Proyectos
          </router-link>
        </li>
        <li>
          <router-link 
            to="/articulos" 
            class="text-gray-600 hover:text-teal-600 transition-colors"
            active-class="text-teal-600 font-semibold"
          >
            Artículos
          </router-link>
        </li>
        <li>
          <router-link 
            to="/formacion" 
            class="text-gray-600 hover:text-teal-600 transition-colors"
            active-class="text-teal-600 font-semibold"
          >
            Formación
          </router-link>
        </li>
        <li>
          <router-link 
            to="/contacto" 
            class="text-gray-600 hover:text-teal-600 transition-colors"
            active-class="text-teal-600 font-semibold"
          >
            Contacto
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// Componente de navegación
</script>

<style scoped>
</style>
