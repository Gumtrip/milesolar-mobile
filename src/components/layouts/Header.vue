<template>
  <div>
    <div id="headerBlank" class="header"></div>
    <mt-header id="header" class="header" :class="{index:isIndex}">
      <div id="logo" slot="left" class="logo">
        <div>

        </div>
      </div>

      <div id="function" slot="right">
        <span id="search" @click="toggleSearch(true)"><i class="fa fa-search"></i></span>
        <span v-show="!popNav" id="list" @click="toggleNav(true)"><i class="fa fa-list"></i></span>
        <span v-show="popNav" class="closeBtn" @click="toggleNav(false)"><i class="fa fa-close"></i></span>
      </div>

    </mt-header>
    <div id="searchBox" :class="{show:popSearch}">
      <div id="closeBtn" class="closeBtn">
        <i class="fa fa-close" @click="toggleSearch(false)"></i>
      </div>
      <form id="searchForm">
        <input type="text" placeholder="Search Our Products">
        <i id="searchBtn" class="fa fa-search"></i>
      </form>
    </div>

    <div id="nav" :class="{show:popNav}" class="popModal trans">
      <div id="menu">
        <ul>
          <li class="list">
            <router-link :to="'/'">Home</router-link>
          </li>
          <li class="list">
            <a href="javascript:void(0)" @click="toggleCate(true)">Product</a>
          </li>
        </ul>
      </div>
    </div>

    <div id="proCate" :class="{show:popCate}" class="popModal trans">
      <ul v-if="product_categories">
        <li @click="toggleCate(false)"><h4 class="firstCate"></h4><i class="fa fa-chevron-left left"></i></li>
        <li @click="closeAll"><router-link :to="{name:'products'}"><h4 class="firstCate">All</h4></router-link></li>
        <li v-for="(cate,key) in product_categories" :key="key">
          <h4 class="firstCate"  @click="toggleSecCate(key)" v-text="cate.title"></h4>
          <div v-if="cate.children" :class="{show:key===current}" @click="closeAll" class="secCate trans">
            <div v-for="(sec,secKey) in cate.children" :key="secKey" >
              <router-link :to="'/'" v-text="sec.title"></router-link>
            </div>
          </div>
          <i class="fa fa-chevron-right trans right" :class="{show:key===current}"></i>
        </li>
      </ul>
    </div>
    <div id="mask" @click="toggleNav(false)" :class="{show:showMask}"></div>


  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {
      popSearch: false, // 搜索显示
      popNav: false, // 导航显示
      popCate: false, // 产品分类显示
      showMask: false, // 遮罩层
      product_categories: [],
      current: null
    }
  },
  computed: {
    isIndex: function() {
      return this.$route.path === '/'
    }
  },
  created() {
    this.getAllCategories()
  },
  methods: {
    getAllCategories() {
      this.$api.productCategoryTree({
        depth: 2
      }).then((response) => {
        this.product_categories = response.data
      })
    },
    toggleSearch: function(value) {
      this.popSearch = value
    },
    toggleNav: function(value) {
      if(value===true){
        this.popNav = this.showMask = true
      }else{
        this.closeAll()
      }
    },


    toggleCate: function(value) {
      this.popCate = value
    },
    toggleSecCate: function(index) {
      if(this.current===index){
        this.current = null
      }else{
        this.current = index
      }
    },
    closeAll:function(){
      this.popNav = this.popCate =this.showMask = false
      this.current = null
    }
  }
}
</script>

<style lang="scss" scoped >
  @import "../../styles/variables";
  .trans{transition: all 0.5s}
  .header{height: 50px;background: #fff}
  #header{position: fixed;top: 0;left: 0;width: 100vw;z-index: 1}
  #function{
    i{font-size: 28px;color: $main_green}
    .closeBtn{text-align: center}
    .closeBtn i{font-size: 28px;width: 28px}
  }
  #search{margin-right: 10px}
  #searchBox{position: fixed;top: 0;right: -100%;width: 100%; background: #fff;transition:0.5s;z-index: 3;
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
  #closeBtn{height: 50px;display: flex;align-items: center;justify-content: flex-end;box-sizing: border-box;padding-right: 10px;}
  .closeBtn{
    i {font-size: 30px;color: $main_green;}
  }

  #nav{position: fixed;top:50px;right: -100%;z-index: 3;
    &.show{right: -25%}
  }
  .popModal{height: 100vh;width: 100vw;background: #fff;}
  #mask{width: 100vw;height: 100vh;display: none;
    position: fixed;
    top: 51px;
    right: 0;
    background: rgba(0,0,0,0.5);
    z-index: 2;
    &.show{display: block}
  }
  #nav_top{display: flex;justify-content: space-between;}
  #menu {
      border-top: 1px solid #ddd;
    .list{
      margin: 0 5%;
      border-bottom: 1px solid #ddd;
    }
    a{
      display: block;
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      text-decoration: none;
      color: #333;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

  }
  #proCate{position: fixed;top: 50px;z-index: 3;right: -75%;width: 75vw;
    &.show{right: 0}
    li{position: relative;      border-bottom: 1px solid #ddd;margin:0 4%;
      .firstCate{
      box-sizing: border-box;align-items: center;
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-decoration: none;

    };
    }
    i{color: #464545; height: 60px;position: absolute;top: 0;
      line-height: 60px;
      &.left{left:0}
      &.right{right: 0}
      &.show{transform: rotate(90deg);}
    }
    .secCate{display: none;
      &.show{;display: block}
      a{
        display: block;
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        border-top: 1px solid #ddd;
        text-indent: 20px;
        color: #464545;
      }

    }
  }
</style>
