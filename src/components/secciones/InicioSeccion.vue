<template>

  <!-- ===== SECCIÓN INICIO ===== -->
  <section id="inicio" class="relative min-h-screen flex items-center scroll-mt-20 fondo-inicio py-24 md:py-0">
    <div class="relative z-10 w-full h-full flex items-center justify-center">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-2 items-center">

          <!-- ===== COLUMNA IZQUIERDA: Contenido de texto ===== -->
          <div class="lg:col-span-7 space-y-5 order-1">
            <div ref="badge" style="opacity: 0; transform: scale(0.8) rotate(-5deg); filter: blur(10px);">
              <SpecialtyBadge />
            </div>
            <div ref="title" style="opacity: 0; transform: scale(0.9) translateY(30px); filter: blur(8px);">
              <HeroTitle />
            </div>
            <div ref="keywords" style="opacity: 0; transform: scale(0.8); filter: blur(10px);">
              <KeywordsList />
            </div>
            <div ref="buttons" style="opacity: 0; transform: scale(0.85) rotate(3deg); filter: blur(10px);">
              <CTAButtons />
            </div>
          </div>

          <!-- ===== COLUMNA DERECHA: Imagen con efecto 3D ===== -->
          <div ref="imagen" class="lg:col-span-5 relative flex justify-center items-end h-[400px] md:h-[500px] lg:h-[750px] order-2" style="opacity: 0; transform: scale(0.7) rotate(10deg); filter: blur(15px);">
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
import { ref, onMounted } from 'vue'
import { perfil } from '@/data/perfil.js'
import SpecialtyBadge from '@/components/ui/SpecialtyBadge.vue'
import HeroTitle from '@/components/ui/HeroTitle.vue'
import KeywordsList from '@/components/ui/KeywordsList.vue'
import CTAButtons from '@/components/ui/CTAButtons.vue'
import Imagen3D from '@/components/ui/Imagen3D.vue'
import imagenPerfil from '@/assets/images/perfil-inicio2.png'

const imagenNoEncontrada = ref(false)

// Refs para los elementos a animar
const badge = ref(null)
const title = ref(null)
const keywords = ref(null)
const buttons = ref(null)
const imagen = ref(null)

onMounted(async () => {
  // Importar animejs desde CDN
  const anime = await import('https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js')
  
  anime.default.timeline({
    easing: 'easeOutElastic(1, .6)'
  })
  .add({
    targets: badge.value,
    opacity: [0, 1],
    scale: [0.8, 1],
    rotate: ['-5deg', '0deg'],
    filter: ['blur(10px)', 'blur(0px)'],
    duration: 1400,
    delay: 300
  })
  .add({
    targets: title.value,
    opacity: [0, 1],
    scale: [0.9, 1],
    translateY: [30, 0],
    filter: ['blur(8px)', 'blur(0px)'],
    duration: 1400,
    easing: 'easeOutExpo'
  }, '-=1000')
  .add({
    targets: keywords.value,
    opacity: [0, 1],
    scale: [0.8, 1],
    filter: ['blur(10px)', 'blur(0px)'],
    duration: 1400,
    easing: 'easeOutBack'
  }, '-=1000')
  .add({
    targets: buttons.value,
    opacity: [0, 1],
    scale: [0.85, 1],
    rotate: ['3deg', '0deg'],
    filter: ['blur(10px)', 'blur(0px)'],
    duration: 1400,
    easing: 'easeOutElastic(1, .5)'
  }, '-=1000')
  
  anime.default({
    targets: imagen.value,
    opacity: [0, 1],
    scale: [0.7, 1],
    rotate: ['10deg', '0deg'],
    filter: ['blur(15px)', 'blur(0px)'],
    duration: 1800,
    delay: 500,
    easing: 'easeOutElastic(1, .4)'
  })
})
</script>

<style scoped>
.fondo-inicio {
  background-image: url('@/assets/images/fondo-inicio.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
