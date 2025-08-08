export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  stack: StackProps[];
  projects: ProjectProps[];
  about: AboutProps;
  sectionTitles: {
    projects: string;
    stack: string;
    about: string;
  };
  buttonsProject: string[];
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  buttons: string[];
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
  linkApis?: string;
  technologies: string[];
  type: string;
  modal?: ModalProps;
}

export interface ModalProps {
  summary: string;
  text: string[];
}

export interface AboutProps {
  cards: AboutCardsProps[];
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export interface StackProps {
  icon: string;
  name: string;
}

export interface AboutCardsProps {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}