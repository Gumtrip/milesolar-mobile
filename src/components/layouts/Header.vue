<template>
  <div>
    <mt-header id="header" :class="{index:isIndex}">
      <div id="logo" slot="left">
        <div>

        </div>
      </div>

      <div id="function" slot="right">
        <span id="search" ><i class="fa fa-search"></i></span>
        <span id="list" ><i class="fa fa-list"></i></span>
      </div>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {}
  },
  computed: {
    isIndex: function() {
      return this.$route.path === '/'
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped >
  @import "../../styles/variables";

  #header{height: 50px;background: #fff}
  #function{
    i{font-size: 28px;color: $main_green}
  }
  #search{margin-right: 10px}
  #list{}
</style>
