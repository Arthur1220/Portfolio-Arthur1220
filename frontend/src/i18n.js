import { createI18n } from 'vue-i18n';

// Importa as traduções através do módulo virtual gerado pelo plugin.
// Isso garante que elas sempre estarão disponíveis no build final.
import messages from '@intlify/unplugin-vue-i18n/messages';

// Cria a instância do i18n
const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages, // Usa as mensagens importadas pelo plugin
});

export default i18n;
