<script setup>
// Nenhuma lógica necessária por enquanto
</script>

<template>
  <section class="placeholder-section">
    <h2>Guestbook On-Chain</h2>
    <p>
      Esta seção será uma prova interativa da minha habilidade com blockchain.
      Os visitantes poderão conectar suas carteiras e deixar uma mensagem em um smart contract na testnet da Polygon.
    </p>
    <div class="guestbook-placeholder">
      <p>[Área para exibir mensagens da blockchain]</p>
      <input type="text" placeholder="Deixe sua mensagem..." />
      <button>Conectar Carteira e Enviar</button>
    </div>
  </section>
</template>

<style scoped>
.placeholder-section {
  border: 1px dashed #444;
  padding: 2rem;
  margin-bottom: 2rem;
}
.guestbook-placeholder {
  margin-top: 1rem;
}
</style>
