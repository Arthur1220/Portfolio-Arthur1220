<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import GuestbookSection from './components/sections/GuestbookSection.vue';
import ContactSection from './components/sections/ContactSection.vue';

import ScrollToTopButton from './components/ui/ScrollToTopButton.vue';

const { locale } = useI18n();

watch(locale, () => {
  // Adiciona a classe para iniciar o "fade out"
  document.getElementById('app').classList.add('is-translating');

  // Remove a classe após um pequeno intervalo para permitir o "fade in"
  setTimeout(() => {
    document.getElementById('app').classList.remove('is-translating');
  }, 150); // Metade do tempo da transição do CSS
});
</script>

<template>
  <Header />

  <main class="main-content">
    <HeroSection id="home" />
    <AboutSection id="about" />
    <ProjectsSection id="projects" />
    <SkillsSection id="skills" />
    <GuestbookSection id="guestbook" />
    <ContactSection id="contact" />
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
