<template>
  <div class="wrapper">
    <h3 id="cateTitle" v-text="cateTitle"></h3>

    <ul
      id="contentBox"
      v-infinite-scroll="getProducts"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li v-for="(product,key) in products" :key="key" class="item">
        <router-link :to="{name:'product.show',params:{id:product.id}}">
          <div class="flexPic pic">
            <img :src="product.main_image" alt="">
          </div>
          <h5 class="title" v-text="product.title"></h5>
        </router-link>
      </li>
    </ul>
    <Loading :loading="loading" :more-data="more_data"></Loading>
  </div>
</template>

<script>
import Loading from '@/components/utils/Loading'
export default {
  name: 'List',
  components: {
    Loading
  },
  data() {
    return {
      products: [],
      cateTitle: 'ALL',
      loading: true,
      more_data: true,
      page: 1,
      postData: {}
    }
  },
  computed: {},
  created() {
    this.postData.category_id = this.$route.query.category_id
    this.getProducts()
  },
  methods: {
    async getProducts() {
      if (this.more_data) {
        this.loading = true
        const res = await this.$api.products({
          filter: this.postData,
          page:this.page
        })
        this.products = this.products.concat(res.data.data)
        if (res.data.meta.current_page >= res.data.meta.last_page) {
          this.more_data = false
        }
        this.page++
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #cateTitle{height: 37px;
    line-height: 37px;
    font-size: 24px;
    color: #000;
    font-family: "Open Sans Bold";
  }
  .blank{height: 120vh;width: 100vw}
  #contentBox{
    margin-top:34px ;
    box-sizing: border-box;;display: flex;flex-wrap: wrap;

    .item{width: 50%;box-sizing: border-box;margin-bottom: 10px;padding:0 5px;overflow: hidden;
      a{display: block;border: 1px solid #eee;padding-bottom: 10px}
    }
    .pic{margin-bottom: 10px;height: 168px;}
    .title{font-size: 16px;color: #000;width: 90%;margin: 0 auto;font-family: "Open Sans Bold";height: 56px;overflow: hidden}
  }
</style>
