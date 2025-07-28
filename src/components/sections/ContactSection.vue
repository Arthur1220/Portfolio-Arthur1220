<script setup>
// Nenhuma lógica necessária por enquanto
</script>

<template>
  <section class="placeholder-section">
    <h2>Contato</h2>
    <p>Tem alguma pergunta ou proposta? Entre em contato através do formulário abaixo.</p>
    <form class="contact-form-placeholder">
      <input type="text" placeholder="Seu nome" />
      <input type="email" placeholder="Seu e-mail" />
      <textarea placeholder="Sua mensagem"></textarea>
      <button type="submit">Enviar</button>
    </form>
  </section>
</template>

<style scoped>
.placeholder-section {
  border: 1px dashed #444;
  padding: 2rem;
  margin-bottom: 2rem;
}
.contact-form-placeholder {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
