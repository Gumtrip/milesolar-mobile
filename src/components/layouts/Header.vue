<template>
  <div>
    <mt-header id="header" :class="{index:isIndex}">
      <div id="logo" slot="left">
        <div>

        </div>
      </div>

      <div id="function" slot="right">
        <span id="search" @click="showSearch"><i class="fa fa-search"></i></span>
        <span id="list" ><i class="fa fa-list"></i></span>
      </div>

    </mt-header>
    <div id="searchBox" v-bind:class="{show:popSearch}">
        <div id="closeBtn">
          <i @click="closeSearch" class="fa fa-close" ></i>
        </div>
        <form id="searchForm">
          <input type="text" placeholder="Search Our Products"/>
          <i id="searchBtn" class="fa fa-search"></i>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {
      popSearch:false
    }
  },
  computed: {
    isIndex: function() {
      return this.$route.path === '/'
    }
  },
  created() {
  },
  methods: {
    showSearch:function(){
      this.popSearch = true;
    },
    closeSearch:function(){
      this.popSearch = false;
    }
  }
}
</script>

<style lang="scss" scoped >
  @import "../../styles/variables";

  #header{height: 50px;background: #fff}
  #function{
    i{font-size: 28px;color: $main_green}
  }
  #search{margin-right: 10px}
  #searchBox{position: fixed;top: 0;right: -100%;width: 100%; background: #fff;transition:0.5s;z-index: 1;
    &.show{right: 0;}
  }
  #searchForm{
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    align-items: center;
    input{border: none;box-sizing: border-box;
      width: 80%;
      height: 100%;
      padding-left: 5%;
      font-size: 16px;
      color: #c8c8c8;
      outline: none;
    }
    i{width: 20%;font-size: 30px;text-align: center}
  }
  #closeBtn{height: 50px;display: flex;align-items: center;justify-content: flex-end;box-sizing: border-box;padding-right: 10px;
    i {font-size: 30px;color: $main_green;}
  }
</style>
