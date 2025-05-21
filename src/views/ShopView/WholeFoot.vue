<script setup lang="ts" xmlns:a="http://www.w3.org/1999/html">
import { ref } from 'vue'
const FooterData = [
  {
    Title: 'Solutions',
    Describe: [
      { id: 1, title: 'Ecommerce', link: '/solutions/ecommerce' },
      { id: 2, title: 'Account', link: '/account' },
      { id: 3, title: 'Wishlist', link: '/wishlist' },
      { id: 4, title: 'Register', link: '/register' },
      { id: 5, title: 'Cart', link: '/cart' },
    ],
  },
  {
    Title: 'Company',
    Describe: [
      { id: 6, title: 'Home', link: '/' },
      { id: 7, title: 'About', link: '/about' },
      { id: 8, title: 'Blog', link: '/blog' },
      { id: 9, title: 'Contacts', link: '/contacts' },
      { id: 10, title: 'Shop', link: '/shop' },
    ],
  },
  {
    Title: 'Latest News',
    Describe: [
      {
        id: 11,
        image: 'src/assets/LoginView/Log2.jpg',
        badge: '12',
        title: 'Red Rocks Hickory Smoke Seasoning',
        date: 'June 4, 2022',
        link: '/news/red-rocks-seasoning',
      },
      {
        id: 12,
        image: 'src/assets/LoginView/Log3.jpg',
        badge: '9',
        title: 'This is a test to try out how things work',
        date: 'January 4, 2022',
        link: '/news/test-article',
      },
    ],
  },
]
import { Message, Location, Phone, Camera } from '@element-plus/icons-vue'
const FooterDataTow = [
  {
    icon: Location,
    textLines: ['2416 Mapleview Drive', 'Tampa, FL 33634'],
  },
  {
    icon: Message,
    textLines: ['Email : contact@website.com', 'Inquiries : info@mail.com'],
  },
  {
    icon: Phone,
    textLines: ['Telephone : 0029129102920', 'Mobile : 0029129102920'],
  },
]
</script>

