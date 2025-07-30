import { createI18n } from 'vue-i18n';

// Importa as traduções diretamente dos arquivos JSON
import pt from './locales/pt.json';
import en from './locales/en.json';

// Cria a instância do i18n
const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    pt,
    en
  },
});

export default i18n;
