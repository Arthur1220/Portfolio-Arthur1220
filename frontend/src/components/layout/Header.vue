<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import ThemeSwitcher from '../ui/ThemeSwitcher.vue';
import LanguageSwitcher from '../ui/LanguageSwitcher.vue';
import { Menu, X } from 'lucide-vue-next';

const isMenuOpen = ref(false);
const isMobile = ref(false);

const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
const closeMenu = () => isMenuOpen.value = false;

// Função para detectar se é mobile via JS (mais seguro que apenas CSS para componentes)
const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024;
  if (!isMobile.value && isMenuOpen.value) closeMenu();
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
  document.body.style.overflow = '';
});

watch(isMenuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : '';
});

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
        <a href="/" class="logo-link" @click="closeMenu">
          <span class="logo-text">AMA</span>
        </a>
      </div>

      <Transition name="fade">
        <div v-if="isMenuOpen" class="menu-overlay" @click="closeMenu"></div>
      </Transition>

      <nav class="main-nav" :class="{ 'is-open': isMenuOpen }">
        <div class="nav-links-wrapper">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-item" @click="closeMenu">
            {{ $t(link.label) }}
          </a>
        </div>

        <div v-if="isMobile" class="mobile-controls">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </nav>

      <div v-if="!isMobile" class="header-right">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>

      <button class="menu-toggle" aria-label="Menu" @click="toggleMenu">
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
  background-color: transparent;
  backdrop-filter: blur(8px);
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Lógica de Layout Desktop */
@media (min-width: 1024px) {
  .main-nav { display: flex; align-items: center; gap: 2rem; }
  .header-right { display: flex; align-items: center; gap: 1.5rem; }
  .menu-toggle { display: none; }
}

/* Lógica de Layout Mobile */
@media (max-width: 1023px) {
  .main-nav { display: none; }
  .main-nav.is-open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background: var(--color-background);
    padding: 5rem 2rem;
    z-index: 1001;
    box-shadow: -10px 0 30px rgba(0,0,0,0.1);
  }
  .mobile-controls {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: auto;
    padding-top: 2rem;
    border-top: 1px solid var(--color-border);
  }
  .menu-toggle {
    background: transparent;
    border: none;
    color: var(--color-text);
    cursor: pointer;
    z-index: 1002;
  }
}

.nav-links-wrapper {
  display: flex;
  gap: 1.5rem;
}

@media (max-width: 1023px) {
  .nav-links-wrapper {
    flex-direction: column;
    gap: 1rem;
  }
}

.nav-item {
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;
}

.nav-item:hover { 
  color: var(--color-text);
}

.logo-link { 
  font-family: var(--font-sans); 
  font-weight: 700; 
  color: var(--color-heading); 
  font-size: 1.25rem;
  letter-spacing: -0.02em;
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
}
</style>

