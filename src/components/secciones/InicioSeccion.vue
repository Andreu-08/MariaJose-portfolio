<template>

  <!-- ===== SECCIÓN INICIO ===== -->
  <section id="inicio" class="relative min-h-screen flex items-center scroll-mt-20 fondo-inicio py-24 md:py-0">
    <div class="relative z-10 w-full h-full flex items-center justify-center">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-2 items-center">

          <!-- ===== COLUMNA IZQUIERDA: Contenido de texto ===== -->
          <div class="lg:col-span-7 space-y-5 order-1">
            <SpecialtyBadge />
            <HeroTitle />
            <KeywordsList />
            <CTAButtons />
          </div>

          <!-- ===== COLUMNA DERECHA: Imagen con efecto 3D ===== -->
          <div class="lg:col-span-5 relative flex justify-center items-end h-[400px] md:h-[500px] lg:h-[750px] order-2">
            <Imagen3D 
              :src="imagenPerfil"
              :alt="`${perfil.nombre} - Técnica en tratamiento de agua`"
              :intensidad="12"
              :escala-hover="1.03"
              @error="imagenNoEncontrada = true"
            />
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
import Imagen3D from '@/components/ui/Imagen3D.vue'
import imagenPerfil from '@/assets/images/perfil-inicio2.png'

const imagenNoEncontrada = ref(false)
</script>

<style scoped>
.fondo-inicio {
  background-image: url('@/assets/images/fondo-inicio.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
