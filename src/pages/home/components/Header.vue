<template>
  <div class="header">
      <div class="header-left">
        <span class="iconfont backward-arrow">&#xe607;</span>
      </div>
      <div class="header-input">
        <input class="iconfont" type="search" :placeholder='icon' name="keywords">
      </div>
      <router-link to="/city">
        <div class="header-right">
        {{this.city}}
        <span class="iconfont dropdown-arrow">&#xe64a;</span>
        </div>
      </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeHeader',
  data: function () {
    return {
      icon: '\ue611 输入城市/景点/游玩主题'
    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header
  display : flex
  line-height : $headerHeight
  background : $bgColor
  color :#fff
  .header-left
    width : .64rem
    float : left
    .backward-arrow
      font-size : .4rem
      text-align :center
  .header-input
    flex : 1
    margin-left :.2rem
    input
      width :100%
      height :.62rem
      border-radius :.1rem
      padding-left :.17rem
      color :#666
  .header-right
    min-width : 1.04rem
    float : right
    text-align :center
    color :#fff
    padding-left : .1rem
    .dropdown-arrow
      font-size :.15rem
      margin-left : .04rem
</style>
