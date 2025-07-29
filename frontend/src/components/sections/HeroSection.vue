<script setup>
// Nenhuma lógica de script necessária aqui
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <img
        src="https://github.com/Arthur1220.png"
        alt="Foto de perfil de Arthur Azevedo"
        class="profile-picture"
      />

      <div class="hero-text">
        <p class="greeting">{{ $t('hero.greeting') }}</p>
        <h1 class="name">{{ $t('hero.name') }}</h1>
        <h2 class="title">{{ $t('hero.title') }}</h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh; /* Ocupa quase a tela inteira na vertical */
  padding: 4rem 2rem;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 3rem; /* Espaço entre a foto e o texto */
  max-width: 1200px;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%; /* Deixa a imagem redonda */
  object-fit: cover; /* Garante que a imagem preencha o círculo sem distorcer */
  border: 2px solid var(--color-primary); /* Borda sutil com a cor de destaque */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.hero-text {
  text-align: left;
}

.greeting {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-text);
  opacity: 0.9;
  margin-bottom: 0rem;
}

.name {
  font-size: 3rem;
  color: var(--color-heading);
  margin: 0.5rem 0;
  line-height: 1.1;
  margin-top: 0rem;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0.5rem 0;
}

/* --- Responsividade --- */
@media (max-width: 992px) {
  .hero-content {
    gap: 2rem;
  }
  .name {
    font-size: 2.8rem;
  }
  .title {
    font-size: 1.3rem;
  }
  .profile-picture {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 70vh;
    text-align: center; /* Centraliza todo o texto em telas pequenas */
  }

  .hero-content {
    flex-direction: column; /* Empilha a foto sobre o texto */
  }

  .hero-text {
    text-align: center;
  }

  .name {
    font-size: 2.5rem;
  }
}
</style>
