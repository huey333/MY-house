<template>
  <homePageFramework>
    <template #homePage>
                                              <!-- header 头部布局-->
      <div class="login-page">
        <div class="content">
          <h1 class="title1">Login</h1>
          <p class="description1">
            Cloves, ginger, or pepper. Herbs are derived from green leaves and often grow in temperate climates. Common herbs are mint, rosemary.
          </p>
        </div>

        <div class="breadcrumb">
          <span class="breadcrumb-item">Home</span>
          <span class="breadcrumb-separator">/</span>
          <span class=" current">Login</span>
        </div>
      </div>


        <!-- 整个认证容器，作为页面整体的包裹元素，设置flex布局纵向排列内容，最小高度占满视口高度，指定字体 -->
        <div class="auth-container">
          <!-- 顶部标题区域，用于放置“Log in”标题，设置内边距、文本居中、背景色 -->
          <div class="header">
            <h1 class="title2">
              Log <span class="highlight">in</span>
            </h1>
            <p>For the most part, chefs use the terms "spices and herbs" interchangeably, but there </p>
            <p>are differences. Spices that .</p>
          </div>

                                    <!-- body登陆页面的布局 -->
          <!-- 主内容区域，包含图片和登录表单两部分，采用flex布局横向排列 -->
          <div class="main-content">
            <!-- 左侧图片区域，用于展示香料图片和描述文字，设置flex属性占空间、纵向排列、居中内容，有背景色和内边距 -->
            <div class="left-panel">
              <!-- 香料图片，设置宽度、最大宽度、边框圆角、阴影，有鼠标悬停放大的过渡动画，鼠标悬停时放大 -->
              <img
              src="../../assets/LoginView/loginimg.jpg" height="429" width="540" />
              <!-- 描述文字，设置字体大小、颜色、最大宽度、文本居中、行高，用于介绍相关内容 -->

            </div>

            <!-- 右侧登录表单区域，设置flex属性占空间、纵向排列、居中内容，有内边距 -->
            <div class="right-panel">
              <!-- 登录表单，设置宽度、最大宽度、内边距、边框圆角、阴影、背景色 -->
              <form class="login-form">
                <!-- 邮箱输入框，使用v-model实现双向绑定，绑定到email变量，设置样式 -->
                <input type="email" v-model="email" placeholder="Email" class="input-field">
                <!-- 密码输入框，使用v-model实现双向绑定，绑定到password变量，设置样式 -->
                <input type="password" v-model="password" placeholder="Password" class="input-field">

                <!-- 表单选项区域，用于放置“记住我”复选框和“忘记密码？”链接，设置布局和样式 -->
                <div class="form-options">
                  <!-- “记住我”相关内容区域，用于包裹复选框和标签，设置横向布局 -->
                  <div class="remember-me">
                    <!-- 记住我复选框，使用v-model实现双向绑定，绑定到rememberMe变量，设置样式 -->
                    <input type="checkbox" v-model="rememberMe" id="remember-checkbox">
                    <!-- 记住我复选框的标签，设置样式 -->
                    <label for="remember-checkbox">Remember Me</label>
                  </div>
                  <!-- 忘记密码链接，设置颜色、去除下划线，有鼠标悬停变色的过渡动画，鼠标悬停时颜色改变 -->
                  <a href="#" class="forgot-password">Forgot password?</a>
                </div>

                <!-- 登录按钮，点击时调用login方法，prevent修饰符阻止表单默认提交行为，设置样式和交互效果 -->
                <button type="submit" class="login-button" @click.prevent="login">LOGIN</button>
                <!-- 使用Google登录按钮，设置样式和交互效果 -->
                <button type="button" class="google-button">
                  <i class="fa-brands fa-google mr-2"></i> CONTINUE WITH GOOGLE
                </button>
              </form>

              <!-- 注册提示文字区域，设置外边距、字体大小、颜色 -->
              <p class="signup-text">
                Don't Have an Account? <a href="#" class="signup-link">Sign Up</a>
              </p>
            </div>
          </div>
        </div>

                                      <!-- foot底部布局-->

      <div class="main-container">
        <!-- 上半部分容器 -->
        <div class="upper-container">
          <!-- 左侧第一个容器 -->
          <div class="left-container">
           <img
            src="../../assets/LoginView/Log.png" height="117" width="293" />
            <p class="description">
              No matter the spices and herbs you are looking for be distracted by the readable.
            </p>
            <div class="social-icons">
              <a href="#" class="icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="icon">
                <i class="fab fa-google"></i>
              </a>
            </div>
          </div>
          <!-- Solutions容器 -->
          <div class="solutions-container">
            <h3 class="section-title">Solutions</h3>
            <ul class="section-links">
              <li><a href="#">Ecommerce</a></li>
              <li><a href="#">Account</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Cart</a></li>
            </ul>
          </div>
          <!-- Company容器 -->
          <div class="company-container">
            <h3 class="section-title">Company</h3>
            <ul class="section-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacts</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>
          <!-- Latest News容器 -->
          <div class="news-container">
            <h3 class="section-title">Latest News</h3>
            <div class="news-item" v-for="(news, index) in newsList" :key="index">
              <img :src="news.image" alt="News Image" class="news-image">
              <div class="news-details">
                <span class="news-number">{{ news.number }}</span>
                <h4 class="news-title">{{ news.title }}</h4>
                <p class="news-date">{{ news.date }}</p>
              </div>

            </div>

          </div>
        </div>
        <!-- 下半部分容器 -->
        <div class="lower-container">
          <!-- 地址容器 -->
          <div class="address-container">

            <img src="../../assets/LoginView/loading.png" height="118" width="82" /><i class="fas fa-map-marker-alt"></i>
            <p>
              2416 Mapleview Drive<br>
              Tampa, FL 33634
            </p>
          </div>
          <!-- 邮箱容器 -->
          <div class="email-container">
            <i class="fas fa-envelope"></i>

            <p>
              Email : contact@website.com<br>
              Inquiries : info@mail.com
            </p>
          </div>
          <!-- 电话容器 -->
          <div class="phone-container">
            <i class="fas fa-phone"></i>
            <p>
              Telephone : 0029129102920<br>
              Mobile : 0029129102920
            </p>
          </div>
        </div>
      </div>

    </template>
  </homePageFramework>
