<script setup>
import { Briefcase, Building, MapPin, CheckCircle2 } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// end: null = emprego atual. showDuration: false no freelance, que não foi contínuo.
const experiences = [
  { id: 'itau', start: [2026, 7], end: null },
  { id: 'datafly', start: [2026, 3], end: [2026, 7] },
  { id: 'dria', start: [2026, 1], end: [2026, 2] },
  { id: 'brco', start: [2024, 6], end: null, showDuration: false }
];

function formatMonth([year, month]) {
  const date = new Date(year, month - 1, 1);
  return new Intl.DateTimeFormat(locale.value, { month: 'short', year: 'numeric' })
    .format(date)
    .replace('.', '')
    .replace(' de ', ' ');
}

function duration(start, end) {
  const now = new Date();
  const [endYear, endMonth] = end ?? [now.getFullYear(), now.getMonth() + 1];
  const total = (endYear - start[0]) * 12 + (endMonth - start[1]) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years) parts.push(`${years} ${t('experience.year', years)}`);
  if (months) parts.push(`${months} ${t('experience.month', months)}`);
  return parts.join(' ');
}

function period(exp) {
  const range = `${formatMonth(exp.start)} – ${exp.end ? formatMonth(exp.end) : t('experience.present')}`;
  return exp.showDuration === false ? range : `${range} · ${duration(exp.start, exp.end)}`;
}
</script>

<template>
  <section id="experience" class="unified-section">
    <div class="content-wrapper">
      <div class="section-header">
        <h2 class="section-title">{{ $t('experience.title') }}</h2>
        <p class="section-subtitle">{{ $t('experience.subtitle') }}</p>
      </div>

      <div class="sub-section">
        <div class="research-timeline">
          <div v-for="exp in experiences" :key="exp.id" class="research-item">
            <div class="timeline-marker">
              <div class="research-icon"><Briefcase :size="20" /></div>
            </div>
            <div class="research-content">
              <span class="period" style="text-transform: uppercase;">{{ period(exp) }}</span>
              <h3 style="margin: 0 0 0.5rem 0; font-size: 1.5rem; color: var(--color-heading);">{{ $t(`experience.${exp.id}.role`) }}</h3>
              
              <div class="company-info" style="display:flex; gap:1.5rem; flex-wrap: wrap; align-items:center; color: var(--color-text-muted); margin-bottom: 1.5rem;">
                <span style="display:flex; align-items:center; gap:0.4rem; font-weight:500;">
                  <Building :size="16" /> {{ $t(`experience.${exp.id}.company`) }}
                </span>
                <span style="display:flex; align-items:center; gap:0.4rem; font-size:0.95rem;">
                  <MapPin :size="16" /> {{ $t(`experience.${exp.id}.location`) }}
                </span>
              </div>

              <p style="margin-bottom: 1rem; font-weight:500; color: var(--color-heading);">
                Stack: <span style="font-weight: 400; color: var(--color-text); opacity: 0.9;">{{ $t(`experience.${exp.id}.stack`) }}</span>
              </p>

              <ul class="highlights-list">
                 <li v-for="(highlight, idx) in $tm(`experience.${exp.id}.highlights`)" :key="idx" class="highlight-item">
                    <CheckCircle2 :size="16" class="text-primary list-icon" />
                    <span>{{ $rt(highlight) }}</span>
                 </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.unified-section {
  padding: 8rem 2rem;
  display: flex;
  justify-content: center;
  font-family: var(--font-sans);
}

.content-wrapper {
  max-width: 900px;
  width: 100%;
}

.section-header {
  margin-bottom: 5rem;
}

.section-title {
  font-size: 2.25rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  opacity: 0.8;
}

.sub-section-title {
  font-size: 1.75rem;
  color: var(--color-heading);
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}

/* === TIMELINE STYLES (Experience & Research) === */
.research-timeline { display: flex; flex-direction: column; gap: 4rem; position: relative; }
.research-timeline::before { content: ''; position: absolute; left: 23px; top: 0; bottom: 0; width: 1px; background: var(--color-border); }
.research-item { display: flex; gap: 3rem; position: relative; }
.timeline-marker { position: relative; z-index: 2; }
.research-icon { background: var(--color-background); border: 1px solid var(--color-border); border-radius: 50%; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; color: var(--color-primary); transition: all 0.3s ease; }
.research-item:hover .research-icon { background: rgba(var(--color-primary-rgb), 0.1); border-color: var(--color-primary); }
.research-content { flex: 1; padding-bottom: 1rem; }
.period { font-family: var(--font-mono); font-size: 0.85rem; color: var(--color-primary); font-weight: 500; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem; }

.tech-tags { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
.tech-tags span { font-family: var(--font-mono); font-size: 0.8rem; padding: 0.25rem 0.75rem; background: rgba(0, 0, 0, 0.03); border-radius: 999px; color: var(--color-text-muted); }
[data-theme='dark'] .tech-tags span { background: rgba(255, 255, 255, 0.05); }

.achievement { display: flex; align-items: center; gap: 0.75rem; font-size: 0.95rem; color: var(--color-text-muted); font-weight: 500; }
.highlights-list { list-style: none; padding: 0; margin: 1.5rem 0 0 0; display: flex; flex-direction: column; gap: 0.75rem; }
.highlight-item { display: flex; align-items: flex-start; gap: 0.75rem; font-size: 1rem; line-height: 1.6; color: var(--color-text); opacity: 0.85; }
.list-icon { margin-top: 0.2rem; flex-shrink: 0; }
.text-primary { color: var(--color-primary); }

/* === CTA BUTTON === */
.cta-wrapper { margin-top: 5rem; display: flex; justify-content: center; }
.github-button { display: inline-flex; align-items: center; gap: 0.75rem; padding: 0.8rem 1.5rem; color: var(--color-heading); border: 1px solid var(--color-border); border-radius: 6px; font-size: 0.95rem; font-weight: 500; transition: background-color 0.2s; text-decoration: none; }
.github-button:hover { background-color: var(--color-primary); border-color: var(--color-primary); color: var(--color-background); transform: translateY(-1px); }

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .research-item { gap: 1.5rem; }
  .research-timeline::before { left: 19px; }
  .research-icon { width: 40px; height: 40px; }
  .company-info { gap: 0.75rem !important; }
}
</style>
