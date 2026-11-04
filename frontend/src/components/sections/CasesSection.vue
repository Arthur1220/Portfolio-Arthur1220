<script setup>
import { ArrowRight, CheckCircle2, Github, Lock, Blocks, ExternalLink } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// Nó do diagrama: nome próprio (string) ou texto traduzido ({ pt, en }).
const nodeLabel = (node) => (typeof node === 'string' ? node : node[locale.value] ?? node.pt);

// Cada linha de `flow` é um caminho do diagrama, lido da esquerda para a direita.
const cases = [
  {
    id: 'brco',
    flow: [
      ['Vue 3 (Netlify)', { pt: 'Proxy /api (Netlify)', en: '/api proxy (Netlify)' }, 'API Express (Docker · EC2)', { pt: 'Equações BR-CORTE + solver LP', en: 'BR-CORTE equations + LP solver' }],
      ['API Express (Docker · EC2)', 'Prisma + SQLite', { pt: 'Alimentos · logs de uso', en: 'Feeds · usage logs' }],
      [{ pt: 'Painel admin (token HMAC)', en: 'Admin panel (HMAC token)' }, 'API Express (Docker · EC2)', { pt: 'Estatísticas · CRUD de alimentos', en: 'Stats · feed CRUD' }]
    ],
    stack: ['Node.js', 'Express', 'Prisma', 'SQLite', 'Zod', 'javascript-lp-solver', 'Vue 3', 'Pinia', 'Chart.js', 'Docker', 'AWS EC2', 'Netlify'],
    codeUrl: 'https://github.com/Arthur1220/BRCO---SIMPLE',
    liveUrl: 'https://brcosimple.netlify.app/',
    guestbook: false
  },
  {
    id: 'organizador',
    flow: [
      ['Telegram', 'Lambda Ingest', 'SQS FIFO + DLQ', 'Lambda Worker', 'Gemini + Postgres'],
      ['EventBridge Scheduler', { pt: 'Lambda Agendador', en: 'Scheduler Lambda' }, { pt: 'Lembretes · resumo semanal', en: 'Reminders · weekly summary' }],
      ['CloudFront', 'S3', { pt: 'Site · Mini App', en: 'Website · Mini App' }]
    ],
    stack: ['Python', 'Pydantic', 'SQLAlchemy', 'Postgres', 'Gemini', 'AWS Lambda', 'SQS FIFO', 'EventBridge', 'S3', 'CloudFront', 'CDK', 'GitHub Actions'],
    codeUrl: null,
    guestbook: false
  },
  {
    id: 'tcc',
    flow: [
      ['Vue.js', 'API Django', { pt: 'PostgreSQL (dados completos)', en: 'PostgreSQL (full data)' }],
      ['API Django', { pt: 'Carteira custodial', en: 'Custodial wallet' }, { pt: 'Contrato Solidity · Polygon (hash)', en: 'Solidity contract · Polygon (hash)' }]
    ],
    stack: ['Solidity', 'Hardhat', 'OpenZeppelin', 'Polygon', 'Django', 'PostgreSQL', 'Vue.js', 'Docker', 'Pytest'],
    codeUrl: 'https://github.com/Arthur1220/TCC',
    guestbook: true
  },
  {
    id: 'lexa',
    flow: [
      ['WhatsApp Business API', 'CRM (NestJS)', { pt: 'Pipeline assíncrono', en: 'Async pipeline' }, 'lexa-ai (FastAPI)', 'LLMs'],
      [{ pt: 'Scraper jurídico', en: 'Court-records scraper' }, 'lexa-ai (FastAPI)']
    ],
    stack: ['NestJS', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'LLMs'],
    codeUrl: null,
    guestbook: false
  }
];
</script>

