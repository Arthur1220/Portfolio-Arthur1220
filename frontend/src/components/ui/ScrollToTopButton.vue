<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronUp } from 'lucide-vue-next';

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <Transition name="slide-up">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-top-btn"
      aria-label="Voltar ao topo"
    >
      <ChevronUp :size="20" class="icon" />
      <span class="btn-text">TOP</span>
    </button>
  </Transition>
</template>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  padding: 0.75rem;
  min-width: 45px;

  background-color: var(--color-card-background);
  border: 1px solid var(--color-border);
  border-radius: 4px; /* Casando com o raio dos seus botões e cards */
  color: var(--color-primary);

  cursor: pointer;
  font-family: var(--font-mono);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-text {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.scroll-top-btn:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
  box-shadow: 0 0 15px rgba(var(--color-primary-rgb), 0.2);
  background: rgba(var(--color-primary-rgb), 0.05);
}

/* Transição refinada */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
