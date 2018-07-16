<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        paginationType: 'bullets'
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/travel/poi/1807/28/05e1021cd9bdc537.jpg_r_640x290x70_7fc23a19.jpg'
      },
      {
        id: '0002',
        imgUrl: 'https://img1.qunarzz.com/travel/poi/1807/13/79ad0bfc1d279037.jpg_r_640x290x70_a723d318.jpg'
      },
      {
        id: '0003',
        imgUrl: 'https://img1.qunarzz.com/travel/poi/1807/ea/4a20a9ec89b6c537.jpg_r_640x290x70_39c9f7ef.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff !important
.wrapper >>> .swiper-container
    height :0
    overflow :hidden
    padding-bottom :58.9%
.wrapper
  width :100%
  background :#ccc
  .swiper-img
    width :100%
</style>
