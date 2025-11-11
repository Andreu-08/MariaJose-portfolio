<template>

  <!-- ===== SECCIÓN INICIO ===== -->
  <section id="inicio" class="relative min-h-screen flex items-center scroll-mt-20 fondo-inicio py-24 md:py-0">
    <div class="relative z-10 w-full h-full flex items-center justify-center">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-2 items-center">

          <!-- ===== COLUMNA IZQUIERDA: Contenido de texto ===== -->
          <div class="lg:col-span-7 space-y-5 order-1">
            <div v-for="(item, index) in elementos" :key="index" :ref="el => elementRefs[index] = el" :style="item.style">
              <component :is="item.component" />
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
const imagen = ref(null)
const elementRefs = ref([])

const elementos = [
  { component: SpecialtyBadge, style: 'opacity: 0; transform: scale(0.8) rotate(-5deg); filter: blur(10px);' },
  { component: HeroTitle, style: 'opacity: 0; transform: scale(0.9) translateY(30px); filter: blur(8px);' },
  { component: KeywordsList, style: 'opacity: 0; transform: scale(0.8); filter: blur(10px);' },
  { component: CTAButtons, style: 'opacity: 0; transform: scale(0.85) rotate(3deg); filter: blur(10px);' }
]

const animaciones = [
  { scale: [0.8, 1], rotate: ['-5deg', '0deg'], filter: ['blur(10px)', 'blur(0px)'], easing: 'easeOutElastic(1, .6)' },
  { scale: [0.9, 1], translateY: [30, 0], filter: ['blur(8px)', 'blur(0px)'], easing: 'easeOutExpo' },
  { scale: [0.8, 1], filter: ['blur(10px)', 'blur(0px)'], easing: 'easeOutBack' },
  { scale: [0.85, 1], rotate: ['3deg', '0deg'], filter: ['blur(10px)', 'blur(0px)'], easing: 'easeOutElastic(1, .5)' }
]

onMounted(async () => {
  const anime = await import('https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js')
  
  const timeline = anime.default.timeline()
  
  animaciones.forEach((anim, index) => {
    timeline.add({
      targets: elementRefs.value[index],
      opacity: [0, 1],
      duration: 1400,
      delay: index === 0 ? 300 : 0,
      ...anim
    }, index === 0 ? 0 : '-=1000')
  })
  
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
