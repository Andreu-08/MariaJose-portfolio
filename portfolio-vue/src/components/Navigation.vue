<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0">
            <h1 class="text-xl font-bold">Portfolio Mary</h1>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link to="/" class="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Inicio</router-link>
              <router-link to="/about" class="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Sobre mí</router-link>
              <router-link to="/projects" class="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Proyectos</router-link>
              <router-link to="/skills" class="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Habilidades</router-link>
              <router-link to="/contact" class="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contacto</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
</style>