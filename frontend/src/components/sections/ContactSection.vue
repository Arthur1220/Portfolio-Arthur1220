<script setup>
import { Linkedin, Mail, MessageCircle } from 'lucide-vue-next';
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <h2 class="section-title">{{ $t('contact.title') }}</h2>
      <p class="section-subtitle">{{ $t('contact.subtitle') }}</p>

      <div class="contact-layout-grid">

        <div class="direct-contact-column">
          <h3 class="column-title">{{ $t('contact.direct_title') }}</h3>

          <div class="contact-cards-container">
            <a href="mailto:arthurmarquesazevedo@gmail.com" class="contact-card">
              <div class="icon-wrapper">
                <Mail :size="28" />
              </div>
              <div class="text-wrapper">
                <h4>Email</h4>
                <p>{{ $t('contact.email_desc') }}</p>
              </div>
            </a>

            <a href="https://wa.me/5573991481220" target="_blank" class="contact-card">
              <div class="icon-wrapper">
                <MessageCircle :size="28" />
              </div>
              <div class="text-wrapper">
                <h4>WhatsApp</h4>
                <p>{{ $t('contact.whatsapp_desc') }}</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/azevedo-arthur" target="_blank" class="contact-card" >
              <div class="icon-wrapper">
                <Linkedin :size="28" />
              </div>
              <div class="text-wrapper">
                <h4>LinkedIn</h4>
                <p>{{ $t('contact.linkedin_desc') }}</p>
              </div>
            </a>

          </div>
        </div>

        <div class="form-column">
          <h3 class="column-title">{{ $t('contact.form_title') }}</h3>
          <form class="contact-form">
            <div class="form-group">
              <input type="text" id="name" :placeholder="$t('contact.name_label')" required />
            </div>
            <div class="form-group">
              <input type="email" id="email" :placeholder="$t('contact.email_label')" required />
            </div>
            <div class="form-group">
              <textarea id="message" rows="6" :placeholder="$t('contact.message_label')" required></textarea>
            </div>
            <button type="button" class="submit-button">
              {{ $t('contact.submit_button') }}
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
}
.contact-container {
  width: 100%;
  max-width: 1100px;
  text-align: center;
}
.section-title {
  font-size: 2.5rem;
  color: var(--color-heading);
  margin-bottom: 0rem;
}
.section-subtitle {
  font-size: 1.1rem;
  color: var(--color-text);
  opacity: 0.7;
  margin-bottom: 3rem;
}
.contact-layout-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  text-align: left;
}
.column-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
}

/* --- COLUNA DA ESQUERDA: CARDS DE CONTATO --- */
.contact-cards-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.contact-card {
  width: 100%;
  max-width: 375px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: var(--color-card-background);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  text-decoration: none;
  color: var(--color-text);
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.icon-wrapper {
  background-color: rgba(var(--color-primary-rgb), 0.1);
  color: var(--color-primary);
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-wrapper h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0 0 0.25rem 0;
}

.text-wrapper p {
  margin: 0;
  opacity: 0.8;
}


/* --- COLUNA DA DIREITA: FORMULÁRIO COM PLACEHOLDER --- */
.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* Espaçamento entre os campos */
}

/* Não precisamos mais da .form-group label */
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem 1.2rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-card-background);
  color: var(--color-text);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Estilo para o texto do placeholder */
.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--color-text);
  opacity: 0.6;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.2);
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background-color: var(--color-card-background);
  color: var(--color-text);
  border: 1px solid var(--color-primary);
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.submit-button:hover {
  background-color: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}

/* RESPONSIVIDADE */
@media (max-width: 992px) {
  .contact-layout-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>
