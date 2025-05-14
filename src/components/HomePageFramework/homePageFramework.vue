<template>
  <div class="home-page-framework">
    <!-- 头部 -->
    <div class="home-page-header">
      <div class="home-page-header-title-image">
        <img src="@/assets/zhnawei.png" alt="" />
      </div>

      <div class="home-page-header-title">
        <el-dropdown>
          <span class="el-dropdown-link"> HOME PAGES </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item class="el-dropdown-item-box">首页1</el-dropdown-item>
              <el-dropdown-item>首页2</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dropdown>
          <span class="el-dropdown-link"> PAGES </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dropdown>
          <span class="el-dropdown-link"> SHOP </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dropdown>
          <span class="el-dropdown-link"> BLOG </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dropdown>
          <span class="el-dropdown-link"> CONTACT US </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>

      <div class="home-page-header-title-Search">
        <div class="Search-image">
          <img src="@/assets/Search.png" alt="" />
        </div>

        <div class="UserInfo">登录</div>
      </div>
    </div>

    <!-- 内容 -->
    <div class="home-page-content">
      <slot name="homePage"> </slot>
    </div>

    <!-- 底部 -->
    <div class="home-page-bottom">
      <p>版权所有 © 2025</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.home-page-framework {
  width: 100%;
  min-height: 100vh; // 确保框架高度至少为视口高度
  display: flex;
  flex-direction: column;
}

.home-page-header {
  width: 100%;
  height: 86px;
  display: flex;

  .home-page-header-title-image {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      width: 131px;
      height: 61px;
      margin-right: 15%;
    }
  }

  .home-page-header-title {
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .el-dropdown {
      width: 20%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .el-dropdown-item-box {
      width: 150px;
      border: aqua 1px solid;
    }

    .el-dropdown-link {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        border: none !important;
        color: rgba(249, 126, 15, 1);
      }
    }
  }

  .home-page-header-title-Search {
    width: 20%;
    height: 100%;
    display: flex;

    .Search-image {
      width: 15%;
      height: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: #ecf0f1 1px solid;
      border-radius: 8px;
      margin: auto;

      img {
        width: 35%;
      }
    }

    .UserInfo {
      width: 20%;
      height: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: #ecf0f1 1px solid;
      border-radius: 8px;
      margin: auto 10px;
    }
  }
}

.home-page-content {
  width: 100%;
  flex: 1; // 让内容区域占据剩余空间
  overflow-y: auto; // 确保内容区域可以滚动

}

.home-page-bottom {
  width: 100%;
  height: 10%;
  border: 1px solid #2c3e50;
  background: rgba(33, 36, 41, 1);
  color: white;
  text-align: center;
  padding: 10px 0;
  box-sizing: border-box;
}
</style>
