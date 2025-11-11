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
    especialidad: 'Porfolio Personal',
    
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
      'Desde siempre me ha inspirado la idea de cuidar lo que nos conecta a todos: el agua. Soy técnica en tratamiento y calidad del agua, con formación en Ingeniería Química, Máster en Ingeniería Ambiental y especialización en agua potable. A lo largo de mi trayectoria he aprendido que detrás de cada análisis, cada sistema y cada decisión, hay un impacto real en la salud de las personas y en el equilibrio del entorno.',
      'Me apasiona formar parte de equipos donde se comparten conocimientos y se trabaja con un objetivo común: mejorar cada día. Me gusta aprender, proponer y buscar soluciones que hagan que los procesos sean más eficientes y sostenibles, tanto en campo como en la gestión.',
      'Defiendo la necesidad de cuidar el agua y promover un modelo de gestión más sostenible y comprometido con el entorno. La innovación, la cooperación y la comunicación son, para mí, las herramientas que permiten transformar la manera en que entendemos y protegemos este recurso esencial.'
    ],
  }
}
