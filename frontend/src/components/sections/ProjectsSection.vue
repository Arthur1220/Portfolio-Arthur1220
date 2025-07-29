<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Github, ExternalLink } from 'lucide-vue-next';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const projects = [
  {
    title: 'Sistema de Rastreabilidade Animal com Blockchain',
    description: 'Plataforma full-stack para rastreabilidade imutável no agronegócio, solucionando o problema de fraude. A principal inovação é uma arquitetura de carteira custodial no back-end que abstrai 100% da complexidade da Web3 para o usuário final.',
    tech: [
      { name: 'Django', icon: 'devicon-django-plain' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'Solidity', icon: 'devicon-solidity-plain' },
      { name: 'Hardhat', icon: 'devicon-hardhat-plain' },
      { name: 'Polygon', icon: 'devicon-polygon-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
    ],
    githubUrl: 'https://github.com/Arthur1220/tcc-rastreabilidade-animal',
    liveUrl: null,
  },
  {
    title: 'Calculadora Nutricional para Ovinos e Caprinos',
    description: 'Plataforma web de acesso livre para realizar cálculos de exigências nutricionais para ovinos e caprinos. Construí uma API RESTful segura, conteinerizada com Docker e implantada em uma instância AWS EC2.',
    tech: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-original' },
    ],
    githubUrl: 'https://github.com/Arthur1220/calculadora-nutricional-brco',
    liveUrl: '#',
  },
];
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="section-container">
      <h2 class="section-title">{{ $t('projects.title') }}</h2>
      <p class="section-subtitle">{{ $t('projects.subtitle') }}</p>

      <Carousel :items-to-show="1" :wrap-around="true">
        <Slide v-for="project in projects" :key="project.title">
          <div class="project-card">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <div class="project-tech-icons">
              <div v-for="tech in project.tech" :key="tech.name" class="tech-item">
                <i :class="tech.icon" class="tech-icon"></i>
                <span>{{ tech.name }}</span>
              </div>
            </div>

            <div class="project-links">
              <a :href="project.githubUrl" target="_blank" class="project-link">
                <Github :size="20" />
                <span>{{ $t('projects.view_code') }}</span>
              </a>
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="project-link primary">
                <ExternalLink :size="20" />
                <span>{{ $t('projects.live_demo') }}</span>
              </a>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>

    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 6rem 1rem;
}
.section-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  /* Essencial para o posicionamento absoluto da paginação */
  position: relative;
}
.section-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.section-subtitle {
  font-size: 1.1rem;
  opacity: 0.7;
  margin-bottom: 3.5rem; /* Aumenta o espaço para os pontos */
}

/* --- ESTILOS DO CARD --- */
.project-card {
  width: 98%;
  margin: 0 auto;
  height: 100%;
  padding: 2.5rem;
  background-color: var(--color-card-background);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  text-align: left;
  display: flex;
  flex-direction: column;
}
.project-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.project-description {
  margin-bottom: 2rem;
  line-height: 1.7;
  flex-grow: 1;
}
.project-tech-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.tech-icon {
  font-size: 2rem;
}
.tech-item span {
  font-size: 0.8rem;
  font-weight: 500;
}
.project-links {
  display: flex;
  gap: 1.5rem;
}
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: all 0.3s ease;
}
.project-link:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
.project-link.primary {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}
.project-link.primary:hover {
  filter: brightness(1.1);
  color: #fff;
}


/* --- CSS CORRIGIDO E FINAL PARA O CARROSSEL --- */

/* 1. POSICIONAMENTO DA PAGINAÇÃO */
:deep(.carousel__pagination) {
  position: absolute; /* Tira a paginação do fluxo normal */
  top: -30px; /* Distância do topo do container da seção */
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajuste fino da centralização */
  z-index: 10;
}

/* 2. ESTILO DOS PONTOS (BOLINHAS) */
:deep(.carousel__pagination-button) {
  padding: 5px;
}
:deep(.carousel__pagination-button::after) {
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 50%; /* Garante que seja um círculo */
  background-color: var(--color-border);
}
:deep(.carousel__pagination-button--active::after) {
  background-color: var(--color-primary); /* Cor para o ponto ativo */
}


/* 3. ESTILO DAS SETAS DE NAVEGAÇÃO */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: var(--color-card-background);
  border-radius: 50%;
  border: 1px solid var(--color-border);
  color: var(--color-primary);
  transition: all 0.2s ease;
  width: 40px;
  height: 40px;
}
:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: var(--color-primary);
  color: var(--color-background);
}

/* --- RESPONSIVIDADE --- */
@media (max-width: 768px) {
  :deep(.carousel__prev),
  :deep(.carousel__next) {
    display: none;
  }
}
</style>
