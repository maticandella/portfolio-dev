import type { SiteConfig, SiteContent } from "./index";
const startYear = 2020;
const yearsExperience = new Date().getFullYear() - startYear;

export const SITE_CONFIG: SiteConfig = {
  title: "My Portfolio",
  author: "Matías Candella",
  description: "Portfolio of Matías Candella, fullstack developer.",
  lang: "en",
  siteLogo: "/maticandella.webp",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "Stack", href: "#stack" },
    { text: "About me", href: "#about" },
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
    specialty: "Fullstack Developer",
    summary: `
  <span class="text-primary font-semibold">Fullstack developer</span>
  with <span class="text-primary font-semibold">over 5 years of experience</span>
  building robust solutions. I have a strong background in
  <span class="text-primary font-semibold">
    backend (.NET Core / Node.js, APIs, microservices)
  </span>
  and a growing focus on the <span class="text-primary font-semibold">frontend</span>.
  In recent years, I’ve added <span class="text-primary font-semibold">Angular</span>
  to my stack to build complete, modern, and well-thought-out applications from end to end.
  <br /><br />
  I enjoy designing scalable systems and optimizing processes, but also
  <span class="text-primary font-semibold">
    creating clear, functional, and accessible interfaces.
  </span>
  <span class="text-primary font-semibold">Clean code</span>,
  <span class="text-primary font-semibold">solid architecture</span>,
  and <span class="text-primary font-semibold">real impact</span>
  are the things I value most in every project.
`,
    email: "matiascandella@hotmail.com",
    buttons:  ["", "Contact Me"]
  },
  experience: [
    // Still commented out
  ],
  buttonsProject: ["Read more", "APIs", "Code", "Demo"],
  projects: [
    {
      name: "Blue Planet",
      summary:
        "Website developed for a French company in the geospatial sector. I was responsible for the design, structure, and full development to communicate their value proposition, services, and business vision.",
      linkPreview: "https://www.blueplanet-sat.com/",
      linkSource: "https://github.com/maticandella/bplanet-template",
      image: "/blueplanet.webp",
      technologies: ["Astro", "JavaScript", "Tailwind", "Vercel"],
      type: "Freelance Project",
      modal: {
        summary:
          "Blue Planet is a website I developed for a French company specializing in geospatial solutions. The goal was to create a platform that clearly and attractively showcased their value proposition and services. I handled the entire process, from initial design to final implementation, ensuring the site was functional, visually appealing, and SEO-optimized.",
        text: [
          "I participate in meetings, in English, with the client to define the UI of each section and the type of content that should go in each one.",
          "I develop the one-page corporate website using Astro and JavaScript, applying a modular component architecture for a high-performance static site.",
          "I implement styles using Tailwind CSS.",
          "I incorporate micro-interactions and advanced animations (typewriter effect, smooth transitions, Animation On Scroll (AOS)) to enhance the UX.",
          "I optimize performance using lazy loading, WebP image formats, and a clean folder structure.",
          "I improve SEO through semantic structure, proper metadata, and static route configuration.",
          "I manage dependencies with npm and keep the GitHub repository well-organized, with version control and configuration documentation."
        ]
      }
    },
    {
      name: "EditoriApp",
      summary:
        "Experimental application to manage a book publishing house. Includes an admin panel, full CRUD system, and shopping cart simulation with custom backend and relational database.",
      linkPreview: "https://editoriapp.vercel.app/",
      linkSource: "https://github.com/maticandella/EditoriAPP",
      linkApis: "https://editorial-api.vercel.app/api/docs/",
      image: "/editoriapp.webp",
      technologies: ["Angular", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "Vercel"],
      type: "Experimental Project",
      modal: {
        summary: "EditoriApp is a publishing management platform designed to facilitate the creation, organization, and tracking of books and authors. Users can explore new releases, search for books by category, filter by author, and easily make purchases.",
        text: [
          "I designed the interface using Angular and Tailwind CSS to ensure a smooth, modern, and responsive experience.",
          "I implemented the backend with Node.js using a clean, layered architecture to manage books, authors, categories, and orders.",
          "Users can browse featured books, view details, filter by genre or author, and add products to the shopping cart.",
          "I developed an authentication system with JWT to allow user registration and enable order management.",
          "The app includes an admin panel for uploading new books and authors in a secure environment.",
          "The project is deployed on Vercel, using environment variables and CI/CD best practices."
        ],
      }
    },
    {
  name: "School Management System",
  summary: "Web application developed as a final degree project for the administrative management of a high school. Includes dashboard, collections management, students, fees, and daily cash transactions.",
  type: "Freelance Project",
  image: "/smg.webp",
  imageFit: "contain",
  technologies: ["NET", "SqlServer", "Angular", "TypeScript", "Bootstrap"],
  modal: {
    summary: "Web application for the administrative management of a high school, developed as the final project for my Systems Engineering degree. Created in collaboration with two teammates, covering backend, frontend, and database.",
    text: [
      "Backend development in .NET Core with Entity Framework and SQL Server, optimizing queries for better performance.",
      "Frontend in Angular with TypeScript and Bootstrap styles to ensure an intuitive and responsive experience.",
      "Implementation of key features such as payment registration, debt control, and report generation.",
      "Design and implementation of the dashboard and management of students, fees, and collections.",
      "Printing of receipts and reports in PDF format.",
      "Collaborative teamwork using version control and software development best practices."
    ]
  }
},
    {
      name: "Tu Momento",
      summary:
        "Custom digital invitation for a social event, designed with a modern and responsive approach, adaptable to different celebration styles. Ideal for reuse as a freelance template.",
      linkPreview: "https://tumomento.vercel.app/",
      linkSource: "https://github.com/maticandella/Templates",
      image: "/florfest.webp",
      technologies: ["Astro", "Tailwind", "Vercel"],
      type: "Freelance Project",
      modal: {
        summary: "Tu Momento is a personalized digital invitation developed for a real event. The site was used by guests to view celebration details and confirm their attendance via Google Forms.",
        text: [
          "I developed a modern, responsive one-page site using Astro and Tailwind CSS.",
          "The design was fully customized to reflect the event’s style, with a clean, elegant, and minimalist aesthetic.",
          "I included informative sections such as date, location, interactive map, countdown, and special notes.",
          "I integrated a confirmation form via Google Forms, allowing guests to easily RSVP.",
          "I optimized performance and loading speed to ensure a smooth mobile experience.",
          "The site was deployed on Vercel and actively used by guests leading up to the event."
        ]
      }
    },
  ],
  stack: [],
  about: {
    cards: [
    {
      title: "Experience",
      subtitle: `${yearsExperience}+ years in the industry`,
      description:
        "I have worked as a developer in automotive companies and consultancies, building scalable solutions, integrations, and robust APIs. I have experience working in collaborative teams focused on code quality."
      ,iconName: "portfolio"
      },
    {
      title: "Education",
      subtitle: "Systems Engineer",
      description:
        "I graduated in September 2024 with a degree in Systems Engineering, presenting a final project focused on a school payment system (.NET Core + Angular)."
      , iconName: "hat"
      },
    {
      title: "Critical Thinking",
      subtitle: "Strategic and objective analysis",
      description:
        "Ability to evaluate information logically and make well-founded decisions that bring value to both projects and teams."
      ,iconName: "brain"
      },
    {
      title: "Collaborative Culture",
      subtitle: "Positive and motivating attitude",
      description:
        "I believe that working with passion and good energy boosts creativity and strengthens teams, fostering a more human and productive work environment."
    ,iconName: "happy"
      }
  ]
  },
  sectionTitles: {
    projects: "Projects",
    stack: "Stack",
    about: "About me",
  },
};