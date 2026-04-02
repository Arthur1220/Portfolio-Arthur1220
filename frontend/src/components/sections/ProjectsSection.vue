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
      <h2 class="section-title">{{ $t('projects.title') }}</h2>
      <p class="section-subtitle">{{ $t('projects.subtitle') }}</p>
      
      <div class="projects-list">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-item"
        >
          <div class="project-header">
            <h3 class="project-title">{{ $t(`projects.project_list.${project.id}.title`) }}</h3>
            <span class="project-type">{{ project.type }}</span>
            
            <div class="project-links">
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="link-item">
                <Github :size="16" />
                <span>Source</span>
              </a>
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="link-item deploy-link">
                <ExternalLink :size="16" />
                <span>Deploy</span>
              </a>
              <div v-if="!project.liveUrl" class="private-tag">
                <Code2 :size="16" />
                <span>Private</span>
              </div>
            </div>
          </div>
          
          <div class="project-content">
            <p class="project-description">{{ $t(`projects.project_list.${project.id}.description`) }}</p>
            
            <div class="tech-stack">
              <span v-for="tech in project.tech" :key="tech" class="tech-badge">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="cta-wrapper">
        <a href="https://github.com/Arthur1220" target="_blank" class="github-button">
          <span>{{ $t('projects.view_all_github') }}</span>
          <Github :size="18" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 8rem 2rem;
  font-family: var(--font-sans);
}

.section-container {
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.25rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.section-subtitle {
  margin-bottom: 4rem;
  font-size: 1.125rem;
  color: var(--color-text);
  opacity: 0.8;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.project-item {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--color-border);
}

.project-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.project-header {
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.35rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  font-weight: 600;
  transition: color 0.2s ease;
}

.project-item:hover .project-title {
  color: var(--color-primary);
}

.project-type {
  font-size: 0.85rem;
  text-transform: uppercase;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
  font-weight: 500;
  margin-bottom: 2rem;
}

.project-content {
  display: flex;
  flex-direction: column;
}

.project-description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text);
  opacity: 0.9;
  margin-bottom: 2rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  background-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text-muted);
}

.project-links {
  display: flex;
  gap: 1.25rem;
  align-items: center;
  margin-top: auto; /* Push to bottom of header column */
}

.link-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.7;
  transition: opacity 0.2s, color 0.2s;
  text-decoration: none;
}

.link-item:hover {
  opacity: 1;
  color: var(--color-primary);
  transform: translateY(-1px);
}

.deploy-link {
  color: var(--color-heading);
  opacity: 0.9;
  font-weight: 500;
}

.deploy-link:hover {
  color: var(--color-primary);
  opacity: 1;
  transform: translateY(-1px);
}

.private-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  opacity: 0.8;
  font-style: italic;
}

.cta-wrapper {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
}

.github-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1.5rem;
  color: var(--color-heading);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: background-color 0.2s;
  text-decoration: none;
}

.github-button:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-background);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .project-item {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-type {
    margin-bottom: 1rem;
  }

  .project-links {
    margin-top: 1rem;
  }
}
</style>