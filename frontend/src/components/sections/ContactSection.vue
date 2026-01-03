<script setup>
import { Mail, MessageCircle, Linkedin, Github, MapPin } from 'lucide-vue-next';
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="content-wrapper">
      <h2 class="section-title">// {{ $t('contact.title') }}</h2>

      <div class="contact-layout">
        <div class="contact-info">
          <p class="contact-description">{{ $t('contact.subtitle') }}</p>
          <div class="location-tag">
            <MapPin :size="16" />
            <span>{{ $t('hero.location') }}</span>
          </div>
        </div>

        <div class="contact-links">
          <a href="mailto:arthurmarquesazevedo@gmail.com" class="contact-item">
            <Mail :size="20" />
            <span>arthurmarquesazevedo@gmail.com</span>
          </a>
          <a href="https://wa.me/5573991481220" target="_blank" class="contact-item">
            <MessageCircle :size="20" />
            <span>+55 73 99148-1220</span>
          </a>
          <div class="social-row">
            <a href="https://linkedin.com/in/azevedo-arthur" target="_blank" class="social-icon-link">
              <Linkedin :size="24" />
            </a>
            <a href="https://github.com/Arthur1220" target="_blank" class="social-icon-link">
              <Github :size="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section { padding: 8rem 2rem 4rem 2rem; border-top: 1px solid var(--color-border); }
.content-wrapper { max-width: 1100px; margin: 0 auto; }
.section-title { color: var(--color-primary); margin-bottom: 3rem; }

.contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }

.contact-description { font-size: 1.1rem; line-height: 1.6; opacity: 0.8; margin-bottom: 2rem; }
.location-tag { display: flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-size: 0.85rem; opacity: 0.6; }

.contact-links { display: flex; flex-direction: column; gap: 1.5rem; }
.contact-item { display: flex; align-items: center; gap: 1rem; font-family: var(--font-mono); font-size: 0.95rem; color: var(--color-text); transition: color 0.2s; }
.contact-item:hover { color: var(--color-primary); }

.social-row { display: flex; gap: 2rem; margin-top: 1rem; }
.social-icon-link { color: var(--color-text); opacity: 0.6; transition: all 0.2s; }
.social-icon-link:hover { color: var(--color-primary); opacity: 1; transform: translateY(-3px); }

@media (max-width: 768px) {
  .contact-layout { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
