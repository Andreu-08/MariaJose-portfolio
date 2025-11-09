<template>
  <div 
    v-motion
    :initial="{ opacity: 0, y: -20 }"
    :visible="{ opacity: 1, y: 0 }"
    :delay="100"
    class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-steel-100/80 backdrop-blur-sm border border-steel-200 transition-all duration-300 hover:bg-steel-200/80 hover:scale-105"
  >
    <!-- Logo SVG personalizado -->
    <img 
      src="@/assets/logos/logo-gota-boton.svg" 
      alt="Icono gota" 
      class="w-[26px] h-[26px]"
    />
    
    <!-- Texto del badge -->
    <span class="text-sm font-medium text-steel-700">
      {{ texto }}
    </span>
  </div>
</template>

<script setup>

defineProps({
  texto: {
    type: String,
    required: true
  }
})
</script>
