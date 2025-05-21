<script setup lang="ts">
import HomePageFramework from '@/components/HomePageFramework/homePageFramework.vue'

let Title="Wishlist"

let Describe="Cloves, ginger, or pepper. Herbs are derived from green leaves and often grow in temperate climates. " +
"Common herbs are mint, rosemary."

</script>
<template>
  <home-page-framework>
    <template #homePage>               <!-- 主页内容区域插槽 -->
      <div class="MainContent">        <!-- 主内容容器 -->
        <div class="Header-Header">    <!-- 头部区域容器 -->
          <div class="Header-CenterContent">  <!-- 头部居中内容容器 -->
            <div class="TitleAndDscribe">    <!-- 标题和描述容器 -->
              <div class="Title">{{ Title }}</div>
              <p class="Describe">{{ Describe }}</p>
            </div>
            <div class="Home">           <!-- 面包屑导航容器 -->
              <a class="HomePage" href="#">Home</a>
              <div class="HomePageLine"> / </div>
              <div class="TitlePage">{{Title}}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </home-page-framework>
</template>


<style scoped lang="scss">
.MainContent{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.Header-Header{
  background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('@/assets/LoginView/background.jpg'); /* 叠加暗色渐变 */ ;
  width: 200vh;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}
.Header-CenterContent{
  overflow: auto;

  position: relative;
  display: flex;
  width: 1200px;
  height: 100%;
  flex-direction: column;
}
.TitleAndDscribe{
    position: relative;
    top: 50px;

}
.Title{

  font-size: 80px;
  color: #f6f7f8;
  font-weight: bolder;
  margin-bottom:0px;
}
.Describe{
  font-size: 20px;
  color: #f6f7f8;
  width: 700px;
  margin: 0px;
}
.Home {
  position: absolute;
  display: flex;
  width: 180px;
  height: 70px;
  justify-content: space-around;
  background: #fdfdfd;
  left: 900px;
  top:380px;
  padding: 20px 110px 10px 15px;
  font-size: 20px;
}

a {
  text-decoration: none; /* 去除下划线 */
}
  .HomePage{
  width: 50px;
  height: 50px;
    color: #d86700;
    font-weight: bolder;
    transition: color 0.3s ease; /* 颜色过渡0.3秒 */

}
.HomePage:hover{
    color: #d86700;
  filter: brightness(0.9) contrast(1.1); /* 亮度 70% + 对比度增强 */
}
  .HomePageLine{
  padding: 0px 10px 0px 16px;

  }
  .TitlePage{
    width: 50px;
    height: 50px;
    color: black;

  }
</style>
