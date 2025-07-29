<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

function setLocale(newLocale) {
  locale.value = newLocale;
}
</script>

<template>
  <div class="language-switcher">
    <span @click="setLocale('pt')" :class="{ active: locale === 'pt' }">
      PT
    </span>
    <span class="separator">/</span>
    <span @click="setLocale('en')" :class="{ active: locale === 'en' }">
      EN
    </span>
  </div>
</template>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text);
}

.language-switcher span {
  cursor: pointer;
  padding: 0 0.25rem;
  transition: color 0.3s ease;
}

.language-switcher span:hover {
  color: var(--color-primary);
}

.language-switcher .separator {
  cursor: default;
  opacity: 0.5;
}

.language-switcher .active {
  color: var(--color-primary);
  font-weight: 700;
}
</style>
