import { createI18n } from 'vue-i18n';

// Define as traduções
const messages = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Habilidades',
      guestbook: 'Livro de Visitas',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Arthur Marques Azevedo',
      title: 'Desenvolvedor Back-end/Full-stack & Blockchain',
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Uma breve introdução',
      highlight1_title: 'Solucionador de Problemas',
      highlight1_desc: 'Abordagem analítica para superar desafios complexos.',
      highlight2_title: 'Mentalidade de Segurança',
      highlight2_desc: 'Foco em construir aplicações seguras e robustas.',
      highlight3_title: 'Autodidata',
      highlight3_desc: 'Aprendizado contínuo para evoluir e me adaptar.',
      description: 'Desenvolvedor Back-end/Full-stack com foco em Python + Django e Vue.js, e experiência em projetos com sistemas blockchain (Solidity, Hardhat) e automação de APIs REST. Busco atuar no desenvolvimento de soluções de software seguras, escaláveis e de alto impacto.',
      download_button: 'Baixar Currículo'
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      guestbook: 'Guestbook',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Arthur Marques Azevedo',
      title: 'Back-end/Full-stack & Blockchain Developer',
    },
    about: {
      title: 'About Me',
      subtitle: 'A brief introduction',
      highlight1_title: 'Problem Solver',
      highlight1_desc: 'Analytical approach to overcome complex challenges.',
      highlight2_title: 'Security Mindset',
      highlight2_desc: 'Focus on building secure and robust applications.',
      highlight3_title: 'Continuous Learner',
      highlight3_desc: 'Always learning to evolve and adapt.',
      description: 'Back-end/Full-stack developer focused on Python + Django and Vue.js, with experience in projects involving blockchain systems (Solidity, Hardhat) and REST API automation. I aim to develop secure, scalable, and high-impact software solutions.',
      download_button: 'Download Resume'
    },
  }
};

// Cria a instância do i18n
const i18n = createI18n({
  legacy: false, // Essencial para o modo Composition API
  locale: 'pt', // Define o idioma padrão
  fallbackLocale: 'en', // Idioma de fallback
  messages, // Carrega as traduções
});

export default i18n;
