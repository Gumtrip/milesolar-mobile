<template>
  <div>
    <div id="contactBtn">
      <i class="fa fa-commenting" @click="showPopUp" />
    </div>
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
    }
  }
}
</script>

<style scoped lang="scss">
  #contactBtn{
    position: fixed;bottom: 10%;right: 10%;background: #007bff;color: #fff;border-radius: 50%;width: 50px;height: 50px;font-size: 26px;
    ;display: flex;align-items: center;justify-content: center;
  }
  #contactBox{width: 100%;
    ul{padding:  10px}
    li{list-style: none;line-height: 36px;height: 36px;}
  }
</style>
