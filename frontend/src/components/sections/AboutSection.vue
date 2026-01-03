<script setup>
import {
  Database,
  Layers,
  Cpu,
  Blocks,
  DownloadCloud,
  GraduationCap,
  Globe
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
      <h2 class="section-title">// {{ $t('about.title') }}</h2>

      <div class="bio-container">
        <p class="bio-text">{{ $t('about.bio_p1') }}</p>
        <p class="bio-text">{{ $t('about.bio_p2') }}</p>
      </div>

      <div class="specialties-grid">
        <div class="card-base card-interactive spec-card">
          <Blocks class="spec-icon" :size="28" />
          <h3>{{ $t('about.spec1_title') }}</h3>
          <p>{{ $t('about.spec1_desc') }}</p>
        </div>
        <div class="card-base card-interactive spec-card">
          <Database class="spec-icon" :size="28" />
          <h3>{{ $t('about.spec2_title') }}</h3>
          <p>{{ $t('about.spec2_desc') }}</p>
        </div>
        <div class="card-base card-interactive spec-card">
          <Layers class="spec-icon" :size="28" />
          <h3>{{ $t('about.spec3_title') }}</h3>
          <p>{{ $t('about.spec3_desc') }}</p>
        </div>
        <div class="card-base card-interactive spec-card">
          <Cpu class="spec-icon" :size="28" />
          <h3>{{ $t('about.spec4_title') }}</h3>
          <p>{{ $t('about.spec4_desc') }}</p>
        </div>
      </div>

      <div class="education-container">
        <div class="card-base card-interactive edu-card">
          <div class="edu-header">
            <GraduationCap :size="28" class="text-primary" />
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
        <div class="lang-tag">
          <Globe :size="16" />
          <span class="lang-name">{{ $t('about.lang_pt') }}:</span>
          <span class="lang-val">{{ $t('about.lang_pt_level') }}</span>
        </div>
        <div class="lang-tag">
          <Globe :size="16" />
          <span class="lang-name">{{ $t('about.lang_en') }}:</span>
          <span class="lang-val">{{ $t('about.lang_en_level') }}</span>
        </div>
      </div>

      <div class="actions-centered">
        <a :href="resumeUrl" :download="resumeFilename" class="btn btn-primary">
          <DownloadCloud :size="20" />
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
  max-width: 1100px;
  width: 100%;
}

.section-title {
  margin-bottom: 3rem;
  color: var(--color-primary);
  font-family: var(--font-mono);
  text-align: left;
}

.bio-container {
  margin-bottom: 4rem;
  text-align: justify;
}

.bio-text {
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

/* Especialidades */
.specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.spec-card {
  text-align: center;
  padding: 2rem 1.5rem;
}

.spec-icon {
  color: var(--color-primary);
  margin-bottom: 1rem;
  align-self: center;
}

/* Card de Educação Centralizado */
.education-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.edu-card {
  width: 100%;
  max-width: 1100px;
  border-left: 4px solid var(--color-primary) !important;
}

.edu-header {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
}

.edu-title-group h3 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.6;
}

.edu-title-group h4 {
  font-size: 1.2rem;
}

.university {
  font-family: var(--font-mono);
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

.edu-badges {
  display: flex;
  gap: 1rem;
}

.edu-badge {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 4px 12px;
  background: var(--color-border);
  border-radius: 4px;
}

.edu-badge.accent {
  border: 1px solid var(--color-primary);
  background: transparent;
  color: var(--color-primary);
}

/* Idiomas Estilo Row */
.languages-row {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.lang-tag {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: var(--color-card-background);
  border: 1px solid var(--color-border);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.lang-tag:hover {
  transform:scale(1.1);
  border-color: var(--color-primary);
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
}

.lang-name {
  font-weight: 600;
}

.lang-val {
  opacity: 0.7;
}

/* Botão Centralizado */
.actions-centered {
  display: flex;
  justify-content: center;
}

.text-primary { color: var(--color-primary); }

@media (max-width: 600px) {
  .languages-row { gap: 1rem; }
  .edu-header { flex-direction: column; text-align: center; }
}
</style>
