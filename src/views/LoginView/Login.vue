<template>
  <homePageFramework>
    <template #homePage>
      <div class="login-page">
        <div class="content">
          <h1 class="title">Login</h1>
          <p class="description">
            Cloves, ginger, or pepper. Herbs are derived from green leaves and often grow in temperate climates. Common herbs are mint, rosemary.
          </p>
        </div>

        <div class="breadcrumb">
          <span class="breadcrumb-item">Home</span>
          <span class="breadcrumb-separator">/</span>
          <span class=" current">Login</span>
        </div>
      </div>
    </template>
  </homePageFramework>
</template>
    <style scoped lang="scss">
      .login-page {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('@/assets/LoginView/background.jpg'); /* 叠加暗色渐变 */
        background-size: cover;
        background-position: center;
        height: 60vh;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        box-sizing: border-box;
        color: white;
      }

      /* 其他样式保持不变 */
      .title {
        font-size: 3em;
        margin-bottom: 10px;
        margin-left: 150px;
        position: relative;
        top: 60px; /* 可选：增加顶部位置 */
        font-weight: bold; /* 设置字体加粗 */
      }

      .description {
        font-size: 1em;
        max-width: 500px;
        margin-left: 150px;
        position: relative;
        top: 60px; /* 可选：增加顶部位置 */

      }

      .breadcrumb {
        display: flex;
        align-items: center;
        margin-left: 1200px;
        background-color: white; /* 设置背景颜色 */
        width: 130px; /* 设置宽度 */
        height: 60px; /* 设置高度 */
        padding: 10px; /* 可选：增加内边距 */
        border-radius: 5px; /* 可选：让背景有圆角 */
        color: black;
        border-radius: 0; /* 去掉圆角 */
        margin-top: 50px; /* 可选：增加顶部外边距 */
        position: relative;
        top: 20px; /* 可选：增加顶部位置 */
      }

      .breadcrumb-item {
        margin-right: 10px;
        color: coral;
        font-weight: bold; /* 设置字体加粗 */
        cursor: pointer; /* 鼠标悬停时显示手型指针 */

      }

      .current {

      }

      .breadcrumb-separator {
        margin: 0 5px;
        color: black; /* 设置分隔符颜色 */
      }
    </style>



<script setup>
import homePageFramework from '@/components/HomePageFramework/homePageFramework.vue'
</script>

<style scoped lang="scss">



</style>