</template>
    <style scoped lang="scss">
                                               /* header 头部属性 */
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
      .title1 {
        font-size: 3em;
        margin-bottom: 10px;
        margin-left: 150px;
        position: relative;
        top: 60px; /* 可选：增加顶部位置 */
        font-weight: bold; /* 设置字体加粗 */
      }

      .description1 {
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


                                               /* body登录页属性 */


      /* 整个认证容器样式 */
      .auth-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-family: 'Inter', sans-serif;
      }

      /* 顶部标题区域样式 */
      .header {
        padding: 40px 0;
        text-align: center;
        background-color: #f8f9fa;
      }

      /* 标题样式 */
      .title2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #333;
      }

      /* 标题中“in”文字的样式，突出颜色 */
      .highlight {
        color: #ff7e1d;
      }

      /* 主内容区域样式 */
      .main-content {
        display: flex;
        flex: 1;
      }

      /* 左侧图片区域样式 */
      .left-panel {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f8f9fa;
        padding: 40px;
      }

      /* 香料图片样式 */
      .spices-image {
        width: 80%;
        max-width: 500px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        transition: transform 0.3s ease;
      }

      /* 香料图片鼠标悬停样式 */
      .spices-image:hover {
        transform: scale(1.02);
      }

      /* 描述文字样式 */
      .description {
        font-size: 1rem;
        color: #666;
        max-width: 400px;
        text-align: center;
        line-height: 1.6;
      }

      /* 右侧登录表单区域样式 */
      .right-panel {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px;

      }

      /* 登录表单样式 */
      .login-form {
        width: 100%;
        max-width: 400px;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        background-color: white;
      }

      /* 输入框样式 */
      .input-field {
        width: 100%;
        padding: 14px 18px;
        margin-bottom: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.3s ease;
      }

      /* 输入框获得焦点时的样式 */
      .input-field:focus {
        border-color: #ff7e1d;
      }

      /* 表单选项区域样式 */
      .form-options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        font-size: 0.9rem;
      }

      /* “记住我”区域样式 */
      .remember-me {
        display: flex;
        align-items: center;
      }

      /* “记住我”复选框样式（在remember-me区域内的样式补充） */
      .remember-me input {
        margin-right: 8px;
      }

      /* 忘记密码链接样式 */
      .forgot-password {
        color: #ff7e1d;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      /* 忘记密码链接鼠标悬停样式 */
      .forgot-password:hover {
        color: #e66c00;
      }

      /* 登录按钮样式 */
      .login-button {
        width: 100%;
        padding: 14px 18px;
        background-color: #ff7e1d;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-bottom: 15px;
      }

      /* 登录按钮鼠标悬停样式 */
      .login-button:hover {
        background-color: #e66c00;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 126, 29, 0.25);
      }

      /* 使用Google登录按钮样式 */
      .google-button {
        width: 100%;
        padding: 14px 18px;
        background-color: white;
        color: #333;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      /* 使用Google登录按钮鼠标悬停样式 */
      .google-button:hover {
        background-color: #f8f9fa;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      }

      /* 注册提示文字样式 */
      .signup-text {
        margin-top: 25px;
        font-size: 0.9rem;
        color: #666;
      }

      /* 注册链接样式 */
      .signup-link {
        color: #ff7e1d;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
      }

      /* 注册链接鼠标悬停样式 */
      .signup-link:hover {
        color: #e66c00;
      }

      /* 响应式布局 - 移动端，当屏幕宽度小于等于768px时应用以下样式 */
      @media (max-width: 768px) {
        /* 主内容区域改为纵向排列 */
        .main-content {
          flex-direction: column;
        }

        /* 左侧图片区域和右侧登录表单区域内边距调整 */
        .left-panel, .right-panel {
          padding: 20px;
        }

        /* 香料图片宽度调整 */
        .spices-image {
          width: 100%;
          max-width: 300px;
        }

        /* 登录表单内边距调整 */
        .login-form {
          padding: 25px;
        }
      }

                                               /* foot底部属性 */
      /* 整体大容器样式 */
      .main-container {
        background-color: #222429;
        color: white;
        padding: 20px;
        font-family: Arial, sans-serif;
      }

      /* 上半部分容器样式 */
      .upper-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        margin-left: 200px;
        margin-right: 200px;
        margin-top: 70px;
      }

      /* 左侧第一个容器样式 */
      .left-container {
        text-align: center;
        flex: 1;
        margin-right: 70px;
      }

      .logo {
        width: 150px;
        margin-bottom: 10px;
      }

      .description {
        line-height: 1.6;
        margin-bottom: 15px;
      }

      .social-icons {
        display: flex;
        justify-content: center;
        gap: 15px;
      }

      .icon {
        color: white;
        font-size: 20px;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .icon:hover {
        color: #ff7e1d;
      }

      /* Solutions、Company、Latest News容器通用样式 */
      .solutions-container,
      .company-container,
      .news-container {
        flex: 1;
        margin-left: 20px;

      }


      .section-title {
        margin-bottom: 15px;
        font-size: 20px;
        font-weight: 800;
      }

      .section-links {
        list-style-type: none;
        padding: 0;

      }

      .section-links li {
        margin-bottom: 30px;
        margin-top: 10px;
        margin-bottom: 20px;

      }

      .section-links a {
        color: #989a9e;
        font-weight: 549
      ;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .section-links a:hover {
        color: white;

      }

      /* Latest News容器内新闻项样式 */
      .news-item {
        display: flex;
      }

      .news-image {
        width: 80px;
        height: 80px;
        border-radius: 5px;
        margin-right: 15px;
      }

      .news-details {
        flex: 1;
      }

      .news-number {
        position: relative;

        background-color: #ff7e1d;
        color: white;
        padding: 3px 8px;
        border-radius: 50%;
        display: flex;
        width: 32px;         // 固定宽度
        height: 32px;        // 固定高度
        align-items: center; // 垂直居中
        justify-content: center; // 水平居中
        font-size: 16px;
      }

      .news-title {
        font-size: 16px;
        margin-bottom: 5px;
      }

      .news-date {
        color: #ccc;
        font-size: 14px;
      }

      /* 下半部分容器样式 */
      .lower-container {
        display: flex;
        justify-content: space-around;
        border-top: 1px solid #444;
        border-bottom: 1px solid #444;
        padding: 20px 0;
        background-color: #1c1e22;
        width: 70%;
        height: 160px;
        justify-content: center;

      }

      /* 地址、邮箱、电话容器通用样式 */
      .address-container,
      .email-container,
      .phone-container {
        text-align: center;
      }

      .address-container i,
      .email-container i,
      .phone-container i {
        font-size: 30px;
        margin-bottom: 10px;
        color: #ff7e1d;
      }
    </style>




<script setup>
import homePageFramework from '@/components/HomePageFramework/homePageFramework.vue'

// 引入Vue 3组合式API中的ref函数，用于创建响应式变量
import { ref } from 'vue';

// 创建响应式变量email，用于存储邮箱输入值
const email = ref(['']);
// 创建响应式变量password，用于存储密码输入值
const password = ref(['']);
// 创建响应式变量rememberMe，用于存储“记住我”复选框的勾选状态
const rememberMe = ref(false);

// 登录函数，目前在控制台打印登录信息，实际项目中应调用API进行登录验证
const login = () => {
  console.log('Logging in with:', { email: email.value, password: password.value });
  // 实际项目中这里应该调用API进行登录验证
};
const newsList = [
  {
    image: "https://picsum.photos/id/1080/300/200",
    number: "12",
    title: "Red Rocks Hickory Smoke Seasoning",
    date: "June 4, 2022"
  },
  {
    image: "https://picsum.photos/id/1081/300/200",
    number: "9",
    title: "This is a test to try out how things work",
    date: "January 4, 2022"
  }
];

</script>

<style scoped lang="scss">



</style>
