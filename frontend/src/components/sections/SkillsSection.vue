<script setup>
const mainSkillCategories = [
  {
    title: 'languages',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain', level: 'primary' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 'primary' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain', level: 'secondary' },
      { name: 'Go', icon: 'devicon-go-original-wordmark', level: 'exploring' },
      { name: 'Solidity', icon: 'devicon-solidity-plain', level: 'secondary' },
      { name: 'SQL', icon: 'devicon-azuresqldatabase-plain', level: 'primary' },
    ]
  },
  {
    title: 'frameworks',
    skills: [
      { name: 'Django', icon: 'devicon-django-plain', level: 'primary' },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain', level: 'primary' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain', level: 'primary' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain', level: 'secondary' },
      { name: 'Prisma', icon: 'devicon-prisma-plain', level: 'secondary' },
      { name: 'Express.js', icon: 'devicon-express-original', level: 'secondary' },
      { name: 'Fiber', icon: 'devicon-go-plain', level: 'secondary' },
    ]
  },
  {
    title: 'infrastructure',
    skills: [
      { name: 'Docker', icon: 'devicon-docker-plain', level: 'primary' },
      { name: 'Linux', icon: 'devicon-linux-plain', level: 'primary' },
      { name: 'Git', icon: 'devicon-git-plain', level: 'primary' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain', level: 'secondary' },
      { name: 'GitHub Actions', icon: 'devicon-githubactions-plain', level: 'secondary' },
    ]
  },
  {
    title: 'databases',
    skills: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', level: 'primary' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain', level: 'secondary' },
      { name: 'MySQL', icon: 'devicon-mysql-plain', level: 'secondary' },
      { name: 'SQLite', icon: 'devicon-sqlite-plain', level: 'secondary' },
      { name: 'SQLAlchemy', icon: 'devicon-sqlalchemy-plain', level: 'secondary' },
    ]
  }
];

const aiTools = {
  title: 'tools_ia',
  skills: [
    { name: 'GitHub Copilot', icon: 'devicon-github-original', level: 'primary' },
    { name: 'Claude', icon: 'devicon-anthropic-plain', level: 'primary' },
    { name: 'Gemini', icon: 'devicon-google-plain', level: 'secondary' },
    { name: 'Postman', icon: 'devicon-postman-plain', level: 'secondary' },    
  ]
};
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="section-container">
      <h2 class="section-title">{{ $t('skills.title') }}</h2>
      <p class="section-subtitle">{{ $t('skills.subtitle') }}</p>

      <div class="skills-grid">
        <div
          v-for="category in mainSkillCategories"
          :key="category.title"
          class="skill-category"
        >
          <h3 class="category-title">{{ $t(`skills.${category.title}`) }}</h3>
          <div class="skills-list">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill-item"
            >
              <i :class="skill.icon" class="skill-icon"></i>
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="skill-category standalone-category">
        <h3 class="category-title">{{ $t(`skills.${aiTools.title}`) }}</h3>
        <div class="skills-list standalone-list">
          <div
            v-for="skill in aiTools.skills"
            :key="skill.name"
            class="skill-item"
          >
            <i :class="skill.icon" class="skill-icon"></i>
            <span class="skill-name">{{ skill.name }}</span>
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
  font-family: var(--font-sans);
}

.section-container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}

.section-title {
  font-size: 2.25rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  text-align: left;
  font-weight: 600;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text);
  opacity: 0.8;
  margin-bottom: 3rem;
  text-align: left;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem 4rem;
  margin-bottom: 3rem;
}

.skill-category {
  display: flex;
  flex-direction: column;
}

.category-title {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border);
  font-weight: 500;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 1.5rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.skill-icon {
  font-size: 24px;
  color: var(--color-heading);
  transition: opacity 0.2s;
}

.skill-name {
  font-size: 0.95rem;
  color: var(--color-text);
  transition: opacity 0.2s, color 0.2s;
}

.skill-item:hover .skill-icon,
.skill-item:hover .skill-name {
  color: var(--color-primary);
  opacity: 1;
  transform: translateY(-1px);
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.2s ease;
}

.standalone-category {
  margin-top: 1rem;
}

.standalone-list {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 768px) {
  .skills-grid { grid-template-columns: 1fr; }
  .standalone-list { grid-template-columns: repeat(2, 1fr); }
}
</style>