<template>

  <!-- ===== SECCIÓN INICIO ===== -->

  <!-- TODO: Ajsutar el modo mvl -->

  <section 
    id="inicio" 
    class="relative  flex items-center scroll-mt-20 fondo-inicio"
  >
    <!-- ===== Contenido principal ===== -->
    <div class="relative z-10 w-full h-full flex items-center justify-center">
      <div class="container mx-auto px-6 ">
        <!-- Grid de dos columnas: texto más ancho, imagen fija -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-center">
          
          <div class="lg:col-span-7 space-y-5">
            <!-- Badge de especialidad -->
            <SpecialtyBadge 
              texto="Innovación en Tratamiento de Agua"
            />
            
            <!-- Título principal -->
            <HeroTitle />
            
            <!-- Lista de palabras clave -->
            <KeywordsList :palabras-clave="palabrasClave" />
            
            <!-- Botones de CTA -->
            <CTAButtons url-linkedin="https://linkedin.com" />
          </div>

          <!-- ===== COLUMNA DERECHA: Imagen (5 columnas = 42%) ===== -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="300"
            class="lg:col-span-5 relative hidden lg:flex justify-center items-end h-[750px]"
          >
            <!-- Contenedor con máscara de gradiente -->
            <div class="relative h-full">
              <!-- Imagen de la persona -->
              <img 
                src="@/assets/images/perfil.png" 
                alt="María José Muñoz Aroca - Técnica en tratamiento de agua"
                class="h-full w-auto object-contain object-bottom"
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
import SpecialtyBadge from '@/components/ui/SpecialtyBadge.vue'
import HeroTitle from '@/components/ui/HeroTitle.vue'
import KeywordsList from '@/components/ui/KeywordsList.vue'
import CTAButtons from '@/components/ui/CTAButtons.vue'

// Control de error de carga de imagen
const imagenNoEncontrada = ref(false)

// Palabras clave que representan las áreas de especialización
const palabrasClave = [
  'Sostenibilidad',
  'Innovación',
  'Automatización',
  'Análisis de Datos',
]
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
