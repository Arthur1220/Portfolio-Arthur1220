<script setup>
// Importa os ícones que vamos usar
import { Lightbulb, Shield, BookOpen, DownloadCloud } from 'lucide-vue-next';
</script>

<template>
  <section id="about" class="about-section">
    <h2 class="section-title">{{ $t('about.title') }}</h2>
    <p class="section-subtitle">{{ $t('about.subtitle') }}</p>

    <div class="highlights">
      <div class="highlight-card">
        <Lightbulb :size="32" class="icon" />
        <h3>{{ $t('about.highlight1_title') }}</h3>
        <p>
          {{ $t('about.highlight1_desc') }}
        </p>
      </div>
      <div class="highlight-card">
        <Shield :size="32" class="icon" />
        <h3>{{ $t('about.highlight2_title') }}</h3>
        <p>
          {{ $t('about.highlight2_desc') }}
        </p>
      </div>
      <div class="highlight-card">
        <BookOpen :size="32" class="icon" />
        <h3>{{ $t('about.highlight3_title') }}</h3>
        <p>
          {{ $t('about.highlight3_desc') }}
        </p>
      </div>
    </div>

    <p class="description">
      {{ $t('about.description') }}
    </p>

    <a href="/curriculo.pdf" download class="download-button">
      <DownloadCloud :size="20" />
      <span>{{ $t('about.download_button') }}</span>
    </a>
  </section>
</template>

<style scoped>
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6rem 2rem;
  max-width: 960px;
  margin: 0 auto;
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
  margin-bottom: 4rem;
}

.highlights {
  display: flex;
  gap: 2rem;
  width: 100%;
  margin-bottom: 4rem;
}

.highlight-card {
  flex: 1;
  background-color: var(--color-card-background);
  border: 1px solid var(--color-border);
  padding: 2rem;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.highlight-card .icon {
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.highlight-card h3 {
  font-size: 1.2rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.highlight-card p {
  font-size: 0.9rem;
  color: var(--color-text);
  line-height: 1.5;
}

.description {
  max-width: 800px;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 3rem;
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1.8rem;
  background-color: var(--color-card-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.download-button:hover {
  background-color: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}

/* --- Responsividade --- */
@media (max-width: 768px) {
  .about-section {
    padding: 4rem 1rem;
  }
  .highlights {
    flex-direction: column;
  }
  .section-title {
    font-size: 2rem;
  }
}
</style>
