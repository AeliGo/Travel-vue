<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class="swiper-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: false,
        paginationType: 'fraction',
        observeParents: true, /* 用于每次dom结构变化时swiper自我刷新 */
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('closeme')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow :inherit
.container
  display :flex
  flex-direction :column
  justify-content :center
  z-index :99
  position :fixed
  left :0
  right :0
  top :0
  bottom :0
  background :#000
  .wrapper
    width :100%
    height :0
    padding-bottom :100%
    .swiper-img
      width :100%
    .swiper-pagination
      color :#fff
      bottom :-1rem
</style>
