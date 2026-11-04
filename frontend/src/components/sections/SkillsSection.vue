<script setup>
const skillCategories = [
  {
    id: 'backend',
    skills: ['Node.js', 'TypeScript', 'NestJS', 'Express', 'Go', 'Python', 'Django', 'FastAPI', 'REST APIs', 'Microservices']
  },
  {
    id: 'cloud',
    skills: ['AWS Lambda', 'SQS', 'SNS', 'EventBridge', 'ECS', 'API Gateway', 'DynamoDB', 'S3', 'CloudFront', 'IAM', 'CloudWatch', 'EC2', 'CDK', 'Datadog']
  },
  {
    id: 'security',
    skills: ['JWT', 'IAM', 'Secrets', 'OWASP', 'OIDC']
  },
  {
    id: 'ai',
    skills: ['OpenAI', 'Gemini', 'Claude', 'Prompt Engineering', 'RAG', 'Evals', 'Pydantic']
  },
  {
    id: 'blockchain',
    skills: ['Solidity', 'Hardhat', 'OpenZeppelin', 'Polygon', 'EVM', 'go-ethereum']
  },
  {
    id: 'data',
    skills: ['PostgreSQL', 'DynamoDB', 'MySQL', 'MongoDB','Supabase', 'Prisma', 'GORM', 'SQLAlchemy']
  },
  {
    id: 'infra',
    skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'Linux', 'Pytest', 'Regression tests', 'Hardhat tests']
  }
];
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="section-container">
      <h2 class="section-title">{{ $t('skills.title') }}</h2>
      <p class="section-subtitle">{{ $t('skills.subtitle') }}</p>

      <div class="skills-grid">
        <div v-for="category in skillCategories" :key="category.id" class="skill-category">
          <h3 class="category-title">{{ $t(`skills.categories.${category.id}.title`) }}</h3>
          <p class="category-desc">{{ $t(`skills.categories.${category.id}.desc`) }}</p>
          <div class="skills-list">
            <span v-for="skill in category.skills" :key="skill" class="skill-chip">{{ skill }}</span>
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
  gap: 1.5rem;
}

.skill-category {
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: border-color 0.2s ease;
}

.skill-category:hover {
  border-color: rgba(var(--color-primary-rgb), 0.6);
}

.category-title {
  font-size: 1.1rem;
  color: var(--color-heading);
  margin-bottom: 0.35rem;
  font-weight: 600;
}

.category-desc {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-chip {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  padding: 0.25rem 0.6rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text);
}

@media (max-width: 768px) {
  .skills-grid { grid-template-columns: 1fr; }
}
</style>
