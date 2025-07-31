<script setup>
import { Linkedin, Mail, MessageCircle } from 'lucide-vue-next';
</script>

<template>
  <section id="contact" class="contact-section" data-aos="fade-up">
    <div class="contact-container">
      <h2 class="section-title">{{ $t('contact.title') }}</h2>
      <p class="section-subtitle">{{ $t('contact.subtitle') }}</p>

      <div class="direct-contact-column">

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
  max-width: 800px;
  text-align: center;
}
.section-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.section-subtitle {
  font-size: 1.1rem;
  opacity: 0.7;
  margin-bottom: 3rem;
}

.column-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.contact-cards-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.contact-card {
  width: 100%;
  max-width: 350px;
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

.text-wrapper {
  text-align: left;
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
</style>
