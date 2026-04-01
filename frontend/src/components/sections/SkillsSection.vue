<script setup>
const mainSkillCategories = [
  {
    title: 'languages',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain', level: 'primary' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 'primary' },
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

const levelLabel = {
  primary: null,       // sem badge — é o padrão
  secondary: null,     // sem badge — conhece bem
  exploring: 'exploring',
};
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="section-container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('skills.title') }}</h2>
        <p class="section-subtitle">{{ $t('skills.subtitle') }}</p>
      </div>

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
          class="skill-category"
        >
          <h3 class="category-title">{{ $t(`skills.${category.title}`) }}</h3>
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

      <!-- Blocos extra standalone -->
      <div class="skill-category standalone-category">
        <h3 class="category-title">{{ $t(`skills.${aiTools.title}`) }}</h3>
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
  max-width: 900px;
  width: 100%;
}

.section-header {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-muted);
}

/* Legenda de níveis */
.legend {
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--color-text-muted);
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
  gap: 4rem 3rem;
}

.skill-category {
  display: flex;
  flex-direction: column;
}

.category-title {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
  color: var(--color-text-muted);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.75rem;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

/* Skill item */
.skill-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
}

.skill-icon {
  font-size: 1.25rem;
  color: var(--color-text);
  transition: color 0.2s;
}

.skill-item:hover .skill-icon {
  color: var(--color-primary);
}

.skill-name {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-heading);
  transition: color 0.2s;
}

.skill-item:hover .skill-name {
  color: var(--color-primary);
}

/* Hierarquia: primary = destaque total */
.level-primary .skill-icon,
.level-primary .skill-name {
  opacity: 1;
}

/* secondary = levemente esmaecido */
.level-secondary .skill-icon,
.level-secondary .skill-name {
  opacity: 0.6;
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

.standalone-category {
  margin-top: 4rem;
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