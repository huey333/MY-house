<template>
  <HomePageFramework>
    <template #homePage>
      <!--   外壳   -->
      <div class="ShopBox">

        <!--    标题    -->
        <div class="ShopTitleBox">
          <img src="@/assets/LoginView/Template1.jpg" alt="水果" />
          <div class="text">
            <span style="font-size: 60px"> 商城 </span>
            <br />
            <span style="font-size: 20px">
              芒果、柠檬或草莓。水果来自阳光照耀下的树木和藤蔓，通常在热带和温带气候中茁壮成长。常见的水果有芒果、柠檬和草莓。
            </span>
          </div>
        </div>

        <div class="ShopContent">
          <div class="ShopContentLeft">
            <!--       展示模块     -->
            <div class="ShopCommodityBox" v-for="(item, index) in 10" :key="index">
              <div class="ShopCommodityBoxImageBox">
                <img src="@/assets/Apple.jpg" alt="" />
              </div>

              <div class="ShopCommodityTitle">
                <span style="margin: auto; font-size: 18px; font-weight: bold; margin-top: 10px"
                  >豪大大苹果</span
                >
                <div class="ShopCommodityTitlePR">
                  <span style="margin-right: 10px; color: #e66c00; font-weight: bold">
                    12 元/500g
                  </span>
                  <span style="color: #e66c00; font-weight: bold"> 4.5 分 </span>
                </div>

                <span class="ShopCommodityAbout">
                  Use herbs in cooking.aromatherapy medicines, and cosmetics.
                </span>
                <button class="ShopCommodityBtn">加入购物车</button>
              </div>
            </div>
          </div>

          <div class="ShopContentRight">
            <span style="font-size: 20px; font-weight: bold"> 搜索 </span>

            <div class="SearchBox">
              <input type="text" placeholder="请输入商品名称" />
              <button>搜索</button>
            </div>

            <!--  价格范围    -->
            <div class="PriceBox">
              <span style="font-size: 20px; font-weight: bold"> 价格范围 </span>

              <div class="PriceRange">
                <el-select v-model="value" placeholder="Select" class="ESO" style="margin-left: 0">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>

                -

                <el-select v-model="value" placeholder="Select" class="ESO">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </div>

            <!--    分类   -->
            <div class="ClassificationBox">
              <span style="font-size: 20px; font-weight: bold"> 商品分类 </span>

              <div class="ECI">
                <el-collapse accordion>
                  <el-collapse-item name="1">
                    <template #title="{ isActive }">
                      <div :class="['title-wrapper', { 'is-active': isActive }]">
                        苹果
                        <el-icon class="header-icon">
                          <info-filled />
                        </el-icon>
                      </div>
                    </template>
                    <div>
                      Consistent with real life: in line with the process and logic of real life,
                      and comply with languages and habits that the users are used to;
                    </div>
                    <div>
                      Consistent within interface: all elements should be consistent, such as:
                      design style, icons and texts, position of elements, etc.
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Feedback" name="2">
                    <div>
                      Operation feedback: enable the users to clearly perceive their operations by
                      style updates and interactive effects;
                    </div>
                    <div>
                      Visual feedback: reflect current state by updating or rearranging elements of
                      the page.
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Efficiency" name="3">
                    <div>Simplify the process: keep operating process simple and intuitive;</div>
                    <div>
                      Definite and clear: enunciate your intentions clearly so that the users can
                      quickly understand and make decisions;
                    </div>
                    <div>
                      Easy to identify: the interface should be straightforward, which helps the
                      users to identify and frees them from memorizing and recalling.
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Controllability" name="4">
                    <div>
                      Decision making: giving advices about operations is acceptable, but do not
                      make decisions for the users;
                    </div>
                    <div>
                      Controlled consequences: users should be granted the freedom to operate,
                      including canceling, aborting or terminating current operation.
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>

            <!--   热销产品     -->
            <div class="BestsellerBox">
              <span style="font-size: 20px; font-weight: bold"> 热销产品 </span>

              <!--   展示模版2   -->
              <div class="BestsellerDisplayBox" v-for="(item, index) in 4" :key="index">
                <div class="DisplayImg">
                  <img src="@/assets/Apple.jpg" alt="" />
                </div>

                <div class="DisplayAbout">
                  <span style="font-weight: bold"> Red Rocks Hickory Smoke Seasoning </span>

                  <span style="color: #e66c00">
                    <el-icon><Clock /></el-icon> June 4 , 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </HomePageFramework>
</template>

<script setup>
import HomePageFramework from '@/components/HomePageFramework/homePageFramework.vue'
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<style scoped lang="scss">
@import '@/CSS/ShopVIew/Shop.scss';
</style>
