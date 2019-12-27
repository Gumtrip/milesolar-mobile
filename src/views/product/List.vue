<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'List',
  components: {},
  data() {
    return {
      products: [],
      loading: true,
      data_page: 1,
      more_data: true
    }
  },
  computed: {},
  created() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      if (this.more_data) {
        this.loading = true
        const res = await this.$api.products({
          page: this.data_page
        })
        this.products = this.products.concat(res.data.data)
        this.loading = false
        if (res.data.meta.current_page >= res.data.meta.last_page) {
          this.more_data = false
        }
        this.data_page++
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .blank{height: 120vh;width: 100vw}
  #contentBox{width: 100%;box-sizing: border-box;padding: 0 15px;display: flex;flex-wrap: wrap;
    .item{width: 50%;box-sizing: border-box;margin-bottom: 10px}
    .item:nth-child(odd){padding-right: 10px}
    .item:nth-child(even){padding-left: 10px}
    .pic{margin-bottom: 10px}
    .title{font-size: 14px}
  }
</style>
