<script setup>
// Nenhuma lógica necessária por enquanto
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <div class="logo">Arthur Azevedo</div>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#skills">Habilidades</a>
        <a href="#contact">Contato</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #1a1a1a;
  color: white;
  z-index: 1000;
  border-bottom: 1px solid #333;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.logo {
  font-weight: bold;
  font-size: 1.5rem;
}
nav a {
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
}
nav a:hover {
  text-decoration: underline;
}
</style>
