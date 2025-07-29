<script setup>
import { Github, Linkedin } from 'lucide-vue-next';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="copyright">
        &copy; {{ currentYear }} Arthur Marques Azevedo.
      </div>

      <div class="social-links">
        <a href="https://github.com/Arthur1220" target="_blank" aria-label="GitHub">
          <Github :size="24" />
        </a>
        <a href="https://linkedin.com/in/azevedo-arthur" target="_blank" aria-label="LinkedIn">
          <Linkedin :size="24" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  padding: 2rem;
  margin-top: 6rem;
  background-color: var(--color-card-background);
  border-top: 1px solid var(--color-border);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Permite quebra de linha em telas muito pequenas */
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.copyright {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.8;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-links a {
  color: var(--color-text);
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-links a:hover {
  color: var(--color-primary);
  transform: translateY(-3px);
}

/* Responsividade para telas menores */
@media (max-width: 576px) {
  .footer-content {
    flex-direction: column; /* Empilha os elementos verticalmente */
    justify-content: center; /* Centraliza o conteúdo */
  }
}
</style>
