<script setup>
import { MapPin, Mail, Github, Linkedin } from 'lucide-vue-next';
import profilePhoto from '@/assets/profile/profile-05.jpg';
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <div class="terminal-window">
        <div class="terminal-header">
          <div class="terminal-controls">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="terminal-title">bio.sh — arthur-azevedo</div>
          <img :src="profilePhoto" alt="Arthur Marques Azevedo" class="terminal-avatar" />
        </div>
        <div class="terminal-body">
          <p class="greeting-text">// {{ $t('hero.greeting') }}</p>
          <h1 class="main-name">{{ $t('hero.name') }}</h1>
          <h2 class="dev-title">{{ $t('hero.professional_title') }}</h2>
          <div class="status-line">
            {{ $t('hero.status') }}<span class="cursor">█</span>
          </div>
          <div class="meta-info">
            <div class="info-block">
              <MapPin :size="18" class="text-primary" />
              <span>{{ $t('hero.location') }}</span>
            </div>
          </div>
          <div class="social-actions">
            <a href="https://github.com/Arthur1220" target="_blank" class="btn btn-outline">
              <Github :size="20" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/azevedo-arthur" target="_blank" class="btn btn-outline">
              <Linkedin :size="20" />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:arthurmarquesazevedo@gmail.com" class="btn btn-outline">
              <Mail :size="20" />
              <span>Email</span>
            </a>
          </div>
          <div class="terminal-footer">
            <span class="prompt">$</span> <span class="cursor-underscore">_</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
  padding: 2rem;
}

.hero-content {
  width: 100%;
  max-width: 1300px;
}

.terminal-window {
  background-color: var(--color-card-background);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(39, 201, 63, 0.05);
}

.terminal-header {
  background-color: #1a1a1a;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
}

.terminal-controls {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.terminal-title {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: #666;
}

/* Avatar no header do terminal */
.terminal-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 1.5px solid var(--color-primary);
  box-shadow: 0 0 8px rgba(39, 201, 63, 0.35);
}

.terminal-body {
  padding: 3rem 2.5rem 2rem;
}

.greeting-text {
  font-family: var(--font-mono);
  color: var(--color-primary);
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.main-name {
  font-size: 3.5rem;
  line-height: 1;
  margin-bottom: 1rem;
}

.dev-title {
  font-family: var(--font-sans);
  font-size: 1.4rem;
  font-weight: 400;
  opacity: 0.8;
  margin-bottom: 1rem;
}

.status-line {
  font-family: var(--font-mono);
  color: var(--color-primary);
  font-size: 0.95rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.cursor {
  animation: blink 1s infinite;
}

.meta-info {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
}

.info-block {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.social-actions {
  display: flex;
  gap: 1.5rem;
}

.text-primary {
  color: var(--color-primary);
}

.terminal-footer {
  margin-top: 1.5rem;
  font-family: var(--font-mono);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.6;
}

.prompt {
  color: var(--color-primary);
}

.cursor-underscore {
  animation: blink 1s infinite;
}

@keyframes blink {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

@media (max-width: 768px) {
  .main-name { font-size: 2.5rem; }
  .dev-title { font-size: 1.1rem; }
  .terminal-body { padding: 2rem 1.5rem 1.5rem; }
  .meta-info { gap: 1rem; }
  .terminal-avatar { width: 28px; height: 28px; }
}
</style>