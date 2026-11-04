<script setup>
import { ArrowLeft } from 'lucide-vue-next';
import GuestbookSection from '@/components/sections/GuestbookSection.vue';
</script>

<template>
  <div class="guestbook-page">
    <RouterLink to="/#cases" class="back-link">
      <ArrowLeft :size="16" />
      <span>{{ $t('guestbook.back') }}</span>
    </RouterLink>
    <GuestbookSection id="guestbook" />
  </div>
</template>

<style scoped>
.guestbook-page {
  padding-top: 3rem;
  min-height: 80vh;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.back-link:hover {
  color: var(--color-primary);
}
</style>
