<template>
  <div class="CommentBox">
    <span class="CommentTitle"> 留下你的评论吧 </span>

    <div class="CommentEvaluation">
      <el-rate v-model="value" clearable />
      <span style="margin: auto 10px; font-size: 12px">你的评分</span>
    </div>

    <div class="CommentText">
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="text"
        :rows="5"
        :autosize="{ minRows: 5, maxRows: 5 }"
        maxlength="500"
        show-word-limit
        resize="none"
        class="TextInput textarea-no-resize"
      />
    </div>

    <div class="CommentButton">
      <button>
        <span> 提交 </span>
      </button>
    </div>

    <!--  评论模版  -->
    <div class="CommentTemplateBox" v-for="( index) in 10" :key="index">
      <div class="TemplateImageBox">
        <img src="@/assets/Apple.jpg" alt="头像" />
      </div>

      <div class="TemplateAbout">
        <span class="UserName"> Robert John </span>

        <el-rate v-model="value" clearable />

        <span class="TemplateTime"> Jan 01, 2023 </span>

        <span class="TextContent">
          Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
          approaches to corporate strategy foster collaborative thinking to further the overall
          value proposition. Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster collaborative thinking to
          further the overall value proposition.
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(3)
</script>

<style scoped lang="scss">
.CommentBox {
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.CommentTitle {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

.CommentEvaluation {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 10px;
}

.CommentText {
  width: 100%;
  height: auto;
  margin-top: 10px;

  .TextInput {
    width: 100%;
    background: #f4f5f8;
  }
}

.CommentButton {
  width: 100%;
  height: 60px;
  margin: 20px 0 40px 0;

  button {
    width: 150px;
    height: 60px;
    border-radius: 20px;
    border: none;
    background: #f87f0f;
    color: #fff;
    font-size: 16px;
    letter-spacing: 1px;
    margin: auto;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    span {
      position: relative;
      z-index: 2;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: #d86700;
      transition: height 0.3s ease-in-out;
    }

    &:hover::before {
      height: 100%;
    }
  }
}

.CommentTemplateBox {
  width: 100%;
  height: auto;
  min-height: 180px;
  display: flex;
  margin: 20px 0;
  border-bottom: #e9e9e9 solid 1px;
}

.TemplateImageBox {
  width: 100px;
  height: 100%;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}

.TemplateAbout {
  width: calc(100% - 125px);
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 25px;

  .UserName {
    font-size: 25px;
    font-weight: bold;
  }

  .TemplateTime {
    font-size: 15px;
    font-weight: bold;
    margin-top: 5px;
    color: #ff7e1d;
  }
  .TextContent {
    font-size: 17px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
</style>
