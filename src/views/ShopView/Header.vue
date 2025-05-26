<script setup lang="ts">
const props= withDefaults(defineProps <{title?:string;describe?:string;}>(),
  {
  title:'Cart',
describe:
  'Cloves, ginger, or pepper. Herbs are derived from green leaves and often grow in temperate climates.' +
  ' Common herbs are mint, rosemary.'
})
</script>

<template>

  <div class="mainContainer">
    <div class="centerContainer">
      <div class="coreText">
        <h1>{{ title }}</h1>
        <p>{{ describe }}</p>
      </div>
      <div class="breadCrumbs">
        <a href="#" class="Home">Home</a>
        <span class="separator">/</span>
        <span class="title">{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mainContainer {
  background-size: cover;
  width: 100%;

  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/LoginView/background.jpg'); /* 叠加暗色渐变 */
  .centerContainer {
    margin: 0 auto;
    overflow: hidden;
    height: 100%;
    display: flex;
    max-width: 1100px;
    position: relative;
    .coreText {
      padding: 134px 0px 154px 0px;
      margin: 0 15px;
      width: 70%;
      color: white;

      p {
        width: 70%;
        font-size: 16px;
      }
      h1 {
        font-size: 70px;
        font-weight: 500;
        width: 100%;
      }
    }
    .breadCrumbs {
      background: white;
      width: 150px;
      height: 70px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 1%;
      bottom: 0.001%;

      gap: 10px;
      a {
        color: #ff9900;
        font-weight: bold;
        text-decoration: none;
      }
      .separator {
        color: #1c1e22;
      }
      .title {
        color: #1c1e22;
      }
    }
  }
}

@media (max-width: 1000px) {
     p {
      width: 100% !important;
      font-size: 14px !important;
  }

}
</style>
