// src/stores/theme.js

import { defineStore } from 'pinia';
import { ref } from 'vue';

// O 'theme' no defineStore é um ID único para esta store.
export const useThemeStore = defineStore('theme', () => {
  // 1. STATE
  const theme = ref('light'); // O tema padrão é 'light'

  // 2. ACTIONS
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

  // 3. RETURN
  // Exponha o estado e as ações para que os componentes possam usá-los.
  return {
    theme,
    initTheme,
    toggleTheme,
  };
});
