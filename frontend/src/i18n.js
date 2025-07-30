import { createI18n } from 'vue-i18n';

// Importa as traduções diretamente dos arquivos JSON.
// Esta é a forma mais robusta de garantir que o Vite inclua estes arquivos no build.
import ptMessages from './locales/pt.json';
import enMessages from './locales/en.json';

// Cria a instância do i18n
const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    pt: ptMessages,
    en: enMessages
  },
});

export default i18n;
