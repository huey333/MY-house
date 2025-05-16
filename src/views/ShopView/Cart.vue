<template>
  <HomePageFramework>
    <template #homePage>
      <div class="CartBox">
        <!--    标题    -->
        <div class="CartTitleBox">
          <img src="@/assets/LoginView/Template1.jpg" alt="水果" />
          <div class="text">
            <span style="font-size: 60px"> 购物车 </span>
            <br />
            <span style="font-size: 20px">
              芒果、柠檬或草莓。水果来自阳光照耀下的树木和藤蔓，通常在热带和温带气候中茁壮成长。常见的水果有芒果、柠檬和草莓。
            </span>
          </div>
        </div>
      </div>
    </template>
  </HomePageFramework>
</template>

<script setup>
import HomePageFramework from '@/components/HomePageFramework/homePageFramework.vue'
</script>

<style scoped lang="scss">
@import '@/CSS/ShopVIew/Cart.scss';
</style>
