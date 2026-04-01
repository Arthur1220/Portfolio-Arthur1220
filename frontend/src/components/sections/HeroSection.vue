<script setup>
import { MapPin, Mail, Github, Linkedin, ArrowRight } from 'lucide-vue-next';
import profilePhoto from '@/assets/profile/profile-05.jpg';
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <div class="hero-text-container">
        <p class="greeting-text">{{ $t('hero.greeting') }}</p>
        <h1 class="main-name">{{ $t('hero.name') }}</h1>
        <h2 class="dev-title">{{ $t('hero.professional_title') }}</h2>
        
        <div class="meta-info">
          <div class="info-block">
            <MapPin :size="18" class="text-primary" />
            <span>{{ $t('hero.location') }}</span>
          </div>
          <div class="info-block status-block">
            <span>{{ $t('hero.status') }}</span>
          </div>
        </div>
        
        <div class="social-actions">
          <a href="https://github.com/Arthur1220" target="_blank" class="btn btn-ghost">
            <Github :size="20" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/azevedo-arthur" target="_blank" class="btn btn-ghost">
            <Linkedin :size="20" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:arthurmarquesazevedo@gmail.com" class="btn btn-primary">
            <Mail :size="20" />
            <span>Contato</span>
            <ArrowRight :size="16" />
          </a>
        </div>
      </div>
      
      <div class="hero-image-container">
        <img :src="profilePhoto" alt="Arthur Marques Azevedo" class="hero-image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
}

.hero-content {
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
}

.hero-text-container {
  flex: 1;
}

.greeting-text {
  font-family: var(--font-mono);
  color: var(--color-text-muted);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.main-name {
  font-size: 4rem; /* Reduzido de 4.5rem para caber em máx 2 linhas */
  line-height: 1.1;
  margin-bottom: 1rem;
  color: var(--color-heading);
  letter-spacing: -0.03em;
}

.dev-title {
  font-family: var(--font-sans);
  font-size: 1.75rem;
  font-weight: 400;
  color: var(--color-text-muted);
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.meta-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3.5rem;
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-text);
}

.info-block {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-block {
  padding: 0.25rem 0.75rem;
  background-color: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
}

.social-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.text-primary {
  color: var(--color-primary);
}

.hero-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.5s ease;
}

.hero-image:hover {
  transform: scale(1.02);
}

@media (max-width: 900px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
    gap: 3rem;
  }
  
  .meta-info {
    justify-content: center;
  }
  
  .social-actions {
    justify-content: center;
  }
  
  .main-name { 
    font-size: 3rem; 
  }
  
  .dev-title { 
    font-size: 1.25rem; 
  }

  .hero-image {
    width: 220px;
    height: 220px;
  }
}
</style>