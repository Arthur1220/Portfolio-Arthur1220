<script setup>
const mainSkillCategories = [
  {
    title: 'languages',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain', level: 'primary' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 'primary' },
      { name: 'Go', icon: 'devicon-go-original-wordmark', level: 'primary' },
      { name: 'SQL', icon: 'devicon-azuresqldatabase-plain', level: 'primary' },
      { name: 'C', icon: 'devicon-c-plain', level: 'primary' },
      { name: 'Solidity', icon: 'devicon-solidity-plain', level: 'secondary' },
    ]
  },
  {
    title: 'frameworks',
    skills: [
      { name: 'Django', icon: 'devicon-django-plain', level: 'primary' },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain', level: 'primary' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain', level: 'primary' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain', level: 'primary' },
      { name: 'Express.js', icon: 'devicon-express-original', level: 'primary' },
      { name: 'Prisma', icon: 'devicon-prisma-plain', level: 'secondary' },
      { name: 'Flask', icon: 'devicon-flask-plain', level: 'secondary' },
    ]
  },
  {
    title: 'infrastructure',
    skills: [
      { name: 'Docker', icon: 'devicon-docker-plain', level: 'primary' },
      { name: 'Linux', icon: 'devicon-linux-plain', level: 'primary' },
      { name: 'Git', icon: 'devicon-git-plain', level: 'primary' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain', level: 'primary' },
      { name: 'GitHub Actions', icon: 'devicon-githubactions-plain', level: 'secondary' },

    ]
  },
  {
    title: 'databases',
    skills: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', level: 'primary' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain', level: 'primary' },
      { name: 'MySQL', icon: 'devicon-mysql-plain', level: 'primary' },
      { name: 'SQLite', icon: 'devicon-sqlite-plain', level: 'primary' },
      { name: 'SQLAlchemy', icon: 'devicon-sqlalchemy-plain', level: 'secondary' },
      { name: 'Redis', icon: 'devicon-redis-plain', level: 'secondary' },
    ]
  }
];

const aiTools = {
  title: 'tools_ia',
  skills: [
    { name: 'GitHub Copilot', icon: 'devicon-github-original', level: 'primary' },
    { name: 'Claude', icon: 'devicon-anthropic-plain', level: 'primary' },
    { name: 'Gemini', icon: 'devicon-google-plain', level: 'primary' },
    { name: 'Postman', icon: 'devicon-postman-plain', level: 'primary' },    
  ]
};

const levelLabel = {
  primary: null,       // sem badge — é o padrão
  secondary: null,     // sem badge — conhece bem
  exploring: 'exploring',
};
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="section-container">
      <h2 class="section-title">// {{ $t('skills.title') }}</h2>
      <p class="section-subtitle">{{ $t('skills.subtitle') }}</p>

      <!-- Legenda de níveis -->
      <div class="legend">
        <span class="legend-item">
          <span class="legend-dot primary"></span>
          {{ $t('skills.legend_primary') }}
        </span>
        <span class="legend-item">
          <span class="legend-dot secondary"></span>
          {{ $t('skills.legend_secondary') }}
        </span>
        <span class="legend-item">
          <span class="legend-dot exploring"></span>
          {{ $t('skills.legend_exploring') }}
        </span>
      </div>

      <div class="skills-grid">
        <div
          v-for="category in mainSkillCategories"
          :key="category.title"
          class="card-base card-interactive skill-card"
        >
          <h3 class="card-title">{{ $t(`skills.${category.title}`) }}</h3>
          <div class="skills-list">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill-item"
              :class="`level-${skill.level}`"
            >
              <i :class="skill.icon" class="skill-icon"></i>
              <span class="skill-name">{{ skill.name }}</span>
              <span v-if="levelLabel[skill.level]" class="skill-badge">
                {{ levelLabel[skill.level] }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card de IA standalone -->
      <div class="card-base card-interactive skill-card standalone-card">
        <h3 class="card-title">{{ $t(`skills.${aiTools.title}`) }}</h3>
        <div class="skills-list standalone-list">
          <div
            v-for="skill in aiTools.skills"
            :key="skill.name"
            class="skill-item"
            :class="`level-${skill.level}`"
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
  margin-bottom: 2rem;
  text-align: left;
}

/* Legenda de níveis */
.legend {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  opacity: 0.6;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.legend-dot.primary   { background: var(--color-primary); }
.legend-dot.secondary { background: var(--color-primary); opacity: 0.35; }
.legend-dot.exploring { background: #ffbd2e; }

/* Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

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
  gap: 1.25rem 1.5rem;
}

/* Skill item com hierarquia visual */
.skill-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
}

.skill-icon {
  font-size: 1.5rem;
  color: var(--color-primary);
  transition: opacity 0.2s;
}

.skill-name {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  transition: opacity 0.2s;
}

/* Hierarquia: primary = destaque total */
.level-primary .skill-icon,
.level-primary .skill-name {
  opacity: 1;
}

/* secondary = levemente esmaecido */
.level-secondary .skill-icon,
.level-secondary .skill-name {
  opacity: 0.45;
}

/* exploring = ícone amarelo + badge */
.level-exploring .skill-icon {
  color: #ffbd2e;
  opacity: 1;
}

.level-exploring .skill-name {
  opacity: 1;
}

.skill-badge {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  padding: 2px 7px;
  border-radius: 4px;
  background: rgba(255, 189, 46, 0.12);
  border: 1px solid rgba(255, 189, 46, 0.35);
  color: #ffbd2e;
  white-space: nowrap;
}

.standalone-card {
  margin-top: 2rem;
  height: auto;
}

.standalone-list {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 768px) {
  .skills-grid { grid-template-columns: 1fr; }
  .standalone-list { grid-template-columns: repeat(2, 1fr); }
  .legend { gap: 1rem; flex-wrap: wrap; }
}
</style>