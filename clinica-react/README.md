# 🏥 Clínica ESP — Plataforma de Salud Holística
**React** · **Vite** · **Tailwind CSS** · **React Router** · **PostCSS**

🌟 **¿Qué es este proyecto?**
Este proyecto es la migración y modernización de la plataforma web de **Clínica ESP**. Originalmente construido con HTML/CSS/JS tradicional, ha sido transformado en una **Single Page Application (SPA)** robusta y escalable utilizando el ecosistema de React.

El objetivo es ofrecer una experiencia de usuario premium, facilitando el acceso a servicios de salud preventiva, consultas especializadas y gestión de bienestar holístico en complejos residenciales.

✨ **Características Principales**
*   🚀 **Navegación Fluida**: Implementación de `react-router-dom` para transiciones instantáneas sin recargas de página.
*   📱 **Arquitectura Responsive**: Diseño adaptado al 100% para dispositivos móviles y tablets utilizando Tailwind CSS.
*   🎨 **Aesthetics Premium**: Interfaz moderna con animaciones de entrada, efectos de hover avanzados y una paleta de colores curada.
*   📅 **Gestión de Citas**: Sistema intuitivo para la reserva de citas médicas.
*   📖 **Blog Informativo**: Sección dedicada a la salud y bienestar con artículos detallados.
*   📦 **Assets Optimizados**: Manejo eficiente de imágenes y videos en alta resolución para asegurar una carga rápida.

🛠️ **Stack Tecnológico**
| Capa | Tecnologías |
| :--- | :--- |
| **Framework** | React 18 |
| **Build Tool** | Vite |
| **Estilos** | CSS Vanilla + Tailwind CSS |
| **Enrutamiento** | React Router Dom |
| **Post-procesamiento**| PostCSS + Autoprefixer |
| **Media** | Assets locales (WebP, MP4) |

🚀 **Instalación y Uso Local**
Sigue estos pasos para poner el proyecto en marcha:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/sebastianvasquezechavarria1234/clinica-esp.git
   cd clinica-esp/clinica-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Lanzar el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`.

📁 **Estructura del Proyecto**
```text
├── src/
│   ├── assets/       # Imágenes, iconos y videos
│   ├── components/   # Componentes reutilizables (Header, Footer, Layout)
│   ├── pages/        # Vistas principales (Home, About, Services, Blog, Booking)
│   ├── App.jsx       # Configuración de rutas y estructura principal
│   ├── index.css     # Sistema de diseño global y directivas de Tailwind
│   └── main.jsx      # Punto de entrada de la aplicación
├── tailwind.config.js # Configuración personalizada de Tailwind
├── postcss.config.js  # Plugins de PostCSS (compatibilidad v4)
└── package.json       # Scripts y dependencias
```

📅 **Próximas Mejoras**
*   Conexión con API Backend para persistencia de citas.
*   Implementación de estados globales con Context API o Redux.
*   Pruebas unitarias y de integración con Vitest.

---
**Hecho por Sebastian Vasquez Echavarria**
