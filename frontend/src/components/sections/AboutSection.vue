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
      <h2 class="section-title">{{ $t('about.title') }}</h2>

      <div class="bio-container">
        <p class="bio-text">{{ $t('about.paragraph1') }}</p>
        <p class="bio-text">{{ $t('about.paragraph2') }}</p>
      </div>

      <div class="specialties-grid">
        <div class="spec-card">
          <Blocks class="spec-icon" :size="16" />
          <h3>{{ $t('about.spec1_title') }}</h3>
          <p>{{ $t('about.spec1_desc') }}</p>
        </div>
        <div class="spec-card">
          <Database class="spec-icon" :size="16" />
          <h3>{{ $t('about.spec2_title') }}</h3>
          <p>{{ $t('about.spec2_desc') }}</p>
        </div>
        <div class="spec-card">
          <Layers class="spec-icon" :size="16" />
          <h3>{{ $t('about.spec3_title') }}</h3>
          <p>{{ $t('about.spec3_desc') }}</p>
        </div>
        <div class="spec-card">
          <Cpu class="spec-icon" :size="16" />
          <h3>{{ $t('about.spec4_title') }}</h3>
          <p>{{ $t('about.spec4_desc') }}</p>
        </div>
      </div>

      <div class="education-container">
        <div class="edu-card">
          <div class="edu-header">
            <GraduationCap :size="24" class="edu-icon" />
            <div class="edu-title-group">
              <h3 class="category-label">{{ $t('about.education_title') }}</h3>
              <h4>{{ $t('about.education_degree') }}</h4>
            </div>
          </div>
          <div class="edu-body">
            <p class="university">{{ $t('about.education_university') }}</p>
            <div class="edu-badges">
              <span class="edu-badge">2020 — 2025</span>
              <span class="edu-badge">GPA: 8.3/10</span>
            </div>
          </div>
        </div>
      </div>

      <div class="languages-row">
        <div class="lang-tag">
          <Globe :size="16" class="lang-icon" />
          <span class="lang-name">{{ $t('about.lang_pt') }}:</span>
          <span class="lang-val">{{ $t('about.lang_pt_level') }}</span>
        </div>
        <div class="lang-tag">
          <Globe :size="16" class="lang-icon" />
          <span class="lang-name">{{ $t('about.lang_en') }}:</span>
          <span class="lang-val">{{ $t('about.lang_en_level') }}</span>
        </div>
      </div>

      <div class="actions-centered">
        <a :href="resumeUrl" :download="resumeFilename" class="download-button">
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
  font-family: var(--font-sans);
}

.content-wrapper {
  max-width: 900px;
  width: 100%;
}

.section-title {
  margin-bottom: 3rem;
  color: var(--color-heading);
  font-size: 2.25rem;
  text-align: left;
  font-weight: 600;
}

.bio-container {
  margin-bottom: 4rem;
  text-align: left;
}

.bio-text {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

/* Specialties */
.specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.spec-card {
  text-align: left;
  padding: 2rem;
  background-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: border-color 0.2s ease;
}

.spec-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(39, 201, 63, 0.05); /* very subtle var(--color-primary) tint if it's green, or transparent tint */
}

.spec-icon {
  opacity: 0.55;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.spec-card h3 {
  font-size: 1.125rem;
  color: var(--color-heading);
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.spec-card p {
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.6;
  opacity: 0.8;
}

/* Education */
.education-container {
  margin-bottom: 4rem;
}

.edu-card {
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.edu-header {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.edu-icon {
  opacity: 0.55;
  color: var(--color-text);
  margin-top: 0.2rem;
}

.category-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.edu-title-group h4 {
  font-size: 1.25rem;
  color: var(--color-heading);
  font-weight: 500;
}

.university {
  font-size: 1rem;
  color: var(--color-text);
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.edu-badges {
  display: flex;
  gap: 1rem;
}

.edu-badge {
  font-size: 0.85rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text-muted);
}

/* Languages */
.languages-row {
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  justify-content: center;
}

.lang-tag {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--color-text);
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease, color 0.2s ease;
  padding-bottom: 0.2rem;
}

.lang-tag:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.lang-tag:hover .lang-icon,
.lang-tag:hover .lang-name {
  color: var(--color-primary);
  opacity: 1;
}

.lang-icon {
  opacity: 0.55;
}

.lang-name {
  font-weight: 500;
  color: var(--color-heading);
}

.lang-val {
  opacity: 0.8;
}

/* Download Button */
.actions-centered {
  display: flex;
  justify-content: center;
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1.5rem;
  color: var(--color-heading);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
}

.download-button:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-background); /* Inverts text out from background */
  transform: translateY(-1px);
}

@media (max-width: 600px) {
  .languages-row { flex-direction: column; gap: 1rem; }
  .edu-header { gap: 1rem; }
  .specialties-grid { grid-template-columns: 1fr; }
}
</style>
