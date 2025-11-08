# Portfolio Vue Project

Este es un proyecto de portafolio desarrollado con Vue.js y Tailwind CSS. La estructura del proyecto está diseñada para ser simple y fácil de expandir, permitiendo el desarrollo gradual de cada vista.

## Estructura del Proyecto

```
portfolio-vue
├── src
│   ├── App.vue                # Componente raíz de la aplicación
│   ├── main.js                # Punto de entrada de la aplicación
│   ├── assets
│   │   └── styles
│   │       └── main.css       # Estilos CSS globales
│   ├── components
│   │   ├── Header.vue         # Componente del encabezado
│   │   ├── Footer.vue         # Componente del pie de página
│   │   └── Navigation.vue      # Componente de navegación
│   ├── views
│   │   ├── Home.vue           # Vista de inicio
│   │   ├── About.vue          # Vista "Sobre mí"
│   │   ├── Projects.vue       # Vista de proyectos
│   │   ├── Skills.vue         # Vista de habilidades
│   │   └── Contact.vue        # Vista de contacto
│   ├── router
│   │   └── index.js           # Configuración de rutas
│   └── composables
│       └── useTheme.js        # Lógica de tema visual
├── public
│   └── favicon.ico            # Ícono de la aplicación
├── index.html                 # Plantilla HTML principal
├── package.json               # Configuración del proyecto para npm
├── vite.config.js             # Configuración de Vite
├── tailwind.config.js         # Configuración de Tailwind CSS
├── postcss.config.js          # Configuración de PostCSS
└── README.md                  # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <url-del-repositorio>
   ```

2. Navega al directorio del proyecto:
   ```
   cd portfolio-vue
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución

Para iniciar el servidor de desarrollo, ejecuta:
```
npm run dev
```

Abre tu navegador y visita `http://localhost:3000` para ver tu portafolio en acción.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, siéntete libre de abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.