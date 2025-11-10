/**
 * Datos del perfil
 */

export const perfil = {
  // Información personal
  nombre: 'Mª José Muñoz Aroca',
  
  // Redes sociales
  linkedin: 'https://www.linkedin.com/in/mª-josé-muñoz-aroca-75151716b/',
  
  // Sección Hero/Inicio
  hero: {
    // Badge de especialidad
    especialidad: 'Innovación en Tratamiento de Agua',
    
    // Título principal (array de líneas)
    titulo: [
      { texto: 'Técnica en', gradiente: false },
      { texto: 'tratamiento y', gradiente: true },
      { texto: 'calidad del agua', gradiente: true }
    ],
    
    // Palabras clave
    palabrasClave: [
      'Sostenibilidad',
      'Innovación',
      'Automatización',
      'Análisis de Datos'
    ],
    
    // Imagen de perfil
    imagenPerfil: '@/assets/images/perfil-inicio2.png',
  },

  // Sección Sobre Mí
  sobreMi: {
    titulo: 'Sobre Mí',
    parrafo: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    ],
  }
}
