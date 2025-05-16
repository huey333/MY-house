<template>
  <homePageFramework>
    <template #homePage>
      <div class="homeViewBox">
        <!--     轮播图   -->
        <div class="homeViewCarousel">
          <div class="CarouselBox">
            <!-- 使用Swiper官方Vue组件 -->
            <swiper
              class="swiper-container"
              :modules="modules"
              :slides-per-view="1"
              :space-between="50"
              :loop="true"
              :autoplay="{ delay: 5000 }"
              :pagination="{ clickable: true }"
              :navigation="true"
            >
              <swiper-slide v-for="(slide, index) in slides" :key="index">
                <div class="slide-content">
                  <div class="text-section">
                    <h1>{{ slide.title }}</h1>
                    <p>{{ slide.description }}</p>
                    <button class="get-started">GET STARTED</button>
                  </div>
                  <div class="image-section">
                    <img :src="slide.image" alt="Spices" />
                  </div>
                </div>
              </swiper-slide>
              <!-- 分页器和导航按钮 -->
              <div class="swiper-pagination"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </swiper>
          </div>
        </div>

        <!--    主体2    -->
        <div class="homeViewContentBox">
          <!--   商品解释1     -->
          <div class="CommodityShow_1">
            <div class="CommodityShow_1_imageBox">
              <img src="@/assets/cs1.png" alt="" />
            </div>

            <div class="CommodityShow_1_About">
              <span class="aboutTitle1"> About Us </span>

              <span class="aboutTitle2"> Red Rocks Hickory Smoke Seasoning </span>
              <span class="aboutTitle3">
                The American Spice Company sells herbs made from . Both fresh and dried leaves,
                while many of our spices curate from seeds, bark, fruit, flowers, and roots.
              </span>
            </div>
          </div>

          <!--   介绍我们     -->
          <div class="Introduction">
            <div class="IntroductionTitle">
              <span class="IntroductionMinTitle1"> 为什么选择我们？ </span>

              <span class="IntroductionMinAbout1">
                走进我们伟大的美国香料店。它开始于纯粹的功能性需求，需要一个可控的环境来缓和气候的影响。香料店是人类能够适应的一种方式
              </span>

              <div class="IntroductionMinAbout2">
                <div class="IntroductionMinImgBox">
                  <img src="@/assets/Confirm.png" alt=""/>
                </div>
                <span class="IntroductionMinAbout2_1">
                  我们提供最完整的商品，最完整的服务，最完整的体验
                </span>
              </div>

              <div class="IntroductionMinAbout2">
                <div class="IntroductionMinImgBox">
                  <img src="@/assets/Confirm.png" alt="" />
                </div>
                <span class="IntroductionMinAbout2_1">
                  我们提供最完整的商品，最完整的服务，最完整的体验
                </span>
              </div>

              <div class="IntroductionMinAbout2">
                <div class="IntroductionMinImgBox">
                  <img src="@/assets/Confirm.png" alt=""/>
                </div>
                <span class="IntroductionMinAbout2_1">
                  我们提供最完整的商品，最完整的服务，最完整的体验
                </span>
              </div>
            </div>

            <div class="IntroductionNumber">
              <!--   图标   -->
              <div style="display: flex">
                <div class="DisplayTemplate">
                  <img src="@/assets/Fruit.png" alt="" />
                  <span class="DisplayTemplateNumber">500+</span>
                  <span class="DisplayTemplateTitle">水果</span>
                </div>

                <div class="DisplayTemplate">
                  <img src="@/assets/Grouping.png" alt="" />
                  <span class="DisplayTemplateNumber">500+</span>
                  <span class="DisplayTemplateTitle">农户</span>
                </div>

                <div class="DisplayTemplate">
                  <img src="@/assets/Honor.png" alt="" />
                  <span class="DisplayTemplateNumber">500+</span>
                  <span class="DisplayTemplateTitle">荣誉</span>
                </div>
              </div>

              <div style="margin-top: 10px">
                走进我们伟大的美国香料店。它开始于纯粹的功能性需求，需要一个可控的环境来缓和气候的影响。香料商店的庇护所是一种手段，通过这种手段，人类能够适应一个控制环境的纯粹功能性需求，以缓和气候的影响。这是一个早已确立的事实，一个读者
              </div>
            </div>
          </div>
        </div>

        <!--    类别    -->
        <div class="Category">
          <div class="CategoryTitle">
            <span style="font-size: 70px; font-weight: bold"> 我们的类别 </span>

            <!--         图标   -->
          </div>

          <div class="CategoryAbout">
            <div class="CategoryAboutDisplay">
              <img src="@/assets/Apple.jpg" alt="Apple" class="image" />
              <div class="text">精品苹果</div>
            </div>

            <div class="CategoryAboutDisplay">
              <img src="@/assets/Orange.jpg" alt="Orange" class="image" />
              <div class="text">鲜嫩多汁的橙子</div>
            </div>

            <div class="CategoryAboutDisplay">
              <img src="@/assets/Banana.jpg" alt="Banana" class="image" />
              <div class="text">香蕉</div>
            </div>
          </div>
        </div>

        <div class="Category2">
          <div class="CategoryTitle2">
            <span style="font-size: 70px; font-weight: bold"> 热销产品 </span>
            <!--         图标   -->
          </div>

          <div class="CategoryAbout2">
            <div class="CategoryMinAbout2">
              <div class="CategoryAboutDisplay2">
                <img src="@/assets/Apple.jpg" alt="Apple" class="image" />
              </div>
              <div class="text">
                <span style="font-size: 18px; font-weight: bold">精品苹果</span>
                <p></p>
                <span style="color: #e67e22; font-weight: bold">2 元/斤</span>
              </div>
            </div>

            <div class="CategoryMinAbout2">
              <div class="CategoryAboutDisplay2">
                <img src="@/assets/Apple.jpg" alt="Apple" class="image" />
              </div>
              <div class="text">
                <span style="font-size: 18px; font-weight: bold">精品苹果</span>
                <p></p>
                <span style="color: #e67e22; font-weight: bold">2 元/斤</span>
              </div>
            </div>

            <div class="CategoryMinAbout2">
              <div class="CategoryAboutDisplay2">
                <img src="@/assets/Apple.jpg" alt="Apple" class="image" />
              </div>
              <div class="text">
                <span style="font-size: 18px; font-weight: bold">精品苹果</span>
                <p></p>
                <span style="color:#e67e22; font-weight: bold">2 元/斤</span>
              </div>
            </div>
          </div>
        </div>

        <div class="Category3">
          <div class="CategoryTitle3">
            <span style="font-size: 70px; font-weight: bold"> 有趣的事情 </span>
            <!--         图标   -->
          </div>

          <div class="CategoryContent">
            <div class="CategoryContentBox">
              <span style="color: #e67e22; font-weight: bold; font-size: 50px"> 25+ </span>
              <span style="font-size: 30px"> 每日销售量 </span>
            </div>

            <div class="CategoryContentBox">
              <span style="color: #e67e22; font-weight: bold; font-size: 50px"> 25+ </span>
              <span style="font-size: 30px"> 每日销售量 </span>
            </div>

            <div class="CategoryContentBox">
              <span style="color: #e67e22; font-weight: bold; font-size: 50px"> 25+ </span>
              <span style="font-size: 30px"> 每日销售量 </span>
            </div>
          </div>
        </div>







        <!--    主体    -->
      </div>
    </template>
  </homePageFramework>