<template>
  <section id="cases" class="cases-section">
    <div class="section-container">
      <h2 class="section-title">{{ $t('cases.title') }}</h2>
      <p class="section-subtitle">{{ $t('cases.subtitle') }}</p>

      <div class="cases-list">
        <article v-for="(item, index) in cases" :key="item.id" class="case">
          <header class="case-header">
            <span class="case-index">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="case-label">{{ $t(`cases.${item.id}.label`) }}</span>
          </header>
          <h3 class="case-title">{{ $t(`cases.${item.id}.title`) }}</h3>

          <h4 class="block-label">{{ $t('cases.problem') }}</h4>
          <p class="case-problem">{{ $t(`cases.${item.id}.problem`) }}</p>

          <h4 class="block-label">{{ $t('cases.architecture') }}</h4>
          <div class="diagram">
            <div v-for="(row, rowIndex) in item.flow" :key="rowIndex" class="diagram-row">
              <template v-for="(node, nodeIndex) in row" :key="nodeIndex">
                <span class="node">{{ nodeLabel(node) }}</span>
                <ArrowRight v-if="nodeIndex < row.length - 1" :size="14" class="arrow" />
              </template>
            </div>
          </div>

          <h4 class="block-label">{{ $t('cases.highlights') }}</h4>
          <ul class="highlights">
            <li v-for="(highlight, idx) in $tm(`cases.${item.id}.highlights`)" :key="idx">
              <CheckCircle2 :size="16" class="check" />
              <span>{{ $rt(highlight) }}</span>
            </li>
          </ul>

          <div class="metrics">
            <span v-for="(metric, idx) in $tm(`cases.${item.id}.metrics`)" :key="idx" class="metric">
              {{ $rt(metric) }}
            </span>
          </div>

          <footer class="case-footer">
            <div class="tech-stack">
              <span v-for="tech in item.stack" :key="tech" class="tech-badge">{{ tech }}</span>
            </div>
            <div class="case-links">
              <a v-if="item.codeUrl" :href="item.codeUrl" target="_blank" class="case-link">
                <Github :size="16" />
                <span>{{ $t('cases.code') }}</span>
              </a>
              <span v-else class="private">
                <Lock :size="14" />
                <span>{{ $t('cases.private_code') }}</span>
              </span>
              <a v-if="item.liveUrl" :href="item.liveUrl" target="_blank" class="case-link">
                <ExternalLink :size="16" />
                <span>Deploy</span>
              </a>
              <RouterLink v-if="item.guestbook" to="/guestbook" class="case-link">
                <Blocks :size="16" />
                <span>{{ $t('cases.live_guestbook') }}</span>
              </RouterLink>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cases-section {
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

.cases-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.case {
  padding: 2.5rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: border-color 0.2s ease;
}

.case:hover {
  border-color: rgba(var(--color-primary-rgb), 0.6);
}

.case-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.case-index {
  color: var(--color-primary);
}

.case-label {
  color: var(--color-text-muted);
}

.case-title {
  font-size: 1.6rem;
  margin-bottom: 2rem;
}

.block-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.case-problem {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.diagram {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  margin-bottom: 2rem;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.03);
}

[data-theme='dark'] .diagram {
  background: rgba(255, 255, 255, 0.04);
}

.diagram-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.node {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-heading);
  background: var(--color-background);
  white-space: nowrap;
}

.arrow {
  color: var(--color-primary);
  flex-shrink: 0;
}

.highlights {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.highlights li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  line-height: 1.6;
  color: var(--color-text);
}

.check {
  color: var(--color-primary);
  margin-top: 0.25rem;
  flex-shrink: 0;
}

.metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.metric {
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  color: var(--color-primary);
  border: 1px solid rgba(var(--color-primary-rgb), 0.4);
}

.case-footer {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text-muted);
}

.case-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
}

.case-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-heading);
}

.case-link:hover {
  color: var(--color-primary);
}

.private {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .case {
    padding: 1.5rem;
  }

  .case-title {
    font-size: 1.35rem;
  }

  .node {
    white-space: normal;
  }
}

/* No celular cada caminho vira uma coluna, com as setas apontando para baixo. */
@media (max-width: 600px) {
  .diagram {
    gap: 1.25rem;
  }

  .diagram-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
  }

  .diagram-row + .diagram-row {
    padding-top: 1.25rem;
    border-top: 1px dashed var(--color-border);
  }

  .arrow {
    transform: rotate(90deg);
    margin-left: 0.75rem;
  }
}
</style>
