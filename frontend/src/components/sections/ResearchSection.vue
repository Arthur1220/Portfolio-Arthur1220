<script setup>
import { Cpu, Microscope, Presentation, Blocks, ShieldCheck } from 'lucide-vue-next';
</script>

<template>
  <section id="research" class="research-section">
    <div class="content-wrapper">
      <div class="section-header">
        <h2 class="section-title">{{ $t('research.title') }}</h2>
        <p class="section-subtitle">{{ $t('research.subtitle') }}</p>
      </div>

      <div class="research-timeline">
        <div class="research-item">
          <div class="timeline-marker">
            <div class="research-icon">
              <Blocks :size="20" />
            </div>
          </div>
          <div class="research-content">
            <span class="period">2025</span>
            <h3>{{ $t('research.project_tcc_title') }}</h3>
            <p>{{ $t('research.project_tcc_desc') }}</p>

            <div class="tech-tags">
              <span>Solidity</span>
              <span>Polygon</span>
              <span>Django</span>
              <span>Docker</span>
            </div>

            <div class="achievement">
              <ShieldCheck :size="16" class="text-primary" />
              <span>{{ $t('research.project_tcc_highlight') }}</span>
            </div>
          </div>
        </div>

        <div class="research-item">
          <div class="timeline-marker">
            <div class="research-icon">
              <Cpu :size="20" />
            </div>
          </div>
          <div class="research-content">
            <span class="period">2023 — 2024</span>
            <h3>{{ $t('research.project1_title') }}</h3>
            <p>{{ $t('research.project1_desc') }}</p>

            <div class="tech-tags">
              <span>Python</span>
              <span>Intel RealSense</span>
              <span>SQLAlchemy</span>
            </div>

            <div class="achievement">
              <Presentation :size="16" class="text-primary" />
              <span>30º Seminário de Iniciação Científica</span>
            </div>
          </div>
        </div>

        <div class="research-item">
          <div class="timeline-marker">
            <div class="research-icon">
              <Microscope :size="20" />
            </div>
          </div>
          <div class="research-content">
            <span class="period">2022 — 2023</span>
            <h3>{{ $t('research.project2_title') }}</h3>
            <p>{{ $t('research.project2_desc') }}</p>

            <div class="tech-tags">
              <span>Python</span>
              <span>NumPy</span>
              <span>Tkinter</span>
            </div>

            <div class="achievement">
              <Presentation :size="16" class="text-primary" />
              <span>29º Seminário de Iniciação Científica</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.research-section {
  padding: 8rem 2rem;
  display: flex;
  justify-content: center;
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
}

.research-timeline {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
}

/* Linha da Timeline */
.research-timeline::before {
  content: '';
  position: absolute;
  left: 23px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--color-border);
}

.research-item {
  display: flex;
  gap: 3rem;
  position: relative;
}

.timeline-marker {
  position: relative;
  z-index: 2;
}

.research-icon {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.research-item:hover .research-icon {
  background: rgba(var(--color-primary-rgb), 0.1);
  border-color: var(--color-primary);
}

.research-content {
  flex: 1;
  padding-bottom: 1rem;
}

.period {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-primary);
  font-weight: 500;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 0.5rem;
}

.research-content h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: var(--color-heading);
}

.research-content p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.tech-tags {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.tech-tags span {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 999px;
  color: var(--color-text-muted);
}

[data-theme='dark'] .tech-tags span {
  background: rgba(255, 255, 255, 0.05);
}

.achievement {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

.text-primary {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .research-item { gap: 1.5rem; }
  .research-timeline::before { left: 19px; }
  .research-icon { width: 40px; height: 40px; }
  .research-content h3 { font-size: 1.25rem; }
}
</style>
