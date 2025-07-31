<script setup>
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';
import { Github, ExternalLink } from 'lucide-vue-next';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const myCarousel = ref(null);
const currentSlide = ref(0);

const goToSlide = (index) => {
  myCarousel.value.slideTo(index);
};

const projects = [
  {
    id: 'rastreabilidade',
    tech: [
      { name: 'Django', icon: 'devicon-django-plain' }, { name: 'Vue.js', icon: 'devicon-vuejs-plain' }, { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' }, { name: 'Solidity', icon: 'devicon-solidity-plain' },
    ],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: 'calculadora',
    tech: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' }, { name: 'Express', icon: 'devicon-express-original' }, { name: 'Vue.js', icon: 'devicon-vuejs-plain' }, { name: 'Docker', icon: 'devicon-docker-plain' }, { name: 'AWS', icon: 'devicon-amazonwebservices-original' },
    ],
    githubUrl: 'https://github.com/Arthur1220/BRCO-SIMPLE',
    liveUrl: 'https://brcosimple.netlify.app/',
  },
  {
    id: 'estimativa',
    tech: [
      { name: 'Python', icon: 'devicon-python-plain' }, { name: 'SQLAlchemy', icon: 'devicon-sqlalchemy-plain' },
    ],
    githubUrl: null,
    liveUrl: null,
  }
];
</script>

<template>
  <section id="projects" class="projects-section" data-aos="fade-up">
    <div class="section-container">
      <h2 class="section-title">{{ $t('projects.title') }}</h2>
      <p class="section-subtitle">{{ $t('projects.subtitle') }}</p>

      <div class="custom-pagination">
        <button
          v-for="(project, index) in projects"
          :key="project.id"
          @click="goToSlide(index)"
          :class="{ active: currentSlide === index }"
          :aria-label="`Ir para o projeto ${index + 1}`"
        >
          </button>
      </div>

      <Carousel ref="myCarousel" v-model="currentSlide" :wrap-around="true">
        <Slide v-for="project in projects" :key="project.id">
          <div class="project-card">
            <h3 class="project-title">{{ $t(`projects.project_list.${project.id}.title`) }}</h3>
            <p class="project-description">{{ $t(`projects.project_list.${project.id}.description`) }}</p>

            <div class="project-tech-icons">
              <div v-for="tech in project.tech" :key="tech.name" class="tech-item">
                <i :class="tech.icon" class="tech-icon"></i>
                <span>{{ tech.name }}</span>
              </div>
            </div>

            <div class="project-links">
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="project-link">
                <Github :size="20" />
                <span>{{ $t('projects.view_code') }}</span>
              </a>
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="project-link primary">
                <ExternalLink :size="20" />
                <span>{{ $t('projects.live_demo') }}</span>
              </a>
              <div v-if="!project.githubUrl && !project.liveUrl" class="private-tag">
                <span>{{ $t('projects.private_repo') }}</span>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>

      <a href="https://github.com/Arthur1220" target="_blank" class="github-cta-button">
        <span>{{ $t('projects.view_all_github') }}</span>
        <Github :size="22" />
      </a>

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
  position: relative;
}
.section-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.section-subtitle {
  font-size: 1.1rem;
  opacity: 0.7;
  margin-bottom: 2rem;
}

.custom-pagination {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.custom-pagination button {
  background-color: var(--color-border);
  border: none;
  border-radius: 50%;
  width: 7px;
  height: 7px;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}
.custom-pagination button:hover {
  background-color: var(--color-primary);
  opacity: 0.7;
}
.custom-pagination button.active {
  background-color: var(--color-primary);
  transform: scale(1.5);
}

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
  align-items: center;
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
.private-tag {
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  background-color: var(--color-card-background);
  border: 1px dashed var(--color-border);
  border-radius: 8px;
  opacity: 0.7;
}
.github-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-primary);
  background-color: transparent;
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.github-cta-button:hover {
  background-color: var(--color-primary);
  color: var(--color-background);
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: var(--color-card-background);
  border-radius: 50%;
  border: 1px solid var(--color-border);
  color: var(--color-primary);
}
@media (max-width: 768px) {
  :deep(.carousel__prev),
  :deep(.carousel__next) {
    display: none;
  }
}
</style>
