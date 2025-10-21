<template>
  <div class="info-page">
    <div class="info-page__age">
      <img
        loading="lazy"
        src="@/assets/img/hat.webp"
        alt="hat"
        class="info-page__hat"
      />
      <img
        loading="lazy"
        src="@/assets/img/me.webp"
        alt="me"
        class="info-page__me"
      />
      <img
        loading="lazy"
        src="@/assets/img/disco.webp"
        alt="disco"
        class="info-page__disco"
      />
      <img
        loading="lazy"
        src="@/assets/img/fire.webp"
        alt="fire"
        class="info-page__fire"
      />
      <h2 class="info-page__title">
        ОГО! <br />
        УЖЕ 24 ГОДА!
      </h2>
    </div>
    <h2 class="info-page__title">ПОДРОБНОСТИ</h2>
    <div class="info-page__details">
      <p>
        Привет! Прошел целый год, а значит пришло время приглашения на мой День
        Рождения! <br />
        Жду тебя:
      </p>
      <p class="info-page__text">2 ноября</p>
      <p>в <span class="info-page__text">13:30 - 14:00</span></p>
      <p>
        на базе отдыха <span class="info-page__text">"Forest House"</span>,
        адрес знать необязательно, доедем на машинках
      </p>
      <p>
        по плану сбор в двух точках, приезд на базу в 15:00, гуляния по лесам до
        16:00, потом заселение, шашлык, баня и веселье:)
      </p>
      <p>закончим 3 ноября где-то в 14:00</p>
    </div>
    <h2 class="info-page__title">ТРЕБОВАНИЯ</h2>
    <ul class="info-page__details">
      <li>Берем с собой купальник, сланцы и полотенце не очень маленькое</li>
      <li>Берем с собой всё, что необходимо для ночевки</li>
      <li>
        Мы будем проводить время и на улице (собираемся гулять по лесу, возможен
        дождь!! кто виноват, что я родилась в ноябре), и в домике, одевайся,
        исходя из этого!
      </li>
      <li>
        Нужно много фоткать и снимать, чтобы я потом пересматривала и радовалась
      </li>
      <li>
        Если есть идеи веселья или игр, можешь сказать мне или принести с собой
      </li>
      <li>Приходи в хорошем настроении!!!</li>
      <li>
        В этом году я снова не смогла придумать вишлист, можете придумать что-то
        свое, я хочу новую одежду, куда-нибудь съездить и какие-нибудь новые
        активности... прошлогоднее желание тоже всё ещё актуально;)
      </li>
    </ul>
    <h2 class="info-page__title">ЧТО ДАРИТЬ?</h2>
    <button class="info-page__button" @click="openModal">УЗНАТЬ</button>
    <PresentPopup :isVisible="isVisible" />
  </div>
</template>

<script setup>
import PresentPopup from "@/components/PresentPopup.vue";
import { shallowRef } from "vue";

const isVisible = shallowRef(false);
const openModal = () => {
  isVisible.value = true;
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
</script>

<style lang="scss">
.info-page {
  font-family: "Arista Pro Alternate", sans-serif;
  background: url("@/assets/img/pink-cells-bg.jpg");
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;

  &__age {
    position: relative;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 14px;
  }

  &__hat {
    position: absolute;
    max-width: 50px;
    max-height: 50px;
    left: 27%;
    top: 0;
    transform: rotate(8deg);
    z-index: 2;
  }

  &__me {
    width: 150px;
    height: 180px;
    position: relative;
    object-fit: contain;
    z-index: 1;
  }

  &__disco {
    position: absolute;
    max-width: 98px;
    max-height: 113px;
    right: -6px;
    top: 0;
  }

  &__fire {
    position: absolute;
    max-width: 130px;
    max-height: 130px;
    left: 34%;
    top: 16%;
  }

  &__title {
    font-family: "Arista Pro Alternate", system-ui;
    font-weight: 100;
    font-size: 30px;
  }

  &__details {
    padding: 5px;
    border-style: solid;
    border-width: 30px;
    border-color: white;
    border-image: url("@/assets/img/circle.png") 26 fill / 30px round;
    display: flex;
    gap: 10px;
    flex-direction: column;
    font-family: "Arista Pro Alternate", sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 18px;
  }

  &__text {
    font-weight: 500;
  }

  &__button {
    border: none;
    background-color: white;
    padding: 20px;
    font-weight: 300;
    font-size: 16px;
    border-radius: 16px;
    min-width: 100%;
    color: black;
  }
}
</style>
