<script setup>
import { ref, onMounted, computed } from 'vue';
import { connectWallet, getMessages, addMessage } from '@/services/blockchainService.js';
import { Wallet, Send, ExternalLink, ShieldCheck, Terminal } from 'lucide-vue-next';

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
    statusMessage.value = 'Initializing provider...';
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
    statusMessage.value = 'RPC Error: Failed to fetch logs.';
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
    statusMessage.value = 'Transaction confirmed. Updating state...';
    newMessage.value = '';
    await handleFetchMessages();
  } catch {
    statusMessage.value = 'Transaction failed or rejected.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(handleFetchMessages);
</script>

<template>
  <section id="guestbook" class="guestbook-section">
    <div class="content-wrapper">
      <h2 class="section-title">// {{ $t('guestbook.title') }}</h2>
      <p class="section-subtitle">{{ $t('guestbook.subtitle') }}</p>

      <div class="card-base guestbook-terminal">
        <div class="terminal-header">
          <div class="contract-info">
            <ShieldCheck :size="16" class="text-primary" />
            <span class="mono-label">Contract:</span>
            <a :href="explorerLink" target="_blank" class="address-link">
              {{ formatAddress(contractAddress) }}
              <ExternalLink :size="12" />
            </a>
          </div>

          <button v-if="!account" @click="handleConnect" class="btn btn-outline btn-small" :disabled="isLoading">
            <Wallet :size="16" />
            <span>Connect</span>
          </button>
          <div v-else class="wallet-status">
            <span class="status-dot online"></span>
            <span class="addr">{{ formatAddress(account) }}</span>
          </div>
        </div>

        <div v-if="account" class="input-area">
          <div class="input-wrapper">
            <span class="prompt">></span>
            <input
              v-model="newMessage"
              type="text"
              :placeholder="$t('guestbook.placeholder')"
              @keyup.enter="handleSendMessage"
              :disabled="isLoading"
            />
          </div>
          <button @click="handleSendMessage" :disabled="isLoading || !newMessage.trim()" class="send-btn">
            <Send :size="18" />
          </button>
        </div>

        <div v-if="statusMessage" class="status-bar">
          <Terminal :size="14" />
          <span>{{ statusMessage }}</span>
        </div>

        <div class="messages-log">
          <div v-if="isLoading && messages.length === 0" class="log-entry system-msg">Loading chain data...</div>
          <div v-if="!isLoading && messages.length === 0" class="log-entry system-msg">No records found on-chain.</div>

          <div v-for="(msg, index) in messages" :key="index" class="log-entry">
            <span class="log-time">[{{ msg.timestamp }}]</span>
            <span class="log-author">{{ formatAddress(msg.author) }}:</span>
            <span class="log-text">"{{ msg.message }}"</span>
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
  max-width: 1100px;
  width: 100%;
}

.section-title {
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.section-subtitle {
  opacity: 0.7;
  margin-bottom: 3rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
}

/* Terminal Adjustments */
.guestbook-terminal {
  height: auto !important;
  max-width: 1100px;
  margin: 0 auto;
}

.terminal-header {
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}

.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
}

.contract-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.address-link {
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
  font-size: 0.8rem;
}

.status-dot.online {
  width: 8px;
  height: 8px;
  background: #27c93f;
  border-radius: 50%;
}

.input-area {
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.prompt {
  color: var(--color-primary);
  font-family: var(--font-mono);
  font-weight: bold;
}

.input-wrapper input {
  background: transparent;
  border: none;
  color: var(--color-text);
  width: 100%;
  font-family: var(--font-mono);
  outline: none;
}

.send-btn {
  background: none;
  border: 1px solid var(--color-border);
  color: var(--color-primary);
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.send-btn:hover:not(:disabled) {
  border-color: var(--color-primary);
  background: rgba(var(--color-primary-rgb), 0.1);
}

.send-btn:disabled {
  opacity: 0.3;
}

.status-bar {
  padding: 0.5rem 1.5rem;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(var(--color-primary-rgb), 0.05);
}

.messages-log {
  padding: 1.5rem;
  height: 250px;
  overflow-y: auto;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.log-entry {
  line-height: 1.4;
  display: flex;
  gap: 0.75rem;
}

.system-msg {
  opacity: 0.5;
  font-style: italic;
}

.log-time { opacity: 0.4; }
.log-author { color: var(--color-primary); }
.log-text { opacity: 0.9; }

.text-primary { color: var(--color-primary); }
</style>
