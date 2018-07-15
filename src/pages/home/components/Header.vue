<template>
  <div class="header">
      <div class="header-left">
        <div class="iconfont backward-arrow">&#xe607;</div>
      </div>
      <div class="header-input">
        <input class="iconfont" type="search" :placeholder='icon' name="keywords">
      </div>
      <div class="header-right">
        城市
        <span class="iconfont dropdown-arrow">&#xe64a;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data: function () {
    return {
      icon: '\ue611 输入城市/景点/游玩主题'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display : flex
  line-height : .86rem
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
  .header-right
    width : 1.24rem
    float : right
    text-align :center
    .dropdown-arrow
      font-size: .15rem
      margin-left :-.04rem
</style>