<template>
  <div class="MainContent">
    <!-- 主内容容器 -->

    <div class="CenterContent">
      <!-- 居中内容容器 -->
      <img class="RightBackground" src="../../assets/LoginView/FootBackground.jpg" />
      <div class="TopContent">
        <!-- 上容器 -->

        <div class="LeftContent">
          <img src="../../assets/LoginView/Log.png" height="117" width="293" class="LeftImg" />
          <div class="ImgDescribe">
            No matter the spices and herbs you are looking for be distracted by the readable.
          </div >
          <div class="TopIconContainerPlus">
          <a href="#" class="TopIconContainer">  <el-icon class="TopIcon"><Avatar /></el-icon>
          </a>
          <a href="#" class="TopIconContainer">  <el-icon class="TopIcon"><Share /></el-icon>
          </a>
          <a href="#" class="TopIconContainer">  <el-icon class="TopIcon"><TrendCharts /></el-icon>
          </a>
          <a href="#" class="TopIconContainer">  <el-icon class="TopIcon"><Promotion /></el-icon>
          </a>
          <a href="#" class="TopIconContainer">  <el-icon class="TopIcon"><InfoFilled /></el-icon>
          </a>
            </div>
        </div>
        <div v-for="section in FooterData" :key="section.Title" class="TextContent">
          <h2 class="Title">{{ section.Title }}</h2>
          <div v-for="item in section.Describe" :key="item.id" class="DescribeParent">
            <div v-if="item.id >= 11" class="RightImgDisplay">
              <a :href="item.link">
                <img :src="item.image" v-if="item.image" class="RightImg" />
              </a>
              <a class="Describe" style="font-weight: bold" :href="item.link">{{ item.title }}</a>
            </div>
            <div v-else>
              <a class="Describe" :href="item.link">{{ item.title }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="BottomContainerMain">
        <div class="BottomContainer">
          <!--下容器三列包裹器-->
          <div v-for="sectiontow in FooterDataTow" :key="sectiontow.icon" class="FootTextContent">
            <div style="max-width: 100px">
              <el-icon class="BottomIcon">
                <component :is="sectiontow.icon"  />
              </el-icon>
            </div>
            <div class="TextContainer">
              <div class="FootDescribe" v-for="itemtow in sectiontow.textLines">{{ itemtow }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
//主容器属性
.MainContent {
  /* 主内容容器样式 */
  display: flex;
  width: 100%;
  height: 600px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #222429;
  padding: 0.8rem;
}

.CenterContent {
  /* 居中内容容器样式 */
  display: flex;
  width: 1300px;
  height: 100%;
  flex-direction: column;
  position: relative;
}
//上容器属性--方缩放变形
.TopContent {
  /* 上容器样式 */
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: flex-start;
  padding: 30px;
  z-index: 1;
}

.LeftContent {
  /* 左侧内容容器样式 */
  margin-right: 30px;
}

.LeftImg {
  /* 左侧图片样式 */
  position: relative;
  float: left;
  height: 100px;
  top: 29px;
}

.ImgDescribe {
  /* 图片描述文本样式 */
  display: flex;
  align-items: start;
  width: 300px;
  top: 20px;
  font-size: 20px;
  position: relative;
  height: 100px;
  color: #989a9e;
}

.TextContent {
  /* 文本内容容器样式 */
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: 60px;
}

.Title {
  /* 标题样式 */
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 30px 100px 10px 0px;
  font-weight: bold;
}

.DescribeParent {
  /* 描述父容器样式 */
  padding: 5px 0px 8px 0px;
}

.Describe {
  /* 描述文本样式 */
  width: 160px;
  color: #989a9e;
  font-size: 20px;

  flex-direction: row;
  text-decoration: none; /* 去除下划线 */
}

.Describe:hover {
  /* 描述文本悬停样式 */
  color: white;
  filter: brightness(0.9) contrast(1.1); /* 亮度 70% + 对比度增强 */
  transition:
    color 0.3s,
    filter 0.3s; // 添加动画过渡
}

.RightImgDisplay {
  /* 右侧图片展示区域样式 */
  display: grid;
  grid-template-columns: 90px 200px; // 三列
  gap: 0px; // 列间距
}

.RightImg {
  /* 右侧图片样式 */
  position: relative;
  width: 80px;
  height: 80px;
  float: left;
  margin-top: 0px;
  border-radius: 16px; // 圆角半径，可根据需要调整
}

//下容器属性

.BottomContainerMain {
  position: relative;
  top: 70px;
  left: 60px;
  background: black;
  width: 1200px;
  height: 150px;
  padding: 50px;
  z-index: 1;
}

.BottomContainer {
  display: grid;
  grid-template-columns: 300px 300px 300px; // 三列
  gap: 100px; // 列间距
}
.FootTextContent {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 0px; // 列间距
}
.TextContainer {
  display: flex;
  flex-direction: column; /* 使文本内容垂直排列 */
  gap: 8px; /* 文本行之间的间距 */
}
.FootDescribe {
  color: white;
}
.BottomIcon {
  font-size: 50px;
  color: hotpink;

}
.TopIconContainerPlus{
  display: flex;

}
.TopIconContainer
{
  position: relative;
  top: 35px;
  background-color: #1c1e22;

  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1c1e22;
  border-radius: 50%;
  margin-right: 20px
;
}
.TopIconContainer:hover{
  background: #f87e10;
  .TopIcon{
    color: white;
  }
}
.TopIcon{
  font-size: 20px;
  color: #999b9f;
}

.RightBackground {
  position: absolute;
  height: 250px;
  width: 350px;
  z-index: 0;
  top: 210px;
  left: 1180px;
  filter: contrast(1.5); // 对比度增强为 1.5 倍，可根据需要调整
}
</style>
<style scoped lang="scss">
//主容器属性
.MainContent {
  /* 主内容容器样式 */
  display: flex;
  width: 100%;
  height: 600px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #222429;
  padding: 0.8rem;
}

.CenterContent {
  /* 居中内容容器样式 */
  display: flex;
  width: 1300px;
  height: 100%;
  flex-direction: column;
  position: relative;
}
//上容器属性--方缩放变形
.TopContent {
  /* 上容器样式 */
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: flex-start;
  padding: 30px;
  z-index: 1;
}

.LeftContent {
  /* 左侧内容容器样式 */
  margin-right: 30px;
}

.LeftImg {
  /* 左侧图片样式 */
  position: relative;
  float: left;
  height: 100px;
  top: 29px;
}

.ImgDescribe {
  /* 图片描述文本样式 */
  display: flex;
  align-items: start;
  width: 300px;
  top: 20px;
  font-size: 20px;
  position: relative;
  height: 100px;
  color: #989a9e;
}

.TextContent {
  /* 文本内容容器样式 */
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: 60px;
}

.Title {
  /* 标题样式 */
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 30px 100px 10px 0px;
  font-weight: bold;
}

.DescribeParent {
  /* 描述父容器样式 */
  padding: 5px 0px 8px 0px;
}

.Describe {
  /* 描述文本样式 */
  width: 160px;
  color: #989a9e;
  font-size: 20px;

  flex-direction: row;
  text-decoration: none; /* 去除下划线 */
}

.Describe:hover {
  /* 描述文本悬停样式 */
  color: white;
  filter: brightness(0.9) contrast(1.1); /* 亮度 70% + 对比度增强 */
  transition:
    color 0.3s,
    filter 0.3s; // 添加动画过渡
}

.RightImgDisplay {
  /* 右侧图片展示区域样式 */
  display: grid;
  grid-template-columns: 90px 200px; // 三列
  gap: 0px; // 列间距
}

.RightImg {
  /* 右侧图片样式 */
  position: relative;
  width: 80px;
  height: 80px;
  float: left;
  margin-top: 0px;
  border-radius: 16px; // 圆角半径，可根据需要调整
}

//下容器属性

.BottomContainerMain {
  position: relative;
  top: 70px;
  left: 60px;
  background: black;
  width: 1200px;
  height: 150px;
  padding: 50px;
  z-index: 1;
}

.BottomContainer {
  display: grid;
  grid-template-columns: 300px 300px 300px; // 三列
  gap: 100px; // 列间距
}
.FootTextContent {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 0px; // 列间距
}
.TextContainer {
  display: flex;
  flex-direction: column; /* 使文本内容垂直排列 */
  gap: 8px; /* 文本行之间的间距 */
}
.FootDescribe {
  color: white;
}
.BottomIcon {
  font-size: 50px;
  color: hotpink;

}
.TopIconContainerPlus{
  display: flex;

}
.TopIconContainer
{
  position: relative;
  top: 35px;
  background-color: #1c1e22;

  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1c1e22;
  border-radius: 50%;
  margin-right: 20px
;
}
.TopIconContainer:hover{
  background: #f87e10;
  .TopIcon{
    color: white;
  }
}
.TopIcon{
  font-size: 20px;
  color: #999b9f;
}

.RightBackground {
  position: absolute;
  height: 250px;
  width: 350px;
  z-index: 0;
  top: 210px;
  left: 1180px;
  filter: contrast(1.5); // 对比度增强为 1.5 倍，可根据需要调整
}
</style>
