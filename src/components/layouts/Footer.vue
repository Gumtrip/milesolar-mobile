<template>
  <div>

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
