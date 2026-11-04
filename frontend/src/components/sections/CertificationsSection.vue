<script setup>
import { Award } from 'lucide-vue-next';

const certifications = ['aws', 'itau', 'go', 'english'];
</script>

<template>
  <section id="certifications" class="certifications-section">
    <div class="section-container">
      <h2 class="section-title">{{ $t('certifications.title') }}</h2>
      <ul class="cert-list">
        <li v-for="cert in certifications" :key="cert" class="cert-item">
          <Award :size="18" class="cert-icon" />
          <span>{{ $t(`certifications.${cert}`) }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.certifications-section {
  padding: 4rem 2rem;
  font-family: var(--font-sans);
}

.section-container {
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  font-size: 1.5rem;
  color: var(--color-heading);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.cert-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.cert-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  line-height: 1.6;
  color: var(--color-text);
}

.cert-icon {
  color: var(--color-primary);
  margin-top: 0.2rem;
  flex-shrink: 0;
}
</style>
