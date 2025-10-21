<template>
  <div class="index-page">
    <h1 class="index-page__title">Прошлый год тебя ничему не научил...</h1>
    <h3 class="index-page__description">
      Терять уже нечего, твои данные снова украдены, так что жми на кнопку
    </h3>
    <RouterLink to="/info" class="index-page__button"
      >Неподозрительная кнопка</RouterLink
    >
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/base/fonts";
@import "/src/assets/styles/abstracts/variables";

.index-page {
  font-family: "LorenzoSans", sans-serif;
  background: linear-gradient($color-bg-pink-1 0%, rgba(242, 137, 184, 1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  gap: 50px;

  &__title {
    font-size: 30px;
    font-weight: 400;
    text-align: center;
  }

  &__description {
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    padding: 0 20px;
  }

  &__button {
    font-size: 20px;
    font-weight: 500;
    font-family: "Arista Pro Alternate", sans-serif;
    text-decoration: none;
    color: white;
    background-color: $color-button-pink;
    border-radius: 20px;
    border: 2px solid black;
    padding: 20px;
  }
}
</style>
