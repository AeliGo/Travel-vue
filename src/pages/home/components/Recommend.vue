<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li"
      class="item border-bottom"
      v-for="item of recommendListPart"
      :key="item.id"
      :to="/detail/+item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
      <router-link tag="li"
      class="item border-bottom"
      v-for="item of recommendListLeft"
      :key="item.id"
      v-if="loadmore"
      :to="/detail/+item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
      <div class="loadall" @click="showProducts">{{loadmore ? '隐藏部分产品' : '显示所有产品'}}</div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      loadmore: false
    }
  },
  methods: {
    showProducts () {
      this.loadmore = !this.loadmore
    }
  },
  computed: {
    recommendListPart () {
      let recommendListPart = this.list.filter((item, index) => {
        return index < 3
      })
      return recommendListPart
    },
    recommendListLeft () {
      let recommendListLeft = this.list.filter((item, index) => {
        return index >= 3
      })
      return recommendListLeft
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

.title
  margin-top :.2rem
  line-height :.8rem
  background :#eee
  text-indent : .2rem
.item
  display :flex
  height :1.9rem
  overflow :hidden
  .item-img
    width :1.7rem
    height :1.7rem
    padding :.1rem
  .item-info
    flex:1
    padding:.1rem
    min-width :0
    .item-title
      line-height :.54rem
      font-size :.32rem
      ellipsis()
    .item-desc
      line-height :.4rem
      color:#ccc
      ellipsis()
    .item-button
      background :#ff9300
      padding : 0 .2rem
      border-radius :.06rem
      color :#fff
      margin-top :.16rem
      line-height : .44rem
.loadall
    color : $bgColor
    line-height :.8rem
    text-align :center
    font-weight : bold
</style>
