<script setup>
const mainSkillCategories = [
  {
    title: 'category1',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'SQL', icon: 'devicon-azuresqldatabase-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'C', icon: 'devicon-cplusplus-plain' },
      { name: 'C++', icon: 'devicon-c-plain' },
    ]
  },
  {
    title: 'category2',
    skills: [
      { name: 'Django', icon: 'devicon-django-plain' },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express.js', icon: 'devicon-express-original' },
    ]
  },
  {
    title: 'category3',
    skills: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    ]
  },
  {
    title: 'category4',
    skills: [
      { name: 'Solidity', icon: 'devicon-solidity-plain' },
      { name: 'Hardhat', icon: 'devicon-hardhat-plain' },
      { name: 'OpenZeppelin', icon: 'devicon-openzeppelin-plain' },
    ]
  }
];

const toolSkills = {
  title: 'category5',
  skills: [
    { name: 'GitHub Actions', icon: 'devicon-githubactions-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'Postman', icon: 'devicon-postman-plain' },
    { name: 'VS Code', icon: 'devicon-vscode-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-plain' },
    { name: 'Linux', icon: 'devicon-linux-plain' },
  ]
};
</script>

<template>
  <section id="skills" class="skills-section">
    <h2 class="section-title">{{ $t('skills.title') }}</h2>
    <p class="section-subtitle">{{ $t('skills.subtitle') }}</p>

    <div class="skills-grid">
      <div v-for="category in mainSkillCategories" :key="category.title" class="skill-card">
        <h3 class="card-title">{{ $t(`skills.${category.title}`) }}</h3>
        <div class="skills-list">
          <div v-for="skill in category.skills" :key="skill.name" class="skill-item">
            <i :class="skill.icon" class="skill-icon"></i>
            <span>{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="skill-card standalone-card">
      <h3 class="card-title">{{ $t(`skills.${toolSkills.title}`) }}</h3>
      <div class="skills-list standalone-list">
        <div v-for="skill in toolSkills.skills" :key="skill.name" class="skill-item">
          <i :class="skill.icon" class="skill-icon"></i>
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-icon {
  font-size: 28px;
  color: var(--color-primary);
  flex-shrink: 0;
}

.skills-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6rem 2rem;
  max-width: 960px;
  margin: 0 auto;
}
.section-title {
  font-size: 2.5rem;
  color: var(--color-heading);
  margin-bottom: 0rem;
}
.section-subtitle {
  font-size: 1.1rem;
  color: var(--color-text);
  opacity: 0.7;
  margin-bottom: 3rem;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
}
.skill-card {
  background-color: var(--color-card-background);
  border: 1px solid var(--color-border);
  padding: 2rem;
  border-radius: 8px;
  text-align: left;
}
.skill-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card-title {
  font-size: 1.3rem;
  color: var(--color-heading);
  margin-bottom: 1.5rem;
  border-left: 3px solid var(--color-primary);
  padding-left: 1rem;
}
.skills-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.skill-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.2s ease;
}
.skill-item span {
  font-size: 1rem;
  font-weight: 500;
}
.standalone-card {
  margin-top: 2rem;
  width: 100%;
}
.standalone-list {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
