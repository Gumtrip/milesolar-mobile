<template>
  <div>
    <div id="banner">
      <img src="https://n1-q.mafengwo.net/s15/M00/13/5B/CoUBGV3zu8eAb3LQAAJlPpSYUwU357.jpg" alt="">
    </div>
    <div class="mainBox">
      <section id="index_cell">
        <router-link to="/">Products</router-link>
        <router-link to="/">Case</router-link>
        <router-link to="/">News</router-link>
        <router-link :to="{name:'contact'}">

          Contact
        </router-link>
      </section>
      <section id="indexCategories">
        <ul>
          <li v-for="(category,key) in product_categories" :key="key">
            <router-link to="/">
              <div class="cate_pic">
                <img :src="category.mid_img">
              </div>
              <h3 class="nowrap text_center" v-text="category.title"></h3>
            </router-link>
          </li>
        </ul>
      </section>

    </div>
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
    a{display: block}
    li{position: relative;margin-bottom:20px }
    h3{position: absolute;bottom: 0;left: 0;width: 100%;background: $blue;color: #fff;padding: 10px; box-sizing: border-box }
  }
</style>
