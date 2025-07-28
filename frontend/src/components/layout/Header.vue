<script setup>
// Importa o componente que criamos para a troca de tema
import ThemeSwitcher from '../ui/ThemeSwitcher.vue';
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <div class="logo">AMA</div>

      <nav class="main-nav">
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#skills">Habilidades</a>
        <a href="#contact">Contato</a>
      </nav>

      <div class="controls">
        <ThemeSwitcher />
        <div class="language-switcher">
          <span>PT</span> / <span>EN</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 4rem;
  z-index: 1000;
  background-color: rgba(var(--color-background, 18, 18, 18), 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  transition: background-color 0.3s ease;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative; /* Adicionado: Necessário para o posicionamento absoluto do .main-nav */
}

.logo {
  font-weight: bold;
  font-size: 1.8rem;
  color: var(--color-primary);
  cursor: pointer;
}

/* Modificado: Centraliza a navegação na tela */
.main-nav {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.main-nav a {
  color: var(--color-text);
  text-decoration: none;
  margin: 0 1.5rem; /* Margem horizontal em vez de apenas na esquerda */
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
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

.main-nav a:hover {
  color: var(--color-primary);
}

.main-nav a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.controls {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.language-switcher {
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  color: var(--color-text);
}

.language-switcher span:hover {
  color: var(--color-primary);
}
</style>
