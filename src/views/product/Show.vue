<template>
  <div class="wrapper">
    <section>
      <mt-swipe id="productImages" :show-indicators="false">
        <mt-swipe-item v-for="(img,key) in product.mid_image_group" :key="key" class="picBox">
          <img :src="img">
        </mt-swipe-item>
      </mt-swipe>
    </section>

    <section>
      <h3 class="proTitle" v-text="product.title" />
      <p class="desc" v-text="product.brief" />
      <div class="BtnContainer">
        <mt-button type="primary" size="large">Inquiry</mt-button>
      </div>
    </section>
    <section>
      <mt-navbar v-model="selected" class="descTitles">
        <mt-tab-item id="info_0_m">参数 1</mt-tab-item>
        <mt-tab-item id="info_1_m">参数 2</mt-tab-item>
        <mt-tab-item id="info_2_m">参数 3</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-if="product.info_group" v-model="selected">
        <mt-tab-container-item id="info_0_m">
          <div v-html="product.info_group.info_0_m" />
        </mt-tab-container-item>
        <mt-tab-container-item id="info_1_m">
          <div v-html="product.info_group.info_1_m" />
        </mt-tab-container-item>
        <mt-tab-container-item id="info_2_m">
          <div v-html="product.info_group.info_2_m" />
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
    .proTitle{color: #5d5d5d}
    .desc{color: #888;margin: 10px 0}
    .BtnContainer{text-align: right}
    #productImages{width: 100%;height: 32vh}
    .descTitles{margin-bottom: 10px}
</style>
