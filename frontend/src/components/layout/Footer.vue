<script setup>
import { Github, Linkedin } from 'lucide-vue-next';
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <span class="copyright">
          &copy; {{ currentYear }} Arthur Marques Azevedo.
        </span>
      </div>
      <div class="footer-socials">
        <a href="https://github.com/Arthur1220" target="_blank" class="social-link" aria-label="GitHub">
          <Github :size="16" />
        </a>
        <a href="https://linkedin.com/in/azevedo-arthur" target="_blank" class="social-link" aria-label="LinkedIn">
          <Linkedin :size="16" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  padding: 4rem 2rem; 
  margin-top: 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between; 
  align-items: center;     
  max-width: 1200px;
  margin: 0 auto;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: 0.6; 
  transition: opacity 0.3s ease;
}

.footer-brand:hover {
  opacity: 1; 
}

.copyright {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.footer-socials {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  color: var(--color-text-muted);
  opacity: 0.5;
  transition: opacity 0.2s ease, color 0.2s ease;
}

.social-link:hover {
  opacity: 1;
  color: var(--color-primary);
}

@media (max-width: 576px) {
  .footer-content { 
    flex-direction: column;
    gap: 1rem;
    text-align: center; 
  }
}
</style>
