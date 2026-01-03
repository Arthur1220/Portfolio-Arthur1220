<script setup>
import { ref } from 'vue';
import ThemeSwitcher from '../ui/ThemeSwitcher.vue';
import LanguageSwitcher from '../ui/LanguageSwitcher.vue';
import { Menu, X, Terminal } from 'lucide-vue-next';

const isMenuOpen = ref(false);
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;

const navLinks = [
  { href: '#about', label: 'nav.about' },
  { href: '#research', label: 'nav.research' },
  { href: '#projects', label: 'nav.projects' },
  { href: '#skills', label: 'nav.skills' },
  { href: '#guestbook', label: 'nav.guestbook' },
  { href: '#contact', label: 'nav.contact' }
];
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <div class="header-left">
        <a href="/" class="logo-link">
          <Terminal :size="20" class="text-primary" />
          <span class="logo-text">AMA</span>
        </a>
      </div>

      <nav class="main-nav" :class="{ 'is-open': isMenuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-item"
          @click="isMenuOpen = false"
        >
          {{ $t(link.label) }}
        </a>

        <div class="mobile-controls">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </nav>

      <div class="header-right desktop-only">
        <ThemeSwitcher />
        <div class="divider"></div>
        <LanguageSwitcher />
      </div>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <X v-if="isMenuOpen" :size="24" />
        <Menu v-else :size="24" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(var(--color-background-rgb), 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  padding: 0.75rem 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Lado Esquerdo */
.header-left {
  flex: 0 0 auto;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--color-heading);
  text-decoration: none;
}

/* Centro - Navegação */
.main-nav {
  display: none; /* Escondido por padrão no mobile */
}

.nav-item {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-text);
  text-decoration: none;
  opacity: 0.7;
  transition: all 0.3s ease;
  padding: 0.5rem 0.8rem;
}

.nav-item:hover {
  color: var(--color-primary);
  opacity: 1;
}

/* Lado Direito */
.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 0 0 auto;
}

.divider {
  width: 1px;
  height: 20px;
  background: var(--color-border);
}

/* Menu Mobile */
.menu-toggle {
  display: block;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
}

@media (min-width: 1024px) {
  .menu-toggle { display: none; }

  .main-nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .mobile-controls { display: none; }
}

/* Estilos do Menu Aberto no Mobile */
@media (max-width: 1023px) {
  .main-nav.is-open {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-background);
    gap: 2rem;
    z-index: 1000;
  }

  .main-nav.is-open .nav-item {
    font-size: 1.5rem;
  }

  .desktop-only { display: none; }

  .mobile-controls {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
  }
}

.text-primary { color: var(--color-primary); }
</style>
