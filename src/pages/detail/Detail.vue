<template>
  <div class="">
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: '',
      lastCity: ''
    }
  },
  mounted () {
    this.lastCity = this.$route.params.id
    this.getDetailInfo()
  },
  activated () {
    if (this.lastCity !== this.$route.params.id) {
      this.lastCity = this.$route.params.id
      this.getDetailInfo()
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?id=', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        let data = res.data
        this.sightName = data.sightName
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
        this.bannerImg = data.bannerImg
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height : 50rem
</style>
