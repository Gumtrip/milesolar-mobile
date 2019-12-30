<template>
  <div>
    <mt-tabbar id="bottom_bar" :fixed="true">
      <mt-tab-item id="tab1" class="item">
        <router-link to="/">
          <i class="fa fa-home"></i>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab2" class="item">
        <a href="tel:008613889943867">
          <i class="fa fa-phone"></i>
        </a>
      </mt-tab-item>
      <mt-tab-item id="tab3" class="item">
        <router-link :to="{name:'contact'}">
          <i class="fa fa-commenting"></i>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>

    <!--
        <div id="contactBtn">
          <i class="fa fa-commenting" @click="showPopUp" ></i>
          <i class="fa fa-arrow-circle-up" @click="scrollToTop"></i>     </div>
        <mt-popup id="contactBox" v-model="popupVisible" position="bottom">
          <ul>
            <li>
              <a href="mailto:milly@milesolar.com"><i class="fa fa-envelope"></i>:milly@milesolar.com</a>
            </li>
            <li>
              <a href="mailto:milly@milesolar.com"><i class="fa fa-skype"></i>:millyzhong_1</a>
            </li>
            <li>
              <a href="whatsapp:milly@milesolar.com"><i class="fa fa-whatsapp"></i>:13889943867</a>
            </li>
          </ul>
        </mt-popup>
    -->
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  data() {
    return {
      popupVisible: false
    }
  },
  computed: {},
  created() {
  },
  methods: {
    showPopUp() {
      this.popupVisible = true
    },
    scrollToTop() {

    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/variables";
  #contactBtn{
    position: fixed;bottom: 10%;right: 10%;background: #007bff;color: #fff;border-radius: 50%;width: 50px;height: 50px;font-size: 26px;
    ;display: flex;align-items: center;justify-content: center;
    i{}
  }
  #contactBox{width: 100%;
    ul{padding:  10px}
    li{list-style: none;line-height: 36px;height: 36px;}
  }
  #bottom_bar{width: 100%;
    .item{background: $blue;border-right: 1px solid #fff;box-sizing: border-box;border-radius: 5px}
    .item i{font-size: 26px;color: #fff}
  }
</style>
