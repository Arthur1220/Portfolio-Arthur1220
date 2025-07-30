<script setup>
import { Wallet, Send } from 'lucide-vue-next';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

// Adicionei mais mensagens de exemplo para que o carrossel funcione
const mockMessages = [
  {
    author: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    message: 'Ótimo portfólio, parabéns pelo projeto!',
    timestamp: new Date(Date.now() - 120000).toLocaleString() // 2 minutos atrás
  },
  {
    author: '0x1Db3439a222C519ab44bb1144fC28167b4Fa6EE6',
    message: 'Achei a seção de projetos muito interessante.',
    timestamp: new Date(Date.now() - 3600000).toLocaleString() // 1 hora atrás
  },
  {
    author: '0x2b8A42Db0D4C2FB2e228532E0231941573652eF8',
    message: 'A prova de conceito com blockchain é um grande diferencial. Sucesso!',
    timestamp: new Date(Date.now() - 86400000).toLocaleString() // 1 dia atrás
  },
  {
    author: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    message: 'Design limpo e direto ao ponto.',
    timestamp: new Date(Date.now() - 172800000).toLocaleString() // 2 dias atrás
  }
];

const formatAddress = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;
</script>

<template>
  <section id="guestbook" class="guestbook-section" data-aos="fade-up">
    <h2 class="section-title">{{ $t('guestbook.title') }}</h2>
    <p class="section-subtitle">{{ $t('guestbook.subtitle') }}</p>

    <div class="guestbook-container">
      <div class="wallet-area">
        <button class="connect-button">
          <Wallet :size="20" />
          <span>{{ $t('guestbook.connect_wallet') }}</span>
        </button>
      </div>

      <div class="form-area">
        <input type="text" :placeholder="$t('guestbook.placeholder')" />
        <button class="send-button">
          <Send :size="18" />
          <span>{{ $t('guestbook.send_message') }}</span>
        </button>
      </div>
      <p class="status-message">&nbsp;</p>

      <div class="messages-carousel-wrapper">
        <Carousel :items-to-show="2" :wrap-around="true">
          <Slide v-for="(msg, index) in mockMessages" :key="index">
            <div class="message-card">
              <p class="message-text">"{{ msg.message }}"</p>
              <div class="message-footer">
                <span class="author">De: {{ formatAddress(msg.author) }}</span>
                <span class="timestamp">{{ msg.timestamp }}</span>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<style scoped>
.guestbook-section {
  padding: 6rem 2rem;
  text-align: center;
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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.guestbook-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--color-card-background);
  border-left: 4px solid var(--color-primary);
  border-radius: 8px;
}
.wallet-area {
  margin-bottom: 2rem;
}
.connect-button,
.send-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.8rem 1.8rem;
  background-color: var(--color-card-background);
  color: var(--color-text);
  border: 1px solid var(--color-primary);
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.connect-button:hover,
.send-button:hover {
  background-color: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}
.form-area {
  display: flex;
  gap: 1rem;
}
.form-area input {
  flex-grow: 1;
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-text);
  border-radius: 8px;
  font-size: 1rem;
}
.form-area input:focus {
  outline: none;
  border-color: var(--color-primary);
}
.form-area button {
  gap: 0.75rem;
  padding: 0.8rem 1.8rem;
  background-color: var(--color-card-background);
  color: var(--color-text);
  border: 1px solid var(--color-primary);
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.form-area button:hover {
  background-color: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}
.status-message {
  font-size: 0.9rem;
  opacity: 0.8;
  min-height: 1.2rem;
  margin-bottom: 2rem;
}

/* 3. Estilos para o Carrossel e seus Cards */
.messages-carousel-wrapper {
  border-top: 1px solid var(--color-border);
  padding-top: 2rem;
}

/* Estilo para cada slide, para criar espaçamento */
:deep(.carousel__slide) {
  padding: 0 0.5rem;
}

.message-card {
  width: 100%;
  height: 100%; /* Garante que os cards tenham a mesma altura */
  background-color: var(--color-background);
  padding: 1rem;
  border-radius: 8px;
  text-align: left;
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
}
.message-text {
  font-size: 1rem; /* Tamanho ajustado */
  font-style: italic;
  margin-bottom: 1rem;
  flex-grow: 1; /* Empurra o rodapé para baixo */
}
.message-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  opacity: 0.7;
}
.author {
  font-family: monospace;
}

/* 4. Estilos para as setas de navegação do carrossel de mensagens */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: var(--color-card-background);
  border-radius: 50%;
  border: 1px solid var(--color-border);
  color: var(--color-primary);
  width: 36px;
  height: 36px;
  margin: 0 -10px; /* Puxa as setas um pouco para fora */
}
:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: var(--color-primary);
  color: var(--color-background);
}
</style>
