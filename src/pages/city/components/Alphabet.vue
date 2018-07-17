<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of alpha" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    alpha: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.list
  display :flex
  flex-direction :column
  justify-content : center
  position : absolute
  top : 1.58rem
  right :0
  bottom :0
  width : .4rem
  .item
    text-align :center
    line-height : .38rem
    color :$bgColor
    font-weight :bold
</style>
