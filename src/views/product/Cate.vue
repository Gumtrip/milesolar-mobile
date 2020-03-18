<template>
    <div>
      <div id="proCate" :class="{show:popCate}" class="popModal trans">
        <ul v-if="product_categories">
          <li @click="toggleCate(false)"><h4 class="firstCate"></h4><i class="fa fa-chevron-left left"></i></li>
          <li @click="closeAll"><router-link :to="{name:'products'}"><h4 class="firstCate">All</h4></router-link></li>
          <li v-for="(cate,key) in product_categories" :key="key">
            <h4 class="firstCate" @click="toggleSecCate(key)" v-text="cate.title"></h4>
            <div v-if="cate.children" :class="{show:key===current}" class="secCate trans" @click="closeAll">
              <div v-for="(sec,secKey) in cate.children" :key="secKey">
                <router-link :to="'/'" v-text="sec.title"></router-link>
              </div>
            </div>
            <i class="fa fa-chevron-right trans right" :class="{show:key===current}"></i>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Cate",
        components: {},
        data() {
            return {
              popCate: false, // 产品分类显示
              current: null,
              product_categories: [],
            }
        },
        created() {
          this.getAllCategories()

        },
        computed: {},
        methods: {
          getAllCategories() {
            this.$api.productCategoryTree({
              depth: 2
            }).then((response) => {
              this.product_categories = response.data
            })
          },
          toggleCate: function(value) {
            this.popCate = value
          },
          toggleSecCate: function(index) {
            if (this.current === index) {
              this.current = null
            } else {
              this.current = index
            }
          },
          closeAll: function() {
            this.current = null
          }
        }
    }
</script>

<style lang="scss" scoped>
  .trans{transition: all 0.5s}
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
