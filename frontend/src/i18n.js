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
    // Adicione outras traduções aqui no futuro
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      guestbook: 'Guestbook',
      contact: 'Contact',
    },
    // Add other translations here in the future
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
