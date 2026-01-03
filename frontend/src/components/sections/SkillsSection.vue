<script setup>
const mainSkillCategories = [
  {
    title: 'languages',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'Go', icon: 'devicon-go-original-wordmark' },
      { name: 'Solidity', icon: 'devicon-solidity-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'SQL', icon: 'devicon-azuresqldatabase-plain' },
    ]
  },
  {
    title: 'frameworks',
    skills: [
      { name: 'Django', icon: 'devicon-django-plain' },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
    ]
  },
  {
    title: 'infrastructure',
    skills: [
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain' },
      { name: 'Linux', icon: 'devicon-linux-plain' },
      { name: 'Git', icon: 'devicon-git-plain' },
    ]
  },
  {
    title: 'databases',
    skills: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      { name: 'SQLAlchemy', icon: 'devicon-sqlalchemy-plain' },
    ]
  }
];

const aiTools = {
  title: 'tools_ia',
  skills: [
    { name: 'GitHub Copilot', icon: 'devicon-github-original' },
    { name: 'Gemini', icon: 'devicon-google-plain' },
    { name: 'Claude', icon: 'devicon-anthropic-plain' },
    { name: 'Postman', icon: 'devicon-postman-plain' },
  ]
};
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="section-container">
      <h2 class="section-title">// {{ $t('skills.title') }}</h2>
      <p class="section-subtitle">{{ $t('skills.subtitle') }}</p>

      <div class="skills-grid">
        <div v-for="category in mainSkillCategories" :key="category.title" class="card-base card-interactive skill-card">
          <h3 class="card-title">{{ $t(`skills.${category.title}`) }}</h3>
          <div class="skills-list">
            <div v-for="skill in category.skills" :key="skill.name" class="skill-item">
              <i :class="skill.icon" class="skill-icon"></i>
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card-base card-interactive skill-card standalone-card">
        <h3 class="card-title">{{ $t(`skills.${aiTools.title}`) }}</h3>
        <div class="skills-list standalone-list">
          <div v-for="skill in aiTools.skills" :key="skill.name" class="skill-item">
            <i :class="skill.icon" class="skill-icon"></i>
            <span>{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 8rem 2rem;
  display: flex;
  justify-content: center;
}

.section-container {
  max-width: 1100px;
  width: 100%;
}

.section-title {
  color: var(--color-primary);
  margin-bottom: 1rem;
  text-align: left;
}

.section-subtitle {
  font-family: var(--font-mono);
  opacity: 0.7;
  margin-bottom: 4rem;
  text-align: left;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

/* O card-base já fornece fundo, borda e raio. Aqui ajustamos o padding local. */
.skill-card {
  padding: 2.5rem;
}

.card-title {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2rem;
  opacity: 0.6;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-icon {
  font-size: 1.5rem;
  color: var(--color-primary);
}

.skill-item span {
  font-family: var(--font-mono);
  font-size: 0.9rem;
}

.standalone-card {
  margin-top: 2rem;
  height: auto;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
