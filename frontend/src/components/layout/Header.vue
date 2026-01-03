<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import ThemeSwitcher from '../ui/ThemeSwitcher.vue';
import LanguageSwitcher from '../ui/LanguageSwitcher.vue';
import { Menu, X, Terminal } from 'lucide-vue-next';

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
          <Terminal :size="20" class="text-primary" />
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
          <div class="v-divider"></div>
          <LanguageSwitcher />
        </div>
      </nav>

      <div v-if="!isMobile" class="header-right">
        <ThemeSwitcher />
        <div class="v-divider"></div>
        <LanguageSwitcher />
      </div>

      <button class="menu-toggle" @click="toggleMenu">
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
  background-color: rgba(var(--color-background-rgb), 0.85);
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
  padding: 0 1.5rem;
}

/* Lógica de Layout Desktop */
@media (min-width: 1024px) {
  .main-nav { display: flex; align-items: center; gap: 1rem; }
  .header-right { display: flex; align-items: center; gap: 1rem; }
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
    background: var(--color-card-background);
    padding: 5rem 2rem;
    z-index: 1001;
    box-shadow: -10px 0 30px rgba(0,0,0,0.3);
  }
  .mobile-controls {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: auto;
    padding-top: 2rem;
    border-top: 1px solid var(--color-border);
  }
}

.nav-item {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text);
  text-decoration: none;
  opacity: 0.7;
  padding: 0.5rem 1rem;
}

.nav-item:hover { color: var(--color-primary); opacity: 1; }
.v-divider { width: 1px; height: 16px; background: var(--color-border); }
.logo-link { display: flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-weight: 700; color: var(--color-heading); }
.text-primary { color: var(--color-primary); }
</style>
