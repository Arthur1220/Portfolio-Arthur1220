<script setup>
import { ref, onMounted, computed } from 'vue';
import { connectWallet, getMessages, addMessage } from '@/services/blockchainService.js';
import { Wallet, Send, FileCode } from 'lucide-vue-next';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const contractAddress = import.meta.env.VITE_GUESTBOOK_CONTRACT_ADDRESS;
const account = ref(null);
const messages = ref([]);
const newMessage = ref('');
const statusMessage = ref('');
const isLoading = ref(false);

const explorerLink = computed(() => `https://amoy.polygonscan.com/address/${contractAddress}`);

// A função formatAddress estava faltando no seu último script, adicionei de volta
const formatAddress = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

const handleConnect = async () => {
  try {
    isLoading.value = true;
    statusMessage.value = 'Conectando carteira...';
    const userAccount = await connectWallet();
    account.value = userAccount;
    await handleFetchMessages();
    statusMessage.value = '';
  } catch (error) {
    statusMessage.value = error.message;
  } finally {
    isLoading.value = false;
  }
};

const handleFetchMessages = async () => {
  try {
    isLoading.value = true;
    statusMessage.value = 'Buscando mensagens na blockchain...';
    // O serviço já formata o endereço, então não precisamos fazer de novo aqui
    messages.value = await getMessages();
    statusMessage.value = '';
  } catch (error) {
    statusMessage.value = 'Falha ao buscar mensagens.';
  } finally {
    isLoading.value = false;
  }
};

const handleSendMessage = async () => {
  if (!newMessage.value.trim()) return;
  try {
    isLoading.value = true;
    statusMessage.value = 'Por favor, aprove a transação na sua carteira...';
    await addMessage(newMessage.value);
    statusMessage.value = 'Transação enviada! Atualizando mensagens...';
    newMessage.value = '';
    await handleFetchMessages();
  } catch (error) {
    statusMessage.value = 'Erro ao enviar a mensagem.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  handleFetchMessages();
});
</script>

<template>
  <section id="guestbook" class="guestbook-section">
    <h2 class="section-title">{{ $t('guestbook.title') }}</h2>
    <p class="section-subtitle">{{ $t('guestbook.subtitle') }}</p>

    <a :href="explorerLink" target="_blank" class="explorer-link">
      <FileCode :size="16" />
      <span>{{ $t('guestbook.view_contract') }}</span>
    </a>

    <div class="guestbook-container">
      <div class="wallet-area">
        <button v-if="!account" @click="handleConnect" class="connect-button">
          <Wallet :size="20" />
          <span>{{ $t('guestbook.connect_wallet') }}</span>
        </button>
         <div v-else class="wallet-connected">
          Conectado como: <span>{{ formatAddress(account) }}</span>
        </div>
      </div>

      <div v-if="account" class="form-area">
        <input v-model="newMessage" type="text" :placeholder="$t('guestbook.placeholder')" :disabled="isLoading" />
        <button @click="handleSendMessage" :disabled="isLoading || !newMessage.trim()" class="send-button">
          <Send :size="18" />
          <span>{{ isLoading ? $t('guestbook.sending') : $t('guestbook.send_message') }}</span>
        </button>
      </div>
      <p v-if="statusMessage" class="status-message">{{ statusMessage }}</p>

      <div class="messages-carousel-wrapper">
        <div v-if="isLoading && messages.length === 0" class="loading-messages">Carregando mensagens...</div>
        <div v-if="!isLoading && messages.length === 0" class="no-messages">{{ $t('guestbook.no_messages') }}</div>

        <Carousel v-if="messages.length > 0" :items-to-show="messages.length > 1 ? 2 : 1" :wrap-around="true">
          <Slide v-for="(msg, index) in messages" :key="index">
            <div class="message-card">
              <p class="message-text">"{{ msg.message }}"</p>
              <div class="message-footer">
                <span class="author">De: {{ msg.author }}</span>
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
/* O SEU CSS PODE PERMANECER O MESMO */
.guestbook-section { padding: 6rem 2rem; text-align: center; }
.section-title { font-size: 2.5rem; margin-bottom: 0.5rem; }
.section-subtitle { font-size: 1.1rem; opacity: 0.7; margin-bottom: 1rem; max-width: 600px; margin-left: auto; margin-right: auto; }
.guestbook-container { max-width: 800px; margin: 0 auto; padding: 2rem; background-color: var(--color-card-background); border: 1px solid var(--color-border); border-radius: 12px; }
.wallet-area { margin-bottom: 2rem; }
.connect-button, .send-button { display: inline-flex; align-items: center; justify-content: center; gap: 0.75rem; padding: 0.8rem 1.8rem; background-color: var(--color-primary); color: #fff; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: filter 0.2s ease; }
.connect-button:hover, .send-button:hover { filter: brightness(1.1); }
.wallet-connected { font-weight: 500; }
.wallet-connected span { font-family: monospace; background-color: var(--color-background); padding: 0.25rem 0.5rem; border-radius: 4px; border: 1px solid var(--color-border); }
.form-area { display: flex; gap: 1rem; margin-bottom: 1rem; }
.form-area input { flex-grow: 1; padding: 0.8rem 1rem; border: 1px solid var(--color-border); background-color: var(--color-background); color: var(--color-text); border-radius: 8px; font-size: 1rem; }
.form-area input:focus { outline: none; border-color: var(--color-primary); }
.send-button { padding: 0.8rem 1.2rem; }
.send-button:disabled { opacity: 0.5; cursor: not-allowed; }
.status-message { font-size: 0.9rem; opacity: 0.8; min-height: 1.2rem; margin-bottom: 2rem; }
.messages-carousel-wrapper { border-top: 1px solid var(--color-border); padding-top: 2rem; min-height: 150px; }
.loading-messages, .no-messages { opacity: 0.7; }
:deep(.carousel__slide) { padding: 0 0.5rem; }
.message-card { width: 100%; height: 100%; background-color: var(--color-background); padding: 1rem; border-radius: 8px; text-align: left; border: 1px solid var(--color-border); display: flex; flex-direction: column; }
.message-text { font-size: 1rem; font-style: italic; margin-bottom: 1rem; flex-grow: 1; }
.message-footer { display: flex; justify-content: space-between; font-size: 0.8rem; opacity: 0.7; }
.author { font-family: monospace; }
.explorer-link { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--color-text); opacity: 0.7; text-decoration: none; margin-bottom: 2rem; transition: opacity 0.3s ease; }
.explorer-link:hover { opacity: 1; text-decoration: underline; }
:deep(.carousel__prev), :deep(.carousel__next) { background-color: var(--color-card-background); border-radius: 50%; border: 1px solid var(--color-border); color: var(--color-primary); width: 36px; height: 36px; margin: 0 -10px; }
:deep(.carousel__prev:hover), :deep(.carousel__next:hover) { background-color: var(--color-primary); color: var(--color-background); }
</style>
