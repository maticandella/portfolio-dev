import type { SiteConfig, SiteContent } from "./index";
const startYear = 2020;
const yearsExperience = new Date().getFullYear() - startYear;

export const SITE_CONFIG: SiteConfig = {
  title: "Mi Porfolio",
  author: "Matías Candella",
  description:
    "Portfolio de Matías Candella, desarrollador fullstack.",
  lang: "es",
  siteLogo: "/maticandella.webp",
  navLinks: [
    { text: "Proyectos", href: "#projects" },
    { text: "Stack", href: "#stack" },
    { text: "Sobre mí", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/matiascandella/" },
    { text: "Github", href: "https://github.com/maticandella" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://maticandella-portfolio.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Matías Candella",
    specialty: "Desarrollador Fullstack",
    summary: `<span class="text-primary font-semibold">Desarrollador fullstack</span>
    con <span class="text-primary font-semibold"
      >más de 5 años de experiencia</span
    >
    desarrollando soluciones robustas. Tengo una base fuerte en <span
      class="text-primary font-semibold"
      >backend (.NET Core / Node.js, APIs, microservicios)
    </span>
    y una mirada cada vez más integral hacia el <span
      class="text-primary font-semibold">frontend</span
    >. En los últimos años sumé <span class="text-primary font-semibold"
      >Angular</span
    > a mi stack para construir aplicaciones completas, modernas y bien pensadas
    de principio a fin.<br /><br />

    Me gusta diseñar sistemas escalables, y optimizar procesos, pero también <span
      class="text-primary font-semibold"
      >crear interfaces claras, funcionales y accesibles</span
    >. El <span class="text-primary font-semibold">código limpio</span>, la <span
      class="text-primary font-semibold">arquitectura sólida</span
    >
    y el <span class="text-primary font-semibold">impacto real</span>
    son lo que más valoro en cada proyecto.`,
    email: "matiascandella@hotmail.com",
    buttons:  ["Descargar CV", "Contáctame"]
  },
  experience: [
    
  ],
  buttonsProject: ["Leer más", "APIs", "Código", "Demo"],
  projects: [
    {
      name: "Blue Planet",
      summary: "Sitio web desarrollado para una empresa francesa del sector geoespacial. Me ocupé del diseño, estructura y desarrollo completo para comunicar su propuesta de valor, servicios y visión empresarial.",
      linkPreview: "https://www.blueplanet-sat.com/",
      linkSource: "https://github.com/maticandella/bplanet-template",
      image: "/blueplanet.webp",
      technologies: ["Astro", "JavaScript", "Tailwind", "Vercel"] ,
      type: "Proyecto Freelance",
      modal: 
      {
        summary: "Blue Planet es un sitio web que desarrollé para una empresa francesa especializada en soluciones geoespaciales. El objetivo era crear una plataforma que reflejara su propuesta de valor y servicios de manera clara y atractiva. Me encargué de todo el proceso, desde el diseño inicial hasta la implementación final, asegurando que el sitio fuera funcional, estéticamente agradable y optimizado para SEO.",
        text: ["Participo de reuniones, en inglés, con el cliente donde se define la UI de las secciones que integran la web, como así el tipo de información que debe ir en cada una.",
              "Desarrollo el sitio web (one page) corporativo con Astro y JavaScript, aplicando una arquitectura de componentes modular para un sitio estático de alto rendimiento.",
              "Implemento estilos con Tailwind CSS.",
              "Incorporo micro-interacciones y animaciones avanzadas (efecto máquina de escribir, transiciones suaves, Animation On Scroll (AOS)) para enriquecer la UX.",
              "Optimizo la performance usando lazy loading, formatos de imagen WebP y una estructura de carpetas clara.",
              "Potencio el SEO mediante una estructura semántica, metadatos adecuados y configuración de rutas estáticas.",
              "Gestiono dependencias con npm y mantengo el repositorio en GitHub ordenado, con versionado y documentación de configuración."]
      }
    ,
    },
    {
      name: "EditoriApp",
      summary: "Aplicación experimental para gestionar una editorial de libros. Incluye panel administrativo, sistema CRUD y simulación de carrito de compras con backend propio y base de datos relacional.",
      linkPreview: "https://editoriapp.vercel.app/",
      linkSource: "https://github.com/maticandella/EditoriAPP",
      linkApis: "https://editorial-api.vercel.app/api/docs/",
      image: "/editoriapp.webp",
      technologies: ["Angular", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "Vercel"],
      type: "Proyecto Experimental",
      modal: 
      {
        summary: "EditoriApp es una plataforma de gestión editorial pensada para facilitar la creación, organización y seguimiento de libros y autores. Los usuarios pueden explorar novedades, buscar libros por categorías, filtrar por autor y realizar compras de forma sencilla.",
        text: [
          "Diseñé la interfaz con Angular y Tailwind CSS para garantizar una experiencia fluida, moderna y responsive.",
          "Implementé el backend en Node.js con una arquitectura clara y organizada por capas para manejar libros, autores, categorías y pedidos.",
          "Los usuarios pueden navegar por libros destacados, ver detalles, filtrar por género o autor, y añadir productos al carrito.",
          "Desarrollé un sistema de autenticación con JWT para registrar usuarios y permitir la gestión de pedidos.",
          "La app permite a los administradores cargar nuevos libros y autores mediante un panel de control seguro.",
          "Deploy con Vercel, usando variables de entorno y buenas prácticas CI/CD."
        ],
      }
    },
    {
      name: "Tu Momento",
      summary: "Invitación digital personalizada para evento social, diseñada con enfoque moderno, responsive y adaptable a distintos estilos de celebración. Ideal para reutilizar como plantilla freelance.",
      linkPreview: "https://tumomento.vercel.app/",
      linkSource: "https://github.com/maticandella/Templates",
      image: "/florfest.webp",
      technologies: ["Astro", "Tailwind", "Vercel"],
      type: "Proyecto Freelance",
      modal: {
        summary: "Tu Momento es una invitación digital personalizada desarrollada para un evento real. El sitio fue utilizado por los invitados para conocer los detalles de la celebración y confirmar su asistencia mediante formularios de Google.",
  text: [
    "Desarrollé un sitio one-page moderno y responsive utilizando Astro y Tailwind CSS.",
    "El diseño fue completamente personalizado para reflejar el estilo del evento, con una estética clara, elegante y minimalista.",
    "Incluí secciones informativas como fecha, lugar, mapa interactivo, cuenta regresiva y detalles especiales.",
    "Integré un formulario de confirmación de asistencia mediante Google Forms, permitiendo a los invitados registrar su presencia fácilmente.",
    "Optimicé la performance y tiempos de carga para asegurar una experiencia fluida en dispositivos móviles.",
    "El sitio fue desplegado en Vercel y utilizado activamente por los invitados antes del evento."
  ],
      }
    },
  ],
  stack: [],
  about: {
    cards: [
    {
      title: "Experiencia",
      subtitle: `+${yearsExperience} años en la industria`,
      description:
        "He trabajado como desarrollador en empresas del sector automotriz y consultoras, creando soluciones escalables, integraciones y APIs robustas. Cuento con experiencia participando en equipos colaborativos y enfocados en calidad de código.",
        iconName: "portfolio"
    },
    {
      title: "Educación",
      subtitle: "Ingeniero en Sistemas",
      description:
        "Me he graduado en septiembre de 2024 de Ingeniero en Sistemas, presentando como trabajo final un sistema de cobranzas orientado a escuelas (.NET Core + Angular)."
        , iconName: "hat"
      },
    {
      title: "Pensamiento Crítico",
      subtitle: "Análisis estratégico y objetivo",
      description:
        "Capacidad para evaluar información de manera lógica y tomar decisiones fundamentadas que aportan valor a proyectos y equipos."
      ,iconName: "brain"
      },
    {
      title: "Cultura Colaborativa",
      subtitle: "Actitud positiva y motivadora",
      description:
        "Creo que trabajar con pasión y buen humor impulsa la creatividad y fortalece los equipos, generando un entorno de colaboración más humano y productivo."
      ,iconName: "happy"
      }
  ]
  },
  sectionTitles: {
    projects: "Proyectos",
    stack: "Stack",
    about: "Sobre mí",
  },
};

