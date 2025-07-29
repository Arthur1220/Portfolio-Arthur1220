<script setup>
// 1. NÃO HÁ MAIS IMPORTAÇÃO DE ÍCONES AQUI.

// 2. A estrutura de dados agora contém as CLASSES CSS de cada ícone.
// A lista completa de classes está em https://devicon.dev/
const mainSkillCategories = [
  {
    title: 'category1',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'SQL', icon: 'devicon-azuresqldatabase-plain' },
      { name: 'C/C++', icon: 'devicon-cplusplus-plain' },
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
      { name: 'OpenZeppelin', icon: 'devicon-openzeppelin-plain' },
    ]
  },
  {
    title: 'category3',
    skills: [
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'GitHub Actions', icon: 'devicon-githubactions-plain' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain' },
      { name: 'Linux', icon: 'devicon-linux-plain' },
    ]
  },
  {
    title: 'category4',
    skills: [
      { name: 'Solidity', icon: 'devicon-solidity-plain' },
      { name: 'Hardhat', icon: 'devicon-hardhat-plain' },
      { name: 'Ethereum', icon: 'devicon-ethereum-original' },
    ]
  }
];

const toolSkills = {
  title: 'category5',
  skills: [
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'Postman', icon: 'devicon-postman-plain' },
    { name: 'VS Code', icon: 'devicon-vscode-plain' },
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
/* O único ajuste no CSS é no seletor .skill-icon */
.skill-icon {
  font-size: 28px; /* Controla o tamanho do ícone */
  color: var(--color-primary); /* Controla a cor */
  flex-shrink: 0;
}

/* O resto do seu CSS permanece o mesmo */
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
  margin-bottom: 0.5rem;
}
.section-subtitle {
  font-size: 1.1rem;
  opacity: 0.7;
  margin-bottom: 4rem;
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
.skill-item:hover {
  transform: translateX(5px);
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
