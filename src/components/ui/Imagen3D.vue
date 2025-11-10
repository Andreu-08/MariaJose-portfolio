<template>
  <div 
    ref="contenedor"
    class="imagen-3d-wrapper"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @mouseenter="handleMouseEnter"
  >
    <div 
      ref="imagenContenedor"
      class="imagen-3d-contenedor"
    >
      <!-- Imagen principal -->
      <img 
        :src="src"
        :alt="alt"
        class="imagen-3d"
        @error="$emit('error')"
      />
      
      <!-- Capa de brillo dinámico -->
      <div 
        ref="brillo"
        class="imagen-3d-brillo"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'

// ===== PROPS =====
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  intensidad: {
    type: Number,
    default: 10,
    validator: (value) => value >= 0 && value <= 30
  },
  escalaHover: {
    type: Number,
    default: 1.02,
    validator: (value) => value >= 1 && value <= 1.2
  }
})

// ===== EMITS =====
defineEmits(['error'])

// ===== REFERENCIAS DOM =====
const contenedor = ref(null)
const imagenContenedor = ref(null)
const brillo = ref(null)

// ===== ESTADO =====
let animationFrameId = null

// ===== CONSTANTES =====
const PERSPECTIVE = 1200
const TRANSITION_ENTER = 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
const TRANSITION_LEAVE = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'

// ===== MÉTODOS PRINCIPALES =====

/**
 * Maneja el movimiento del ratón sobre la imagen
 * Aplica efecto parallax 3D con rotación suave y brillo dinámico
 * 
 * @param {MouseEvent} evento - Evento de movimiento del ratón
 */
const handleMouseMove = (evento) => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }

  animationFrameId = requestAnimationFrame(() => {
    if (!contenedor.value || !imagenContenedor.value || !brillo.value) return

    const rect = contenedor.value.getBoundingClientRect()
    
    // Normalizar posición del ratón (-1 a 1, centro en 0,0)
    const x = ((evento.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((evento.clientY - rect.top) / rect.height) * 2 - 1
    
    // Calcular rotaciones (Y invertido para movimiento natural)
    const rotacionY = x * props.intensidad
    const rotacionX = -y * props.intensidad
    
    // Aplicar transformación 3D optimizada
    imagenContenedor.value.style.transform = 
      `perspective(${PERSPECTIVE}px) ` +
      `rotateX(${rotacionX}deg) ` +
      `rotateY(${rotacionY}deg) ` +
      `scale3d(${props.escalaHover}, ${props.escalaHover}, ${props.escalaHover}) ` +
      `translateZ(20px)`
    
    // Actualizar brillo siguiendo al ratón
    actualizarBrillo(x, y)
  })
}

/**
 * Resetea la transformación cuando el ratón sale
 */
const handleMouseLeave = () => {
  limpiarAnimacion()
  
  if (!imagenContenedor.value || !brillo.value) return
  
  imagenContenedor.value.style.transition = TRANSITION_LEAVE
  imagenContenedor.value.style.transform = 
    `perspective(${PERSPECTIVE}px) ` +
    `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)`
  
  brillo.value.style.opacity = '0'
}

/**
 * Prepara la transición cuando el ratón entra
 */
const handleMouseEnter = () => {
  if (!imagenContenedor.value) return
  imagenContenedor.value.style.transition = TRANSITION_ENTER
}

// ===== MÉTODOS AUXILIARES =====

/**
 * Actualiza el gradiente de brillo según la posición del ratón
 * 
 * @param {number} x - Posición X normalizada (-1 a 1)
 * @param {number} y - Posición Y normalizada (-1 a 1)
 */
const actualizarBrillo = (x, y) => {
  if (!brillo.value) return
  
  // Convertir coordenadas normalizadas a porcentaje
  const brilloX = (x + 1) * 50
  const brilloY = (y + 1) * 50
  
  brillo.value.style.background = 
    `radial-gradient(` +
      `circle at ${brilloX}% ${brilloY}%, ` +
      `rgba(255, 255, 255, 0.2) 0%, ` +
      `rgba(255, 255, 255, 0.08) 30%, ` +
      `transparent 60%` +
    `)`
  
  brillo.value.style.opacity = '1'
}

/**
 * Limpia la animación pendiente
 */
const limpiarAnimacion = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
}

// ===== LIFECYCLE =====
onUnmounted(() => {
  limpiarAnimacion()
})
</script>

<style scoped>
/* ===== CONTENEDOR PRINCIPAL ===== */
.imagen-3d-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1200px;
  cursor: pointer;
  /* Aceleración por hardware */
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

/* ===== CONTENEDOR DE LA IMAGEN ===== */
.imagen-3d-contenedor {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  will-change: transform;
  /* Anti-aliasing mejorado */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ===== IMAGEN PRINCIPAL ===== */
.imagen-3d {
  width: auto;
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: block;
  object-fit: contain;
  object-position: bottom;
  /* Sombra dinámica mejorada */
  filter: 
    drop-shadow(0 25px 50px rgba(0, 0, 0, 0.12))
    drop-shadow(0 10px 20px rgba(0, 0, 0, 0.08));
  /* Renderizado optimizado */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  /* Suavizado de bordes */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

/* ===== CAPA DE BRILLO DINÁMICO ===== */
.imagen-3d-brillo {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  mix-blend-mode: soft-light;
  z-index: 1;
  border-radius: inherit;
}

/* ===== RESPONSIVE: TABLET Y MÓVIL ===== */
@media (max-width: 1024px) {
  .imagen-3d-wrapper {
    /* Reducir intensidad en tablets */
    perspective: 1000px;
  }
}

@media (max-width: 768px) {
  .imagen-3d-wrapper {
    perspective: none;
    cursor: default;
  }
  
  .imagen-3d-contenedor {
    transform: none !important;
    transition: none !important;
  }
  
  .imagen-3d-brillo {
    display: none;
  }
  
  .imagen-3d {
    /* Sombra estática en móvil */
    filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.1));
  }
}

/* ===== ACCESIBILIDAD: REDUCCIÓN DE MOVIMIENTO ===== */
@media (prefers-reduced-motion: reduce) {
  .imagen-3d-wrapper {
    perspective: none;
  }
  
  .imagen-3d-contenedor {
    transform: none !important;
    transition: none !important;
    will-change: auto;
  }
  
  .imagen-3d-brillo {
    display: none;
  }
}

/* ===== OPTIMIZACIONES DE RENDIMIENTO ===== */
@media (hover: hover) and (pointer: fine) {
  /* Solo habilitar efectos hover en dispositivos con cursor preciso */
  .imagen-3d-wrapper:hover .imagen-3d {
    filter: 
      drop-shadow(0 30px 60px rgba(0, 0, 0, 0.15))
      drop-shadow(0 15px 30px rgba(0, 0, 0, 0.1));
  }
}
</style>
