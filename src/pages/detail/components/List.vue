<template>
  <div class="list-wrapper">
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <detail-list v-if="item.children" :list="item.children" class="subTitle"></detail-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.item-title
  line-height :.8rem
  font-size : .32rem
  padding : 0 .2rem
  .item-title-icon
    position :relative
    top : .08rem
    left : .06rem
    display :inline-block
    width : .36rem
    height : .36rem
    margin-right :.1rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    background-size : .4rem
.subTitle
  padding: 0 .3rem
</style>
