<template>

  <!-- ===== SECCIÓN INICIO ===== -->
  <section 
    id="inicio" 
    class="relative min-h-screen flex items-center scroll-mt-20 fondo-inicio py-24 md:py-0"
  >
    <!-- ===== Contenido principal ===== -->
    <div class="relative z-10 w-full h-full flex items-center justify-center">
      <div class="container mx-auto px-6">
        <!-- Grid responsive: 1 columna en móvil, 2 en desktop -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-2 items-center">
          
          <!-- ===== COLUMNA IZQUIERDA: Contenido de texto ===== -->
          <div class="lg:col-span-7 space-y-5 order-1">
            <!-- Badge de especialidad -->
            <SpecialtyBadge />
            
            <!-- Título principal -->
            <HeroTitle />
            
            <!-- Lista de palabras clave -->
            <KeywordsList />
            
            <!-- Botones de CTA -->
            <CTAButtons />
          </div>

          <!-- ===== COLUMNA DERECHA: Imagen ===== -->
          <div 
            class="lg:col-span-5 relative flex justify-center items-end h-[400px] md:h-[500px] lg:h-[750px] order-2"
          >
            <!-- Contenedor con máscara de gradiente -->
            <div class="relative h-full w-full max-w-md lg:max-w-none">
              <!-- Imagen de la persona -->
              <img 
                :src="imagenPerfil" 
                :alt="`${perfil.nombre} - Técnica en tratamiento de agua`"
                class="h-full w-auto mx-auto object-contain object-bottom"
                style="filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));"
                @error="imagenNoEncontrada = true"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { perfil } from '@/data/perfil.js'
import SpecialtyBadge from '@/components/ui/SpecialtyBadge.vue'
import HeroTitle from '@/components/ui/HeroTitle.vue'
import KeywordsList from '@/components/ui/KeywordsList.vue'
import CTAButtons from '@/components/ui/CTAButtons.vue'
import imagenPerfil from '@/assets/images/perfil-inicio2.png'

// Control de error de carga de imagen
const imagenNoEncontrada = ref(false)
</script>

<style scoped>
/**
 * Fondo de la sección inicio
 */
.fondo-inicio {
  background-image: url('@/assets/images/fondo-inicio.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
