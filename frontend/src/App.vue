<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useFavicon } from '@/composables/useFavicon';

import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

import ScrollToTopButton from './components/ui/ScrollToTopButton.vue';

const { locale } = useI18n();

useFavicon();

watch(locale, () => {
  document.getElementById('app').classList.add('is-translating');

  setTimeout(() => {
    document.getElementById('app').classList.remove('is-translating');
  }, 150);
});
</script>

<template>
  <Header />

  <main class="main-content">
    <RouterView />
  </main>

  <Footer />
  <ScrollToTopButton />
</template>

<style scoped>
.main-content {
  padding-top: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
