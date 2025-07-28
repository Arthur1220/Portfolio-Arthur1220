<script setup>
import { onMounted } from 'vue';
import { Sun, Moon } from 'lucide-vue-next';
import { useThemeStore } from '@/stores/theme.js';

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initTheme();
});
</script>

<template>
  <button @click="themeStore.toggleTheme" class="theme-switcher" aria-label="Alternar tema">
    <Moon v-if="themeStore.theme === 'light'" :size="20" />
    <Sun v-else :size="20" />
  </button>
</template>

<style scoped>
.theme-switcher {
  background: none;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
}

.theme-switcher:hover {
  background-color: var(--color-card-background);
  color: var(--color-primary);
  transform: translateY(-2px);
}
</style>
