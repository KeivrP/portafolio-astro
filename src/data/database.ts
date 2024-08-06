import type { StudiesType, Tag, Project } from "../types/types";
import Tailwind from "../components/icon/Tailwind.astro";
import NextJS from "../components/icon/NextJS.astro";
import Ruby from '../components/icon/Ruby.astro'
import React from '../components/icon/React.astro'
import Scss from "../components/icon/Scss.astro"
import Typescript from "../components/icon/Typescript.astro"
import Docker from "../components/icon/Docker.astro"

export const Studies = [
  {
    title: "Curso Profesional de Git y GitHub",
    academy: "Platzi",
    year: 2021,
  },
  {
    title: "Mind wide open",
    academy: "Cisco Networkin Academy",
    year: 2018,
  },
  {
    title: "TSU. Analisis y Diseño de Sistemas",
    academy: " Universidad Nacional Experimental de La Fuerza Armada Nacional",
    year: 2018,
  },
] as StudiesType[];


const TAGS: { [key: string]: Tag } = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  SCSS: {
    name: "Sass",
    class: "bg-black text-white",
    icon: Scss,
  },
  REACT: {
    name: "React.js",
    class: "bg-black text-white",
    icon: React,
  },
  RUBY: {
    name: "Ruby on Rails",
    class: "bg-black text-white",
    icon: Ruby,
  },
  DOCKER: {
    name: "Docker",
    class: "bg-blue-100 text-black",
    icon: Docker,
  },
  TYPESCRIPT: {
    name: "Typescript",
    class: "bg-blue-100 text-black",
    icon: Typescript,
  },
};


export const PROJECTS = [
{
    title: "KERUX - Migración del sistema financiero a plataforma web",
    description: "Sistema financiero que se encuentra en proceso de migración hacia una plataforma web. Creado desde cero con Ruby on Rails, Typescript, React.js y Docker",
    link: "https://www.kentronsistemas.com/productos/kerux/",
    github: "",
    gitlab: '',
    image: "/projects/kerux.webp",
    confidencial: true,
    tags: [TAGS.REACT, TAGS.RUBY, TAGS.TYPESCRIPT, TAGS.DOCKER,],
  },
  {
    title: "Soporte Kentron - Ticket y Analisis de Requerimientos",
    description:
      "Sistema diseñado para la gestión de tickets y el análisis de requerimientos, que facilita la organización y el seguimiento de las incidencias y solicitudes de los clientes. Creado desde cero con React.js, Ruby on Rails y Scss.",
    link: "https://soporte.kentronsistemas.com/sign_in",
    github: "",
    gitlab: 'https://gitlab.com/ksistemas/ergosweb',
    image: "/projects/soporte-kerux.png",
    tags: [TAGS.REACT, TAGS.RUBY, TAGS.SCSS,],
  },
  {
    title: "Multiprevi - Administracion de Arrendamiento y Condominios",
    description:
      "aplicación diseñada para simplificar la administración de propiedades de alquiler y condominios de la Torre la Previsora. Creado desde cero con React.js, Ruby on Rails y Material UI.",
    link: "",
    gitlab: 'https://gitlab.com/kentron-proyectos/Previcondo',
    image: "/projects/multiprevi.webp",
    tags: [TAGS.REACT, TAGS.RUBY],
  },
] as Project[];