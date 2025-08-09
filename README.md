# Portfolio - Matías Candella

Este es un portfolio personal desarrollado con [Astro](https://astro.build/), diseñado para mostrar proyectos, stack tecnológico y experiencia profesional. El sitio soporta múltiples idiomas (español e inglés) y está optimizado para rendimiento y SEO.

## Características

- **Multilenguaje:** Español e Inglés, con detección automática y cambio desde el menú.
- **SSR y rutas dinámicas:** Utiliza rutas dinámicas `[lang]` para el contenido multilenguaje.
- **Diseño responsive:** Adaptado para dispositivos móviles y escritorio.
- **Animaciones:** Animaciones suaves con [AOS](https://michalsnik.github.io/aos/).
- **Optimización:** Imágenes optimizadas, carga diferida y estructura modular.
- **Tecnologías destacadas:** Astro, TypeScript, TailwindCSS, y más.

## Estructura de carpetas

```
src/
  components/      # Componentes Astro reutilizables
  data/            # Contenido y configuración por idioma
  icons/           # Iconos y componentes SVG
  layouts/         # Layout principal
  pages/           # Páginas, incluyendo rutas dinámicas [lang]
  styles/          # Estilos globales
public/            # Imágenes y archivos estáticos (SVG, PDF, etc.)
```

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/maticandella/portfolio-dev.git
   cd portfolio-dev
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

## Personalización

- Edita los archivos en `src/data/en.ts` y `src/data/es.ts` para modificar el contenido en cada idioma.
- Agrega tus proyectos y tecnologías en los mismos archivos.
- Los iconos SVG deben estar en `public/icons/` y referenciados como `/icons/nombre.svg`.

## Despliegue

Puedes desplegar el sitio en [Vercel](https://vercel.com/), [Netlify](https://netlify.com/) o cualquier hosting estático compatible.

## Licencia

MIT

---

Desarrollado por [Matías Candella](https://www.linkedin.com/in/matiascandella/)
