<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
      </div>
      <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="item of hot" :key="item.id">
              <div class="button">{{item.name}}</div>
            </div>
          </div>
      </div>
      <div class="area" v-for="(alphaItem, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="item of alphaItem" :key="item.id">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      this.scroll.scrollToElement(this.$refs[this.letter][0], 300)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.border-topbottom
  &:before
    border-color :#ccc
  &:after
    border-color:#ccc
.border-bottom
  &:after
    border-color:#ccc
.list
  overflow :hidden
  position :absolute
  top :1.58rem
  left :0
  right :0
  bottom :0
  .title
    line-height :.54rem
    background :#eee
    padding-left : .2rem
    color:#666
    font-size : .26rem
  .button-list
    padding : .1rem .6rem .1rem .1rem
    overflow :hidden
    .button-wrapper
      float : left
      width: 33.33%
      .button
        text-align :center
        margin :.1rem
        border: .02rem solid #ccc
        padding : .1rem 0
        border-radius :.06rem
  .item-list
    .item
      line-height :.76rem
      color :#666
      padding-left :.2rem
</style>
