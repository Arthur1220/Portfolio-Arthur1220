<script setup>
import { ref, onMounted, computed } from 'vue';
import { connectWallet, getMessages, addMessage } from '@/services/blockchainService.js';
import { Wallet, Send, ExternalLink, ShieldCheck, BookOpen } from 'lucide-vue-next';

const contractAddress = import.meta.env.VITE_GUESTBOOK_CONTRACT_ADDRESS;
const account = ref(null);
const messages = ref([]);
const newMessage = ref('');
const statusMessage = ref('');
const isLoading = ref(false);

const explorerLink = computed(() => `https://amoy.polygonscan.com/address/${contractAddress}`);

const formatAddress = (addr) => {
  if (!addr) return '0x000...0000';
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
};

const handleConnect = async () => {
  try {
    isLoading.value = true;
    statusMessage.value = 'Connecting to wallet...';
    const userAccount = await connectWallet();
    account.value = userAccount;
    await handleFetchMessages();
    statusMessage.value = '';
  } catch (err) {
    statusMessage.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

const handleFetchMessages = async () => {
  try {
    isLoading.value = true;
    messages.value = await getMessages();
  } catch {
    statusMessage.value = 'Failed to fetch messages.';
  } finally {
    isLoading.value = false;
  }
};

const handleSendMessage = async () => {
  if (!newMessage.value.trim()) return;
  try {
    isLoading.value = true;
    statusMessage.value = 'Awaiting signature...';
    await addMessage(newMessage.value);
    statusMessage.value = 'Message sent! Updating...';
    newMessage.value = '';
    await handleFetchMessages();
    setTimeout(() => statusMessage.value = '', 3000);
  } catch {
    statusMessage.value = 'Transaction failed.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(handleFetchMessages);
</script>

<template>
  <section id="guestbook" class="guestbook-section">
    <div class="content-wrapper">
      <div class="section-header">
        <h2 class="section-title">{{ $t('guestbook.title') }}</h2>
        <p class="section-subtitle">{{ $t('guestbook.subtitle') }}</p>
      </div>

      <div class="guestbook-container">
        <div class="guestbook-controls">
          <div class="contract-info">
            <ShieldCheck :size="16" class="text-primary" />
            <span class="label">Contract</span>
            <a :href="explorerLink" target="_blank" class="address-link">
              {{ formatAddress(contractAddress) }}
              <ExternalLink :size="12" />
            </a>
          </div>
          
          <button v-if="!account" @click="handleConnect" class="btn btn-primary btn-small" :disabled="isLoading">
            <Wallet :size="16" />
            <span>Connect Wallet</span>
          </button>
          
          <div v-else class="wallet-status">
            <span class="status-dot online"></span>
            <span class="addr">{{ formatAddress(account) }}</span>
          </div>
        </div>

        <div v-if="account" class="input-area">
          <div class="input-wrapper">
            <input
              v-model="newMessage"
              type="text"
              class="message-input"
              :placeholder="$t('guestbook.placeholder')"
              @keyup.enter="handleSendMessage"
              :disabled="isLoading"
            />
            <button @click="handleSendMessage" :disabled="isLoading || !newMessage.trim()" class="send-btn">
              <Send :size="18" />
            </button>
          </div>
          <div v-if="statusMessage" class="status-text">{{ statusMessage }}</div>
        </div>

        <div class="messages-list">
          <!-- Loading state -->
          <div v-if="isLoading && messages.length === 0" class="empty-state">
            <div class="spinner"></div>
            <p>Loading records...</p>
          </div>

          <!-- Empty un-connected -->
          <div v-else-if="!isLoading && messages.length === 0 && !account" class="empty-state">
            <BookOpen :size="32" class="empty-icon text-muted" />
            <p class="empty-title">{{ $t('guestbook.empty_title') }}</p>
            <p class="empty-hint">{{ $t('guestbook.empty_hint') }}</p>
            <button @click="handleConnect" class="btn btn-outline empty-cta" :disabled="isLoading">
              <Wallet :size="16" />
              <span>{{ $t('guestbook.connect_cta') }}</span>
            </button>
          </div>

          <!-- Empty connected -->
          <div v-else-if="!isLoading && messages.length === 0 && account" class="empty-state">
            <BookOpen :size="32" class="empty-icon text-muted" />
            <p class="empty-title">{{ $t('guestbook.empty_connected_title') }}</p>
            <p class="empty-hint">{{ $t('guestbook.empty_connected_hint') }}</p>
          </div>

          <!-- Message list -->
          <div v-else class="messages-grid">
            <div v-for="(msg, index) in messages" :key="index" class="message-card">
              <div class="message-header">
                <span class="message-author">{{ formatAddress(msg.author) }}</span>
                <span class="message-time">{{ msg.timestamp }}</span>
              </div>
              <p class="message-content">{{ msg.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.guestbook-section {
  padding: 8rem 2rem;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  max-width: 900px;
  width: 100%;
}

.section-header {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-muted);
}

.guestbook-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.guestbook-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.contract-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.label {
  color: var(--color-text-muted);
}

.address-link {
  font-family: var(--font-mono);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 4px;
}

.wallet-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 999px;
}

[data-theme='dark'] .wallet-status {
  background: rgba(255, 255, 255, 0.05);
}

.status-dot.online {
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.input-area {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-wrapper {
  display: flex;
  gap: 1rem;
  position: relative;
}

.message-input {
  flex: 1;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem 1.5rem;
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-text);
  outline: none;
  transition: border-color 0.2s;
}

.message-input:focus {
  border-color: var(--color-primary);
}

.send-btn {
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}

.send-btn:hover:not(:disabled) {
  opacity: 0.9;
}

.send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.status-text {
  font-size: 0.85rem;
  color: var(--color-primary);
  padding-left: 1.5rem;
}

.messages-list {
  margin-top: 2rem;
}

.messages-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.message-card {
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.message-card:last-child {
  border-bottom: none;
}

.message-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.message-author {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-primary);
  font-weight: 500;
}

.message-time {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.message-content {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--color-text);
}

/* Empty State */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
}

.empty-icon {
  margin-bottom: 1.5rem;
  opacity: 0.5;
}

.empty-title {
  font-size: 1.25rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.empty-hint {
  font-size: 1rem;
  color: var(--color-text-muted);
  max-width: 400px;
  margin-bottom: 2rem;
}

.empty-cta {
  margin-top: 1rem;
}

.spinner {
  width: 30px;
  height: 30px;
  border: 2px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.text-primary { color: var(--color-primary); }
.text-muted { color: var(--color-text-muted); }

@media (max-width: 600px) {
  .guestbook-controls {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>