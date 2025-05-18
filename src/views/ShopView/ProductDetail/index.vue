<template>
  <HomePageFramework>
    <template #homePage>
      <div class="ProductDetailBox">
        <!--    标题    -->
        <div class="ProductDetailTitleBox">
          <img src="@/assets/LoginView/Template1.jpg" alt="水果" />
          <div class="text">
            <span style="font-size: 60px"> 商品详情 </span>
            <br />
            <span style="font-size: 20px">
              芒果、柠檬或草莓。水果来自阳光照耀下的树木和藤蔓，通常在热带和温带气候中茁壮成长。常见的水果有芒果、柠檬和草莓。
            </span>
          </div>
        </div>

        <!--    内容介绍    -->
        <div class="PDAbout">
          <!--     左侧图片   -->
          <div class="PDAboutLeft">
            <div class="LeftImageBox">
              <img src="@/assets/Apple.jpg" alt="" />
            </div>

            <!--    多图片    -->
            <div class="LeftImageListBox">
              <div class="LeftImageList" v-for="item in 4" :key="item">
                <img src="@/assets/Apple.jpg" alt="" />
              </div>
            </div>
          </div>

          <!--    右侧介绍   -->
          <div class="PDAboutRight">
            <div class="PDRTitle">
              <span> 苹果 </span>
            </div>

            <div class="PDRAmount">
              <span> 250 ￥ </span>
            </div>

            <div class="Score">
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value} points"
              />
            </div>

            <div class="ProductIntroduction">
              <span>
                Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Donec velit neque,
              </span>

              <div class="PID">
                <span style="font-size: 17px; font-weight: bold; letter-spacing: 1px">
                  产品编号：
                </span>
                <span> #3382dk </span>
              </div>

              <div class="PID">
                <span style="font-size: 17px; font-weight: bold; letter-spacing: 1px">
                  库存：
                </span>
                <span> 17458 </span>
              </div>

              <div class="PID">
                <span style="font-size: 17px; font-weight: bold; letter-spacing: 1px">
                  地址：
                </span>
                <span> 广西壮族自治区南宁市青秀区 </span>
              </div>

              <div class="PID">
                <span style="font-size: 17px; font-weight: bold; letter-spacing: 1px">
                  溯源编号：
                </span>
                <span> </span>
              </div>

              <div class="PID">
                <span style="font-size: 17px; font-weight: bold; letter-spacing: 1px">
                  标签：
                </span>
                <span>
                  <el-tag type="success">苹果</el-tag>
                </span>
              </div>
            </div>

            <div class="Operation">
              <button class="AddCart">
                <span>加入购物车</span>
              </button>

              <button class="Collection">
                <span>收藏</span>
              </button>
            </div>

            <div class="Hash">
              <span class="HashTitle"> 商品哈希值 </span>

              <span class="HashValue">
                e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
              </span>
            </div>
          </div>
        </div>

        <!--    介绍    -->
        <div class="Supplement">
          <div class="SupplementMinBox">
            <!--        目录    -->
            <div class="SupplementTableContents">
              <div class="SupplementTableContentsBox">
                <span
                  v-for="(item, index) in TableContents"
                  :key="index"
                  @click="TableContentsClick(index)"
                  :class="{
                    SupplementTableContentsBoxSpan: true,
                    SupplementTableContentsBoxSpanActive: index === newTable,
                  }"
                >
                  {{ item.name }}
                </span>
              </div>
            </div>

            <div class="SupplementContents">
              <transition name="fade" mode="out-in">
                <div class="Description" v-if="newTable === 0">
                  <span class="DescriptionTitle"> 商品描述 </span>

                  <span>
                    在大自然的果园里，苹果以其鲜艳的色泽、香甜的滋味和丰富的营养脱颖而出，成为人们餐桌上的常客。咬一口，清脆的口感在齿间爆开，甘甜的汁液瞬间唤醒味蕾，仿佛品尝到了大自然最纯净的味道。
                    苹果富含膳食纤维，能有效促进肠胃蠕动，帮助消化，缓解便秘。它还含有多种维生素和矿物质，如维生素C、钾等，能增强免疫力，维持身体电解质平衡。更值得一提的是，苹果中的抗氧化成分，如类黄酮和多酚，有助于抵抗自由基，延缓衰老，守护心血管健康。
                    无论是直接食用，还是制作成果汁、果酱，苹果都能为生活增添一份甜蜜与活力。它既可以是孩子们课间补充能量的健康零食，也是上班族忙碌工作中的清新小憩。在家庭聚会时，一盘切好的苹果，更是简单又受欢迎的分享佳品。
                    选择苹果，就是选择一份健康、一份自然的馈赠。让这颗红彤彤的果实，成为你日常饮食中的美好点缀，开启健康生活的每一天。
                  </span>
                </div>

                <div class="AdditionalInformation" v-else-if="newTable === 1">
                  <span class="Title"> 商品信息补充 </span>

                  <div class="AdditionalInformationDescriptions">
                    <el-table :data="tableData" border style="width: 100%">
                      <el-table-column prop="Attributes" label="属性" width="250" />
                      <el-table-column prop="Values" label="内容" />
                    </el-table>
                  </div>
                </div>

                <div class="Reviews" v-else-if="newTable === 2">
                  <Comment></Comment>
                </div>

                <div class="Tracing" v-else-if="newTable === 3">
                  <TraceabilityInformation></TraceabilityInformation>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </template>
  </HomePageFramework>
</template>

<script setup>
import HomePageFramework from '@/components/HomePageFramework/homePageFramework.vue'
import Comment from '@/views/ShopView/ProductDetail/Comment.vue'
import TraceabilityInformation from './TraceabilityInformation.vue'

import { ref } from 'vue'

const value = ref(3.7)
const newTable = ref(0)

const TableContents = [
  {
    id: 1,
    name: '商品介绍',
  },
  {
    id: 2,
    name: '商品信息补充',
  },
  {
    id: 3,
    name: '评论',
  },
  {
    id: 4,
    name: '商品溯源信息',
  },
]

const tableData = [
  {
    Attributes: '颜色',
    Values: '淡红色，酒红色',
  },
  {
    Attributes: '平均果重',
    Values: '50g~70g',
  },
  {
    Attributes: '产地',
    Values: '广西',
  },
  {
    Attributes: '包装',
    Values: '果皮+果肉+果皮',
  },
  {
    Attributes: '储藏方法',
    Values: '常温',
  },
  {
    Attributes: '保质期',
    Values: '3天',
  },
  {
    Attributes: '使用方法',
    Values: '吃掉',
  },
]

// 方法区域
function TableContentsClick(index) {
  newTable.value = index
}
</script>

<style scoped lang="scss">
@import '@/CSS/ShopVIew/ProductDetail/index.scss';
</style>
