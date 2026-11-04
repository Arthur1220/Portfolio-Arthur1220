<script setup>
import { MapPin, Github, Linkedin, ArrowRight, FileText } from 'lucide-vue-next';
import profilePhoto from '@/assets/profile/profile-05.webp';
import { useResume } from '@/composables/useResume';

const { resumeUrl } = useResume();

const stats = [
  { value: '~75%', key: 'latency' },
  { value: '98%', key: 'accuracy' },
  { value: '100%', key: 'web3' },
  { value: '318', key: 'tests' }
];
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <div class="hero-text-container">
        <p class="greeting-text">{{ $t('hero.greeting') }}</p>
        <h1 class="main-name">{{ $t('hero.name') }}</h1>
        <h2 class="dev-title">{{ $t('hero.professional_title') }}</h2>
        <p class="summary">{{ $t('hero.summary') }}</p>
        <p class="path">{{ $t('hero.path') }}</p>

        <div class="meta-info">
          <div class="info-block">
            <MapPin :size="18" class="text-primary" />
            <span>{{ $t('hero.location') }}</span>
          </div>
        </div>

        <div class="social-actions">
          <a href="#cases" class="btn btn-primary">
            <span>{{ $t('hero.cta_cases') }}</span>
            <ArrowRight :size="16" />
          </a>
          <a :href="resumeUrl" target="_blank" class="btn btn-ghost">
            <FileText :size="20" />
            <span>{{ $t('hero.cta_resume') }}</span>
          </a>
          <a href="https://github.com/Arthur1220" target="_blank" class="btn btn-ghost">
            <Github :size="20" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/azevedo-arthur" target="_blank" class="btn btn-ghost">
            <Linkedin :size="20" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div class="hero-image-container">
        <img :src="profilePhoto" alt="Arthur Marques Azevedo" class="hero-image" width="280" height="280" />
      </div>
    </div>

    <dl class="stats-strip">
      <div v-for="stat in stats" :key="stat.key" class="stat">
        <dt class="stat-value">{{ stat.value }}</dt>
        <dd class="stat-label">{{ $t(`stats.${stat.key}`) }}</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  gap: 5rem;
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
  font-size: 3.5rem; /* Reduzido de 4.5rem para caber em máx 2 linhas */
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
  margin-bottom: 1.5rem;
  max-width: 600px;
}

.summary {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text);
  max-width: 600px;
  margin-bottom: 1rem;
}

.path {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
}

.meta-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2.5rem;
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-text);
}

.info-block {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stats-strip {
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding-top: 2.5rem;
  border-top: 1px solid var(--color-border);
}

.stat-value {
  font-size: 2.25rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--color-heading);
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-text-muted);
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

  .summary {
    margin-left: auto;
    margin-right: auto;
  }

  .stats-strip {
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding-left: 0;
    padding-right: 0;
  }

  .main-name {
    font-size: 2.5rem;
  }

  .stat-value {
    font-size: 1.75rem;
  }
}
</style>