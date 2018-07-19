<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span>
          39
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @closeme="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/animation/FadeAnimation'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position :relative
  height :0
  overflow :hidden
  padding-bottom : 55%
  .banner-img
    width :100%
  .banner-info
    position :absolute
    left :0
    right :0
    bottom :0
    line-height :.6rem
    display :flex
    color : #fff
    background-image :linear-gradient(top , rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8))
    .banner-title
      font-size :.32rem
      padding :0 .2rem
      flex :1
    .banner-number
      height :.36rem
      line-height :.36rem
      padding : 0 .4rem
      border-radius : .2rem
      background : rgba( 0, 0, 0,.8)
      font-size :.24rem
      margin-top :.14rem
      .banner-icon
        font-size :.34rem
</style>
