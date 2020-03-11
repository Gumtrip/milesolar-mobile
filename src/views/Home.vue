<template>
  <div>
    <div id="banner">
      <img src="https://n1-q.mafengwo.net/s15/M00/13/5B/CoUBGV3zu8eAb3LQAAJlPpSYUwU357.jpg" alt="">
    </div>
      <section id="indexCategories">
        <ul>
          <li v-for="(category,key) in product_categories" :key="key">
            <router-link to="/" class="cateBox">
              <div class="cate_pic half">
                <img :src="category.mid_img">
              </div>
              <h3 class="nowrap text_center half" v-text="category.title"></h3>
            </router-link>
          </li>
        </ul>
      </section>

  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      product_categories: []
    }
  },
  computed: {},
  created() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      this.$api.productCategories({
        depth: 1
      }).then((response) => {
        this.product_categories = response.data
        console.log(this.product_categories)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/variables";
  #banner{
    img{display: block;max-width: 100%;max-height: 100%}
  }
  #index_cell{display: flex;justify-content: space-between;padding: 15px}
  .cate_pic{text-align: center;
    img{max-height: 100%;max-width: 100%;}
  }
  #indexCategories{
    .cateBox{display: flex;justify-content: space-between;}
    .half{width: 50%}
    li{position: relative;margin-bottom:20px }
    h3{ box-sizing: border-box }
  }
</style>
