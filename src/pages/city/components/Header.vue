<template>
  <div class="header">城市选择
    <router-link to="/">
      <div class="iconfont header-backarrow">&#xe607;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header
  position :relative
  height : $headerHeight
  line-height :$headerHeight
  overflow :hidden
  text-align :center
  color :#fff
  background :$bgColor
  font-size :.32rem
  .header-backarrow
    position :absolute
    top :0
    left :0
    color :#fff
    width :.64rem
    text-align :center
    font-size :.4rem
    
</style>
