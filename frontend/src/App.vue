<script setup>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import GuestbookSection from './components/sections/GuestbookSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
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
</template>

<style scoped>
/*
 * Aqui você pode adicionar estilos que se aplicam a este layout principal.
*/
.main-content {
  padding-top: 4rem; /* Espaço para o Header fixo, ajuste conforme a altura do seu header */
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 1200px; /* Limita a largura máxima do conteúdo para melhor legibilidade */
  margin: 0 auto; /* Centraliza o conteúdo principal na página */
}
</style>
