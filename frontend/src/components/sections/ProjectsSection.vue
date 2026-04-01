<script setup>
import { Github, ExternalLink, Code2 } from 'lucide-vue-next';

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
      <div class="section-header">
        <h2 class="section-title">{{ $t('projects.title') }}</h2>
        <p class="section-subtitle">{{ $t('projects.subtitle') }}</p>
      </div>
      
      <div class="projects-list">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-item"
        >
          <div class="project-content">
            <span class="project-type">{{ project.type }}</span>
            <h3 class="project-title">{{ $t(`projects.project_list.${project.id}.title`) }}</h3>
            <p class="project-description">{{ $t(`projects.project_list.${project.id}.description`) }}</p>
            
            <div class="tech-stack">
              <span v-for="tech in project.tech" :key="tech" class="tech-item">
                {{ tech }}
              </span>
            </div>
            
            <div class="project-links">
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="link-item">
                <Github :size="18" />
                <span>Source Code</span>
              </a>
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="link-item link-item-primary">
                <ExternalLink :size="18" />
                <span>Live Demo</span>
              </a>
              <div v-if="!project.liveUrl" class="private-tag">
                <Code2 :size="16" />
                <span>Backend Only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="cta-wrapper">
        <a href="https://github.com/Arthur1220" target="_blank" class="btn btn-outline">
          <Github :size="18" />
          <span>{{ $t('projects.view_all_github') }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section { 
  padding: 8rem 2rem; 
}

.section-container { 
  max-width: 900px; 
  margin: 0 auto; 
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

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.project-item {
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--color-border);
}

.project-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.project-content {
  display: flex;
  flex-direction: column;
}

.project-type {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.project-title { 
  font-size: 2rem; 
  color: var(--color-heading);
  margin-bottom: 1rem; 
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text);
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 800px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.tech-item {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.tech-item:not(:last-child)::after {
  content: '·';
  margin-left: 0.75rem;
  color: var(--color-border);
}

.project-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.link-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text);
  transition: color 0.2s ease;
}

.link-item:hover {
  color: var(--color-primary);
}

.link-item-primary {
  color: var(--color-primary);
}

.link-item-primary:hover {
  opacity: 0.8;
}

.private-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.cta-wrapper {
  margin-top: 6rem;
  display: flex;
  justify-content: center;
}
</style>