<script setup>
import {
  Database,
  Layers,
  Cpu,
  Blocks,
  DownloadCloud,
  GraduationCap
} from 'lucide-vue-next';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const resumeUrl = computed(() => {
  return locale.value === 'pt'
    ? '/Curriculo_Arthur_Azevedo_PT.pdf'
    : '/Curriculo_Arthur_Azevedo_EN.pdf';
});

const resumeFilename = computed(() => {
  return `Currículo - Arthur Azevedo (${locale.value.toUpperCase()}).pdf`;
});
</script>

<template>
  <section id="about" class="about-section">
    <div class="content-wrapper">
      <h2 class="section-title">{{ $t('about.title') }}</h2>

      <div class="bio-container">
        <p class="bio-text">{{ $t('about.bio_p1') }}</p>
        <p class="bio-text">{{ $t('about.bio_p2') }}</p>
      </div>

      <div class="specialties-grid">
        <div class="spec-item">
          <Blocks class="spec-icon" :size="16" />
          <div class="spec-content">
            <h3>{{ $t('about.spec1_title') }}</h3>
            <p>{{ $t('about.spec1_desc') }}</p>
          </div>
        </div>
        <div class="spec-item">
          <Database class="spec-icon" :size="16" />
          <div class="spec-content">
            <h3>{{ $t('about.spec2_title') }}</h3>
            <p>{{ $t('about.spec2_desc') }}</p>
          </div>
        </div>
        <div class="spec-item">
          <Layers class="spec-icon" :size="16" />
          <div class="spec-content">
            <h3>{{ $t('about.spec3_title') }}</h3>
            <p>{{ $t('about.spec3_desc') }}</p>
          </div>
        </div>
        <div class="spec-item">
          <Cpu class="spec-icon" :size="16" />
          <div class="spec-content">
            <h3>{{ $t('about.spec4_title') }}</h3>
            <p>{{ $t('about.spec4_desc') }}</p>
          </div>
        </div>
      </div>

      <div class="education-container">
        <div class="edu-item">
          <div class="edu-header">
            <GraduationCap :size="24" class="text-muted" />
            <div class="edu-title-group">
              <h3>{{ $t('about.education_title') }}</h3>
              <h4>{{ $t('about.education_degree') }}</h4>
            </div>
          </div>
          <div class="edu-body">
            <p class="university">{{ $t('about.education_university') }}</p>
            <div class="edu-badges">
              <span class="edu-badge">2020 — 2025</span>
              <span class="edu-badge accent">GPA: 8.3/10</span>
            </div>
          </div>
        </div>
      </div>

      <div class="languages-row">
        <div class="lang-text">
          <span class="lang-name">{{ $t('about.lang_pt') }}</span>
          <span class="lang-separator">·</span>
          <span class="lang-val">{{ $t('about.lang_pt_level') }}</span>
        </div>
        <div class="lang-text">
          <span class="lang-name">{{ $t('about.lang_en') }}</span>
          <span class="lang-separator">·</span>
          <span class="lang-val">{{ $t('about.lang_en_level') }}</span>
        </div>
      </div>

      <div class="actions-centered">
        <a :href="resumeUrl" :download="resumeFilename" class="btn btn-outline">
          <DownloadCloud :size="18" />
          <span>{{ $t('about.download_button') }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 8rem 2rem;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  max-width: 900px;
  width: 100%;
}

.section-title {
  margin-bottom: 3rem;
  font-size: 2.25rem;
  color: var(--color-heading);
}

.bio-container {
  margin-bottom: 5rem;
}

.bio-text {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  opacity: 0.9;
}

/* Especialidades */
.specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 5rem;
}

.spec-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.spec-icon {
  color: var(--color-text-muted);
  opacity: 0.55;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.spec-content h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}

.spec-content p {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Educação */
.education-container {
  margin-bottom: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--color-border);
}

.edu-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.edu-header {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.edu-title-group h3 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  margin-bottom: 0.25rem;
}

.edu-title-group h4 {
  font-size: 1.25rem;
  color: var(--color-heading);
}

.edu-body {
  padding-left: 2.5rem;
}

.university {
  font-family: var(--font-sans);
  color: var(--color-text);
  margin-bottom: 1rem;
}

.edu-badges {
  display: flex;
  gap: 1rem;
}

.edu-badge {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 999px;
  color: var(--color-text-muted);
}

[data-theme='dark'] .edu-badge {
  background: rgba(255, 255, 255, 0.05);
}

.edu-badge.accent {
  background: rgba(var(--color-primary-rgb), 0.1);
  color: var(--color-primary);
}

/* Idiomas */
.languages-row {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.lang-text {
  font-family: var(--font-sans);
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lang-name {
  font-weight: 500;
  color: var(--color-heading);
}

.lang-separator {
  color: var(--color-text-muted);
}

.lang-val {
  color: var(--color-text-muted);
}

/* Botão Centralizado */
.actions-centered {
  display: flex;
  justify-content: center;
}

.text-primary { color: var(--color-primary); }
.text-muted { color: var(--color-text-muted); }

@media (max-width: 600px) {
  .languages-row { gap: 1.5rem; flex-direction: column; align-items: center; }
  .edu-header { align-items: center; }
  .edu-body { padding-left: 0; text-align: center; }
  .edu-item { align-items: center; }
  .edu-title-group { text-align: center; }
}
</style>
