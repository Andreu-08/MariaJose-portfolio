<template>
  <!-- ===== SECCIÓN SOBRE MÍ ===== -->
  <section 
    ref="seccion"
    id="sobre-mi" 
    class="relative flex md:min-h-screen items-start md:items-center justify-center px-8 md:px-4 scroll-mt-20 bg-steel-200 pt-24 pb-12 md:py-20 overflow-hidden"
  >
    <div class="container mx-auto max-w-4xl">
      <div class="relative z-10">
        <!-- Título con efecto máquina de escribir -->
        <div class="flex items-center gap-3 md:gap-4 mb-10 md:mb-12">
          <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold text-steel-900">
            <span ref="tituloMaquina"></span>
            <span 
              ref="cursorTitulo"
              class="inline-block w-0.5 md:w-1 h-8 md:h-12 lg:h-16 bg-steel-900 ml-1 animate-pulse"
              style="display: none;"
            ></span>
          </h2>
          <div class="flex-1 h-0.5 md:h-1 bg-gradient-to-r from-steel-500 to-transparent rounded-full"></div>
        </div>

        <!-- Contenedor de párrafos -->
        <div class="space-y-8 md:space-y-8">
          <div 
            v-for="(parrafo, index) in parrafos" 
            :key="index"
            :ref="el => parrafosRefs[index] = el"
            :class="[
              'text-sm md:text-lg lg:text-xl text-steel-800 leading-relaxed opacity-0 text-justify',
              index > 0 ? 'pl-4 md:pl-8 border-l-2 md:border-l-4' : '',
              index === 1 ? 'border-steel-500' : '',
              index === 2 ? 'border-steel-600 font-medium' : ''
            ]"
          >
            {{ parrafo }}
          </div>
        </div>

        <!-- Decoración de fondo animada -->
        <div class="absolute -top-32 -right-32 w-96 h-96 bg-steel-700/30 rounded-full blur-3xl -z-10 animate-float"></div>
        <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-steel-800/20 rounded-full blur-3xl -z-10 animate-float-delayed"></div>
        <div class="absolute top-1/4 -left-40 w-80 h-80 bg-steel-600/25 rounded-full blur-3xl -z-10 animate-float-alt"></div>
        <div class="absolute bottom-1/3 -right-40 w-80 h-80 bg-steel-700/25 rounded-full blur-3xl -z-10 animate-float-alt-delayed"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { perfil } from '@/data/perfil.js'

const { titulo, parrafo: parrafos } = perfil.sobreMi

const seccion = ref(null)
const tituloMaquina = ref(null)
const cursorTitulo = ref(null)
const parrafosRefs = ref([])

let animacionIniciada = false
let observer = null

const animaciones = [
  { translateY: [30, 0], delay: 200 },
  { translateX: [-50, 0], delay: 700 },
  { scale: [0.95, 1], filter: ['blur(5px)', 'blur(0px)'], delay: 1200, duration: 1200 }
]

onMounted(async () => {
  const anime = await import('https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js')

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animacionIniciada) {
          animacionIniciada = true
          iniciarAnimaciones(anime)
        }
      })
    },
    { threshold: 0.3 }
  )

  if (seccion.value) {
    observer.observe(seccion.value)
  }
})

onUnmounted(() => {
  if (observer && seccion.value) {
    observer.unobserve(seccion.value)
  }
})

const iniciarAnimaciones = (anime) => {
  let index = 0
  
  if (cursorTitulo.value) {
    cursorTitulo.value.style.display = 'inline-block'
  }

  const escribirTitulo = () => {
    if (index < titulo.length) {
      tituloMaquina.value.textContent += titulo.charAt(index)
      index++
      setTimeout(escribirTitulo, 100)
    } else {
      setTimeout(() => {
        if (cursorTitulo.value) {
          cursorTitulo.value.style.display = 'none'
          animarParrafos(anime)
        }
      }, 300)
    }
  }

  setTimeout(escribirTitulo, 300)
}

const animarParrafos = (anime) => {
  parrafosRefs.value.forEach((parrafo, index) => {
    anime.default({
      targets: parrafo,
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
      ...animaciones[index]
    })
  })
}
</script>

<style scoped>
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(100px, -80px) scale(1.2);
  }
  50% {
    transform: translate(-80px, 70px) scale(0.85);
  }
  75% {
    transform: translate(90px, 60px) scale(1.15);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(-120px, 90px) scale(1.25);
  }
  50% {
    transform: translate(100px, -70px) scale(0.8);
  }
  75% {
    transform: translate(-90px, -80px) scale(1.1);
  }
}

@keyframes float-alt {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(-70px, 100px) scale(1.15);
  }
  50% {
    transform: translate(80px, -60px) scale(0.9);
  }
  75% {
    transform: translate(-100px, -50px) scale(1.2);
  }
}

@keyframes float-alt-delayed {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(90px, 80px) scale(1.1);
  }
  50% {
    transform: translate(-110px, -90px) scale(0.85);
  }
  75% {
    transform: translate(70px, -70px) scale(1.18);
  }
}

.animate-float {
  animation: float 10s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 12s ease-in-out infinite;
  animation-delay: 1.5s;
}

.animate-float-alt {
  animation: float-alt 11s ease-in-out infinite;
  animation-delay: 0.5s;
}

.animate-float-alt-delayed {
  animation: float-alt-delayed 13s ease-in-out infinite;
  animation-delay: 2.5s;
}
</style>