<script setup>
import { Mail, MessageCircle } from 'lucide-vue-next';
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <h2 class="section-title">{{ $t('contact.title') }}</h2>
      <p class="section-subtitle">{{ $t('contact.subtitle') }}</p>

      <form class="contact-form">
        <div class="form-group">
          <label for="name">{{ $t('contact.name_label') }}</label>
          <input type="text" id="name" required />
        </div>
        <div class="form-group">
          <label for="email">{{ $t('contact.email_label') }}</label>
          <input type="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="message">{{ $t('contact.message_label') }}</label>
          <textarea id="message" rows="5" required></textarea>
        </div>
        <button type="button" class="submit-button">
          {{ $t('contact.submit_button') }}
        </button>
      </form>

      <div class="direct-contact-info">
        <p class="alt-text">{{ $t('contact.alt_text') }}</p>
        <div class="contact-links">
          <a href="mailto:arthurmarquesazevedo@gmail.com" class="contact-link">
            <Mail :size="20" />
            <span>Email</span>
          </a>
          <a href="https://wa.me/5573991481220" target="_blank" class="contact-link">
            <MessageCircle :size="20" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- ESTILO GERAL DA SEÇÃO (igual para todas as opções) --- */
.contact-section {
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
}
.contact-container {
  width: 100%;
  max-width: 600px;
  text-align: center;
}
.section-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.section-subtitle {
  font-size: 1.1rem;
  opacity: 0.7;
  margin-bottom: 4rem;
}

/* --- DESIGN "MODERNO E ESTRUTURADO" --- */
.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-card-background); /* Fundo sutil */
  color: var(--color-text);
  border-radius: 8px; /* Cantos arredondados */
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.2); /* Efeito "glow" */
}
.submit-button {
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1.8rem;
  background-color: var(--color-primary);
  color: #fff;
  border: 1px solid var(--color-border);
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}
.submit-button:hover {
  background-color: var(--color-card-background);
  color: var(--color-text);
  border-color: var(--color-primary);
}

/* --- CONTATO DIRETO (igual para todas as opções) --- */
.direct-contact-info {
  margin-top: 4rem;
  border-top: 1px solid var(--color-border);
  padding-top: 2rem;
}
.alt-text {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.7;
  margin-bottom: 1.5rem;
}
.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}
.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}
.contact-link:hover {
  color: var(--color-primary);
}
</style>
