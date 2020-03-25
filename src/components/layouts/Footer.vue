<template>
  <div id="footer">
    <ul class="wrapper">
      <li v-for="(nav,key) in navList" :key="key">
        <router-link :to="nav.url" v-text="nav.title"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  data() {
    return {
      popupVisible: false,
      navList: [
        { title: 'PRODUCTS', url: '/products' },
        { title: 'ABOUT US', url: '/' },
        { title: 'CONTACT US', url: '/' }
      ]
    }
  },
  computed: {},
  created() {
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/variables";
  #footer{background: #343434;padding-top: 10px;overflow: hidden;
    li{border-bottom: 1px solid $main_green;padding-bottom:10px;margin-bottom: 10px}
    a{color: #fff;font-size: 18px;text-transform: uppercase;}

  }
</style>
