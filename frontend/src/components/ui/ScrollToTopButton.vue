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
  align-items: center;
  justify-content: center;

  padding: 0.75rem;
  width: 45px;
  height: 45px;

  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  color: var(--color-text);

  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-top-btn:hover {
  transform: translateY(-3px);
  border-color: var(--color-text-muted);
  color: var(--color-heading);
  background-color: transparent;
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
