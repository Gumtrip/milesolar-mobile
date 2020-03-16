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
            <div class="cate_title half">
              <h3 class="text_center" v-text="category.title"></h3>
              <div class="link_icon">
                <i class="fa fa-arrow-circle-right"></i>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
    <section id="indexNews">
      <ul>
        <li v-for="(article,key) in articles" :key="key" class="list">
          <router-link to="/">
            <div class="txt">
              <div class="newIcon">
                <span>News</span>
              </div>
              <h3 class="newTitle" v-text="article.title"></h3>
              <div class="newDate" v-text="article.create_date"></div>
            </div>
            <div class="newPic">
              <div class="pic flexPic">
                <img :src="article.sm_img">
              </div>
            </div>

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
      product_categories: [],
      articles: []
    }
  },
  computed: {},
  created() {
    this.getCategories()
    this.getNews()
  },
  methods: {
    getCategories() {
      this.$api.productCategories({
        depth: 1
      }).then((response) => {
        this.product_categories = response.data
      })
    },
    getNews() {
      this.$api.articles({
        take: 3
      }).then((response) => {
        this.articles = response.data.data
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
    .cateBox{display: flex;justify-content: space-between;box-sizing: border-box;; padding: 3% 0;background-image: linear-gradient(to right, #e1e0e0 , #fffeff)}
    .half{width: 50%}
    li{position: relative;}
    .cate_title{ box-sizing: border-box;; padding:0 3%;
      h3{font-size: 24px;color: #9d9d9d;margin-bottom: 10px}
      .link_icon{}
      .link_icon i{color: $main_green;font-size: 44px}
     }
  }
  #indexNews{width: 96%;margin: 0 auto;
    a{display: block;box-shadow: 0 0 10px #e9e9e9;}
    .list{margin-bottom: 20px;;}
    .newIcon span{background:$main_green;font-size: 14px;color: #000;padding: 5px 10px;display: inline-block;margin-bottom: 5px;}
    .txt{box-sizing: border-box; padding: 25px 6.5% 0}
    .newTitle{max-height: 55px;font-family: "Open Sans Bold";
      font-size: 20px;
      color: #262a31;}
    .newDate{padding-top: 7px;font-size: 14px;color: #555;margin-bottom: 20px}
  }

</style>
