<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.search
  height :.72rem
  background :$bgColor
  padding : 0 .1rem
  .search-input
    width :100%
    height :.62rem
    line-height :.62rem
    border-radius : .06rem
    text-align :center
    color :#666
    padding : 0 .16rem
    box-sizing : border-box
</style>
