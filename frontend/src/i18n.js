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
    projects: {
      title: 'Projetos',
      subtitle: 'Uma seleção dos meus principais trabalhos.',
      view_code: 'Ver Código',
      live_demo: 'Demo ao Vivo'
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Meu nível técnico',
      category1: 'Linguagens',
      category2: 'Frameworks & Bibliotecas',
      category3: 'Bancos de Dados',
      category4: 'Blockchain',
      category5: 'DevOps & Ferramentas'
    },
    contact: {
      title: 'Contato',
      subtitle: 'Entre em contato',
      direct_title: 'Fale comigo',
      form_title: 'Escreva uma mensagem',
      email_cta: 'Mandar mensagem',
      whatsapp_cta: 'Mandar mensagem',
      name_label: 'Nome',
      email_label: 'Email',
      message_label: 'Mensagem',
      submit_button: 'Enviar Mensagem',
      alt_text: 'Ou, se preferir, me contate diretamente:',
      email_desc: 'Envie um email detalhado.',
      whatsapp_desc: 'Inicie uma conversa rápida.',
      linkedin_desc: 'Visite meu perfil profissional.',
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
    projects: {
      title: 'Projects',
      subtitle: 'A selection of my main works.',
      view_code: 'View Code',
      live_demo: 'Live Demo'
    },
    skills: {
      title: 'Skills',
      subtitle: 'My technical level',
      category1: 'Languages',
      category2: 'Frameworks & Libraries',
      category3: 'Databases',
      category4: 'Blockchain',
      category5: 'DevOps & Tools'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch',
      direct_title: 'Talk to me',
      form_title: 'Write a message',
      email_cta: 'Send message',
      whatsapp_cta: 'Send message',
      name_label: 'Name',
      email_label: 'Email',
      message_label: 'Message',
      submit_button: 'Send Message',
      alt_text: 'Or, if you prefer, contact me directly:',
      email_desc: 'Send a detailed email.',
      whatsapp_desc: 'Start a quick conversation.',
      linkedin_desc: 'Visit my professional profile.',
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
