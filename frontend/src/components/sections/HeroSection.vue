<script setup>
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <div class="profile-picture-container">
        <img
          src="@/assets/profile/profile-04.jpg"
          alt="Foto de perfil de Arthur Azevedo"
          class="profile-picture-image"
        />
      </div>

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
  min-height: 90vh;
  padding: 4rem 2rem;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
}

.profile-picture-container {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
}

.profile-picture-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 30%;
  transform: scale(1.3);
  transition: transform 0.3s ease;
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
    text-align: center;
  }

  .hero-content {
    flex-direction: column;
  }

  .hero-text {
    text-align: center;
  }

  .name {
    font-size: 2.5rem;
  }
}
</style>
