<script setup>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-linear-to-br from-teal-50 via-white to-green-50">
    <Header />
    
    <main class="flex-1">
      <router-view />
    </main>
    
    <Footer />
  </div>
</template>

<style scoped>
</style>
