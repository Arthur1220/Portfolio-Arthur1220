<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="app-footer">
    <p>&copy; {{ currentYear }} Arthur Marques Azevedo. Todos os direitos reservados.</p>
  </footer>
</template>

<style scoped>
.app-footer {
  text-align: center;
  padding: 2rem 0;
  margin-top: 4rem;
  background-color: #1a1a1a;
  color: #888;
  border-top: 1px solid #333;
}
</style>
