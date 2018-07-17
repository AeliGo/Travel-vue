<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="dataNotFound">没有找到数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    dataNotFound () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(elem => {
            if (elem.spell.indexOf(this.keyword) > -1 || elem.name.indexOf(this.keyword) > -1) {
              result.push(elem)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
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
.search-content
  z-index :1
  overflow :hidden
  position :absolute
  top :1.58rem
  left :0
  right :0
  bottom :0
  background :#eee
  .search-item
    line-height :.62rem
    padding-left :.2rem
    color :#666
    background :#fff
</style>
