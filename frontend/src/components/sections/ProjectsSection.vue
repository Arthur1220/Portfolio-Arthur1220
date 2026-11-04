<script setup>
import { ref, computed } from 'vue';
import { Github, ExternalLink, Lock, ChevronDown, CheckCircle2 } from 'lucide-vue-next';

const projects = [
  {
    id: 'orbit',
    type: 'Full-Stack | DevTools',
    tech: ['Go', 'Fiber', 'Vue.js', 'TypeScript', 'SQLite', 'Docker', 'GitHub OAuth'],
    githubUrl: null,
    liveUrl: 'https://getorbitapp.netlify.app/'
  },
  {
    id: 'exlege',
    type: 'Full-Stack | AI',
    tech: ['Go', 'PostgreSQL', 'pgvector', 'RAG', 'Vue.js', 'AWS Lightsail'],
    githubUrl: null,
    liveUrl: 'https://exlege.pro'
  },
  {
    id: 'go-chain-turbo',
    type: 'Blockchain | Infra',
    tech: ['Go', 'Gin', 'go-ethereum', 'PostgreSQL', 'Vue.js', 'Pinia'],
    githubUrl: 'https://github.com/Arthur1220/GoChain',
    liveUrl: null
  },
  {
    id: 'dockyard',
    type: 'Full-Stack | DevTools',
    tech: ['Go', 'Vue.js', 'Docker'],
    githubUrl: 'https://github.com/Arthur1220/dockyard',
    liveUrl: null
  },
  {
    id: 'finance-whatsapp',
    type: 'Back-end | AI',
    tech: ['Django', 'Celery', 'Redis', 'Gemini', 'WhatsApp API', 'Docker'],
    githubUrl: 'https://github.com/Arthur1220/Finance-Whatsapp',
    liveUrl: null
  },
  {
    id: 'blockchain-consorcio',
    type: 'Blockchain | RWA',
    tech: ['Go', 'Vue.js', 'Solidity', 'Ethereum'],
    githubUrl: 'https://github.com/Arthur1220/Blockchain-consorcio',
    liveUrl: null
  },
  {
    id: 'identity-registry',
    type: 'Blockchain | Web3',
    tech: ['Solidity', 'Vue.js', 'Ethereum'],
    githubUrl: 'https://github.com/Arthur1220/IdentityRegistry-blockchain',
    liveUrl: null
  },
  {
    id: 'academic-certificate',
    type: 'Blockchain | Web3',
    tech: ['Solidity', 'Vue.js', 'Python'],
    githubUrl: 'https://github.com/Arthur1220/AcademicCertificate-blockchain',
    liveUrl: null
  },
  {
    id: 'server-motd',
    type: 'DevOps | Shell',
    tech: ['Bash', 'Linux', 'Docker'],
    githubUrl: 'https://github.com/Arthur1220/server-motd',
    liveUrl: null
  }
];

// Os três primeiros são os destaques, com mais detalhes; o botão revela o resto de uma vez.
const FEATURED_COUNT = 3;
const showAll = ref(false);
const visibleProjects = computed(() => (showAll.value ? projects : projects.slice(0, FEATURED_COUNT)));
const hasMore = computed(() => !showAll.value && projects.length > FEATURED_COUNT);

function loadMore() {
  showAll.value = true;
}
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="section-container">
      <h2 class="section-title">{{ $t('projects.title') }}</h2>
      <p class="section-subtitle">{{ $t('projects.subtitle') }}</p>
      
      <div class="projects-list">
        <div
          v-for="project in visibleProjects"
          :key="project.id"
          class="project-item"
        >
          <div class="project-header">
            <h3 class="project-title">{{ $t(`projects.project_list.${project.id}.title`) }}</h3>
            <span class="project-type">{{ project.type }}</span>
            
            <div class="project-links">
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="link-item">
                <Github :size="16" />
                <span>{{ $t('cases.code') }}</span>
              </a>
              <div v-else class="private-tag">
                <Lock :size="14" />
                <span>{{ $t('projects.private_code') }}</span>
              </div>
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="link-item deploy-link">
                <ExternalLink :size="16" />
                <span>Deploy</span>
              </a>
            </div>
          </div>

          <div class="project-content">
            <p class="project-description">{{ $t(`projects.project_list.${project.id}.description`) }}</p>

            <ul v-if="Array.isArray($tm(`projects.project_list.${project.id}.highlights`))" class="project-highlights">
              <li v-for="(highlight, idx) in $tm(`projects.project_list.${project.id}.highlights`)" :key="idx">
                <CheckCircle2 :size="15" class="check" />
                <span>{{ $rt(highlight) }}</span>
              </li>
            </ul>
            
            <div class="tech-stack">
              <span v-for="tech in project.tech" :key="tech" class="tech-badge">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="hasMore" class="load-more-wrapper">
        <button type="button" class="load-more-button" @click="loadMore">
          <span>{{ $t('projects.load_more') }}</span>
          <ChevronDown :size="18" />
        </button>
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

.project-highlights {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: -1rem;
  margin-bottom: 2rem;
}

.project-highlights li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text);
}

.check {
  color: var(--color-primary);
  margin-top: 0.3rem;
  flex-shrink: 0;
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
}

.load-more-wrapper {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}

.load-more-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.4rem;
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, transform 0.2s;
}

.load-more-button:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-1px);
}

.cta-wrapper {
  margin-top: 4rem;
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