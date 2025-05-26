<script setup lang="ts">
const footerData = [
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
import { Message, Phone, Location } from '@element-plus/icons-vue'

const footerDataTow = [
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

// Logo和社交图标数据
const logoImage = 'src/assets/LoginView/Log.png'
const logoDescription =
  'No matter the spices and herbs you are looking for be distracted by the readable.'
import { UserFilled, Share, Promotion, GoodsFilled, ChromeFilled } from '@element-plus/icons-vue'

const socialIcons = [
  { id: 1, icon: UserFilled, link: '#' },
  { id: 2, icon: Share, link: '#' },
  { id: 3, icon: Promotion, link: '#' },
  { id: 4, icon: GoodsFilled, link: '#' },
  { id: 5, icon: ChromeFilled, link: '#' },
]
</script>
<template>
  <div class="mainContainer">
    <div class="centerContainer">
      <img src="../../assets/LoginView/FootBackground.jpg" class="ill" />
      <div
        style="
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 1;
          flex-wrap: wrap;
          margin: 0 auto;
        "
      >
        <div class="leftLogSection">
          <img :src="logoImage" alt="Logo" class="logo" />
          <p class="logdescribe">{{ logoDescription }}</p>
          <div class="socialIcons">
            <div v-for="icon in socialIcons" :key="icon.id" class="socialIcon">
              <a :href="icon.link">
                <component :is="icon.icon" class="leftIcon" />
              </a>
            </div>
          </div>
        </div>
        <div v-for="section in footerData" :key="section.Title" class="coreContent">
          <h3>{{ section.Title }}</h3>
          <ul>
            <li v-for="item in section.Describe" :key="item.id" class="">
              <a v-if="item.id < 11" :href="item.link">{{ item.title }}</a>
              <div v-else class="LatestNews">
                <img :src="item.image" alt="image" class="rightImage" />
                <div class="test">
                  <span class="Badge">{{ item.badge }}</span>
                  <a href="#"><p style="font-weight: bold" class="rightDescribe">{{ item.title }}</p></a>
                  <span class="rightDescribeTow">{{ item.date }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="contactContainer">
        <div v-for="section in footerDataTow" :key="section.icon.name" class="contactContent">
          <div>
            <component class="contactIcon" :is="section.icon" />
          </div>
          <div>
            <div v-for="(item, index) in section.textLines" :key="index" class="contact_Text">
              {{ item }}
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 版权信息</p>
        <div class="footer-links">
          <a href="#">登录</a> | <a href="#">注册</a> | <a href="#">隐私政策</a> |
          <a href="#">帮助中心</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mainContainer {
  width: 100%;
  background-color: #222429;
  display: flex;
  justify-content: center;
}
.centerContainer {
  display: flex;
  flex-wrap: wrap;

  padding-top: 70px;
  padding-bottom: 50px;
  max-width: 1300px;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .ill {
    z-index: 0;
    position: absolute;
    left: 80%;
    top: 36%;
    width: 300px;
    height: 200px;
    filter: contrast(1.5); // 对比度增强为 1.5 倍，可根据需要调整
  }
}
.logo {
  width: 200px;
  height: 80px;
}
a {
  text-decoration: none;
  color: #989a9e;
}
a:hover{
  color: white;
  transition: color 0.4s;
}

.leftLogSection {
  width: 25%;
  padding: 0 20px 0px 0px;
}
.coreContent {
  width: 17%;
}
.logdescribe {
  color: #999;
}
.socialIcons {
  display: flex;
  gap: 17px;
  .socialIcon {
    background: #1c1e22;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 14px 0;
    border-radius: 50%;
  }
  .socialIcon:hover {
    background: #ff9900;
    .leftIcon {
      color: white;
    }
  }
  .leftIcon {
    width: 19px;
    height: 19px;
  }
}
.LatestNews {
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
  color: #999;
}
.rightImage {
  height: 70px;
  width: 70px;
  border-radius: 20%;
}
.Badge {
  display: flex;
  width: 20px;
  justify-content: center;
  align-items: center;
  background: #f67d10;
  color: white;
  font-size: 13px;
  border-radius: 30%;
}
h3 {
  color: white;
  font-weight: bold;
  padding-bottom: 20px;
  font-size: 23px;
}
ul {
  list-style: none;
  padding: 0; /* 清除内边距 */
  margin: 0;
}
li{
  margin-bottom:14px ;
}
.contactContainer {
  display: flex;
  width: 80%;
  background: #1c1e22;
  padding: 3%;
  z-index: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  .contactContent {
    display: flex;
    gap: 10px;
  }
  .contactIcon {
    width: 50px;
  }
}

.footer-bottom {
  margin-top: 20px;
  padding-top: 25px;
  width: 100%;
  color: #999999;
  text-align: center;

  width: 100%;

  border-top: 2px solid #444;
}
@media (max-width: 650px) {
  .leftLogSection {
    width: 100%;
    text-align: center;
    .socialIcons {
      justify-content: center;
    }
  }
  .coreContent {
    width: 100%;
    text-align: center;
  }
  .contactContent {
    width: 100%;
    border-bottom: 1px solid #999999;
  }
  .ill {
    display: none;
  }
  .LatestNews {
    justify-content: center;
    .test{
      width: 50%;
    }
  }
}
</style>
