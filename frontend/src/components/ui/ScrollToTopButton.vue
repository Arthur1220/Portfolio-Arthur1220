<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowUp } from 'lucide-vue-next';

// Controla a visibilidade do botão
const isVisible = ref(false);

// Função que verifica a posição do scroll
const handleScroll = () => {
  // Mostra o botão se o scroll passar de 400 pixels
  isVisible.value = window.scrollY > 400;
};

// Função para rolar a página suavemente para o topo
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// Adiciona e remove o "ouvinte" de scroll para otimizar a performance
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <Transition name="fade">
    <button v-if="isVisible" @click="scrollToTop" class="scroll-to-top-btn" aria-label="Voltar ao topo">
      <ArrowUp :size="24" />
    </button>
  </Transition>
</template>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  z-index: 1000;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-background);
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.scroll-to-top-btn:hover {
  transform: translateY(-5px);
  filter: brightness(1.1);
}

/* Animação de fade para o botão aparecer e desaparecer */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
