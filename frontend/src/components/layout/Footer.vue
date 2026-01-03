<script setup>
import { Terminal } from 'lucide-vue-next';
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <Terminal :size="16" class="text-primary" />
        <span class="copyright">
          &copy; {{ currentYear }} Arthur Marques Azevedo
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  padding: 4rem 2rem; /* Aumentado o padding superior para compensar a falta da linha */
  margin-top: 2rem;
  /* border-top removido conforme solicitado */
}

.footer-content {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center;     /* Centraliza verticalmente */
  max-width: 1200px;
  margin: 0 auto;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: 0.6; /* Deixa o footer inteiro mais discreto */
  transition: opacity 0.3s ease;
}

.footer-brand:hover {
  opacity: 1; /* Ganha destaque sutil ao passar o mouse */
}

.copyright {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}

.text-primary { color: var(--color-primary); }

@media (max-width: 576px) {
  .footer-content { text-align: center; }
}
</style>