</template>

<script setup>
import homePageFramework from '@/components/HomePageFramework/homePageFramework.vue'
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// 正确导入Swiper模块
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Autoplay, Pagination, Navigation]

const slides = ref([
  {
    title: 'Garlic, Black Pepper & Chile Powder',
    description:
      'For the most part, chefs use the terms "spices and herbs" interchangeably, but there are differences...',
    image: '@/assets/tp6.jpg.jpg',
  },
  {
    title: 'Garlic, Black Pepper & Chile Powder',
    description:
      'For the most part, chefs use the terms "spices and herbs" interchangeably, but there are differences...',
    image: '@/assets/tp6.jpg.jpg',
  },
  {
    title: 'Garlic, Black Pepper & Chile Powder',
    description:
      'For the most part, chefs use the terms "spices and herbs" interchangeably, but there are differences...',
    image: '@/assets/tp6.jpg.jpg',
  },
  {
    title: 'Garlic, Black Pepper & Chile Powder',
    description:
      'For the most part, chefs use the terms "spices and herbs" interchangeably, but there are differences...',
    image: '@/assets/tp6.jpg.jpg',
  },
  {
    title: 'Garlic, Black Pepper & Chile Powder',
    description:
      'For the most part, chefs use the terms "spices and herbs" interchangeably, but there are differences...',
    image: '@/assets/tp6.jpg.jpg',
  },
])
</script>

<style scoped lang="scss">
@import '@/CSS/Home/homeView.scss';
</style>
