<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="gallaryImgs" v-show="showGallary" @closeme="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      gallaryImgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg', 'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png']
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
