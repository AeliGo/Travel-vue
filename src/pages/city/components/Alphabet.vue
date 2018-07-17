<template>
  <ul class="list">
    <li
    class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @click="handleLetterClick"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    alpha: {
      type: Object
    }
  },
  data () {
    return {
      isTouched: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.alpha) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop /* 获取第一个A字母距离parent box顶部的高度 */
  },
  methods: {
    handleLetterClick (e) {
      const letter = e.target.innerHTML
      this.$emit('lettersend', letter)
    },
    handleTouchStart () {
      this.isTouched = true
    },
    handleTouchMove (e) { /* 函数节流 */
      if (this.isTouched) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 /* 获取touch 字母距离parent box顶部的高度 */
          const dis = touchY - this.startY
          const index = Math.floor(dis / 19)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('lettersend', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.isTouched = false
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
