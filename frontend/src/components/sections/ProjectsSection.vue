<script setup>
import { Github, ExternalLink, Code2, Terminal } from 'lucide-vue-next';

const projects = [
  {
    id: 'brco-simple',
    type: 'Freelance | Full-stack',
    tech: ['Node.js', 'Express', 'Prisma', 'AWS EC2', 'Docker', 'Vue.js'],
    githubUrl: 'https://github.com/Arthur1220/BRCO-SIMPLE',
    liveUrl: 'https://brcosimple.netlify.app/'
  },
  {
    id: 'finance-whatsapp',
    type: 'Backend | AI Automation',
    tech: ['Django', 'Celery', 'Redis', 'Gemini AI', 'WhatsApp API', 'Docker'],
    githubUrl: 'https://github.com/Arthur1220/Finance-Whatsapp',
    liveUrl: null
  },
  {
    id: 'go-chain-turbo',
    type: 'Blockchain Infrastructure',
    tech: ['Go', 'WebSockets', 'Ethers.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/Arthur1220/Go-Chain-Turbo',
    liveUrl: null
  }
];
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="section-container">
      <h2 class="section-title">// {{ $t('projects.title') }}</h2>
      <p class="section-subtitle">{{ $t('projects.subtitle') }}</p>
      <div class="projects-grid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="card-base project-card"
          :class="{ 'has-live': project.liveUrl }"
        >
          <div class="card-header">
            <span class="project-type">{{ project.type }}</span>
            <Terminal :size="18" class="text-primary" />
          </div>
          <h3 class="project-title">{{ $t(`projects.project_list.${project.id}.title`) }}</h3>
          <p class="project-description">{{ $t(`projects.project_list.${project.id}.description`) }}</p>
          <div class="tech-stack">
            <span v-for="tech in project.tech" :key="tech" class="tech-badge">
              {{ tech }}
            </span>
          </div>
          <div class="project-links">
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="link-item">
              <Github :size="18" />
              <span>Source</span>
            </a>
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="link-item-deploy">
              <ExternalLink :size="16" />
              <span>Deploy</span>
            </a>
            <div v-else class="private-tag">
              <Code2 :size="16" />
              <span>Backend Only / Private</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cta-wrapper">
        <a href="https://github.com/Arthur1220" target="_blank" class="btn btn-primary">
          <span>{{ $t('projects.view_all_github') }}</span>
          <Github :size="20" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section { padding: 8rem 2rem; }

.section-container { max-width: 1100px; margin: 0 auto; }

.section-title { color: var(--color-primary); margin-bottom: 1rem; }

.section-subtitle {
  margin-bottom: 4rem;
  opacity: 0.7;
  font-family: var(--font-mono);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  /* Altura uniforme nos cards */
  align-items: stretch;
}

.project-card {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  /* Hover com borda verde animada */
  border: 1px solid var(--color-border);
  border-radius: 12px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
  position: relative;
  overflow: hidden;
}

/* Linha de destaque no topo do card no hover */
.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.project-card:hover::before {
  transform: scaleX(1);
}

.project-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 0 24px rgba(39, 201, 63, 0.08);
  transform: translateY(-3px);
}

/* Destaque extra para card com deploy ao vivo */
.project-card.has-live {
  border-color: rgba(39, 201, 63, 0.25);
}

.project-card.has-live:hover {
  box-shadow: 0 0 32px rgba(39, 201, 63, 0.14);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.project-type {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--color-primary);
  letter-spacing: 1px;
}

.project-title { font-size: 1.5rem; margin-bottom: 1rem; }

.project-description {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 2rem;
  /* Garante que a descrição empurra os links pro fundo */
  flex-grow: 1;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

/* Tags de tech maiores e mais visíveis */
.tech-badge {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 5px 12px;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text);
  transition: border-color 0.2s, color 0.2s;
}

.project-card:hover .tech-badge {
  border-color: rgba(39, 201, 63, 0.3);
}

.project-links {
  display: flex;
  gap: 1rem;
  align-items: center;
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
  margin-top: auto;
}

.link-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-family: var(--font-mono);
  opacity: 0.7;
  transition: opacity 0.2s, color 0.2s;
}

.link-item:hover {
  opacity: 1;
  color: var(--color-primary);
  text-decoration: none;
}

/* Botão de Deploy destacado */
.link-item-deploy {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-family: var(--font-mono);
  font-weight: 600;
  color: var(--color-background);
  background-color: var(--color-primary);
  padding: 6px 14px;
  border-radius: 6px;
  transition: opacity 0.2s, transform 0.15s;
  text-decoration: none;
  margin-left: auto;
}

.link-item-deploy:hover {
  opacity: 0.85;
  transform: translateY(-1px);
  text-decoration: none;
}

.private-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.5;
  font-style: italic;
  margin-left: auto;
}

.cta-wrapper {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
}

.text-primary { color: var(--color-primary); }
</style>