import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('dark');

  /**
   * Aplica um novo tema à aplicação e o salva no localStorage.
   * @param {string} newTheme - O nome do novo tema ('light' ou 'dark').
   */
  function applyTheme(newTheme) {
    theme.value = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('user-theme', newTheme);
  }

  /**
   * Inicializa o tema ao carregar a aplicação, verificando o localStorage
   * ou a preferência do sistema do usuário.
   */
  function initTheme() {
    const savedTheme = localStorage.getItem('user-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      applyTheme(savedTheme);
    } else if (prefersDark) {
      applyTheme('dark');
    } else {
      applyTheme('light');
    }
  }

  /**
   * Alterna entre o tema claro e escuro.
   */
  function toggleTheme() {
    const newTheme = theme.value === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
  }

  return {
    theme,
    initTheme,
    toggleTheme,
  };
});
