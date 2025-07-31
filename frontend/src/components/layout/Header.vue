<script setup>
import { ref } from 'vue';
import ThemeSwitcher from '../ui/ThemeSwitcher.vue';
import LanguageSwitcher from '../ui/LanguageSwitcher.vue';
import { Menu, X } from 'lucide-vue-next';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <div class="logo">
        <a href="/">
          <h1>AMA</h1>
          <p>Arthur Marques Azevedo</p>
        </a>
      </div>

      <nav class="main-nav" :class="{ 'is-open': isMenuOpen }">
        <a href="#about" @click="isMenuOpen = false">{{ $t('nav.about') }}</a>
        <a href="#projects" @click="isMenuOpen = false">{{ $t('nav.projects') }}</a>
        <a href="#skills" @click="isMenuOpen = false">{{ $t('nav.skills') }}</a>
        <a href="#guestbook" @click="isMenuOpen = false">{{ $t('nav.guestbook') }}</a>
        <a href="#contact" @click="isMenuOpen = false">{{ $t('nav.contact') }}</a>

        <div class="mobile-controls">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </nav>

      <div class="controls desktop-only">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <X v-if="isMenuOpen" :size="28" />
        <Menu v-else :size="28" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 1000;
  background-color: rgba(var(--color-background, 18, 18, 18), 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  transition: background-color 0.3s ease;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: inherit;
}

.logo h1 {
  font-weight: bold;
  font-size: 1.8rem;
  color: var(--color-primary);
  margin-bottom: 0;
}

.logo p {
  font-size: 0.7rem;
  color: var(--color-text);
  margin-top: -5px;
}

.main-nav {
  display: none;
}

.main-nav a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.main-nav a:hover {
  color: var(--color-primary);
}

.main-nav.is-open {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-background);
}

.controls.desktop-only {
  display: none;
}

.mobile-controls {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  align-items: center;
}

.menu-toggle {
  display: block;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  z-index: 1001;
}

@media (min-width: 992px) {
  .site-header {
    padding: 1rem 4rem;
  }

  .menu-toggle {
    display: none;
  }

  .main-nav {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .main-nav a {
    margin: 0 1.5rem;
    font-size: 1rem;
    padding: 0.5rem 0;
    position: relative;
  }

  .main-nav a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-primary);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  .main-nav a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .controls.desktop-only {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .mobile-controls {
    display: none;
  }
}
</style>
