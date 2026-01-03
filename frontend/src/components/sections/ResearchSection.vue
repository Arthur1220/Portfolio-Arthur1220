<script setup>
import { Cpu, Microscope, Presentation, Blocks, ShieldCheck } from 'lucide-vue-next';
</script>

<template>
  <section id="research" class="research-section">
    <div class="content-wrapper">
      <h2 class="section-title">// {{ $t('research.title') }}</h2>
      <p class="section-subtitle">{{ $t('research.subtitle') }}</p>

      <div class="research-timeline">
        <div class="research-item">
          <div class="timeline-marker">
            <div class="research-icon">
              <Blocks :size="20" />
            </div>
          </div>
          <div class="card-base card-interactive research-content">
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
          <div class="card-base card-interactive research-content">
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
          <div class="card-base card-interactive research-content">
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
  max-width: 1100px;
  width: 100%;
}

.section-title {
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.section-subtitle {
  margin-bottom: 4rem;
  opacity: 0.7;
  font-family: var(--font-mono);
  font-size: 0.9rem;
}

.research-timeline {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
}

/* Linha da Timeline */
.research-timeline::before {
  content: '';
  position: absolute;
  left: 17px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--color-border);
}

.research-item {
  display: flex;
  gap: 2.5rem;
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
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.research-item:hover .research-icon {
  border-color: var(--color-primary);
  box-shadow: 0 0 10px rgba(var(--color-primary-rgb), 0.2);
}

.research-content {
  flex: 1;
  padding: 2rem; /* Mantemos o padding local para controle fino */
}

.period {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-primary);
  font-weight: 600;
  letter-spacing: 1px;
}

.research-content h3 {
  margin: 0.5rem 0 1rem 0;
  font-size: 1.3rem;
}

.research-content p {
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  opacity: 0.8;
  text-align: justify;
}

.tech-tags {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.tech-tags span {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 4px 10px;
  background: rgba(var(--color-primary-rgb), 0.05);
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.achievement {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-style: italic;
  opacity: 0.6;
}

.text-primary {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .research-item { gap: 1.5rem; }
  .research-timeline::before { left: 14px; }
  .research-icon { width: 30px; height: 30px; }
}
</style>
