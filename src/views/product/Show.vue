<template>
  <div class="mainBox">
    <section id="picGallery" class="proSection">
      <mt-swipe id="productImages" :show-indicators="false">
        <mt-swipe-item v-for="(img,key) in product.mid_image_group" :key="key" class="picBox">
          <img :src="img">
        </mt-swipe-item>
      </mt-swipe>
    </section>

    <section id="proInfo" class="proSection">
      <h3 class="proTitle" v-text="product.title"></h3>
      <p class="desc" v-text="product.brief"></p>
      <div class="BtnContainer">
        <mt-button type="primary" size="large">Inquiry</mt-button>
      </div>
    </section>
    <section class="proSection">
      <mt-navbar v-model="selected" class="descTitles">
        <mt-tab-item id="info_0_m">Feature</mt-tab-item>
        <mt-tab-item id="info_1_m">Specification</mt-tab-item>
        <mt-tab-item id="info_2_m">Application</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-if="product.info_group" v-model="selected" class="contentContainer">
        <mt-tab-container-item id="info_0_m">
          <div v-html="product.info_group.info_0_m"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="info_1_m">
          <div v-html="product.info_group.info_1_m"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="info_2_m">
          <div v-html="product.info_group.info_2_m"></div>
        </mt-tab-container-item>
      </mt-tab-container>

    </section>

  </div>
</template>

<script>
export default {
  name: 'Show',
  components: {},
  data() {
    return {
      selected: 'info_0_m',
      product: ''
    }
  },
  computed: {},
  created() {
    const params = this.$route.params
    this.id = params.id
    this.getProduct(this.id)
  },
  methods: {
    getProduct() {
      this.$api.product(this.id, {
        'append': 'mid_image_group,info_group'
      }).then((response) => {
        this.product = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .proSection{margin-bottom: 20px}
    .proTitle{color: #5d5d5d}
    .desc{color: #888;margin: 10px 0;
      img{max-width: 100%;max-height: 100%}
    }
    .contentContainer /deep/{
      img{max-width: 100%;max-height: 100%}
    }
    .BtnContainer{text-align: right}
    #productImages{width: 100%;height: 32vh}
    .descTitles /deep/{margin-bottom: 10px;
      .mint-tab-item-label{font-size: 14px;}
    }
</style>
