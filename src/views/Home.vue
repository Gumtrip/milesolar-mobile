<template>
  <div>
    这是主页
    <router-link :to="{name:'product.show',params:{id:1}}">
      酒店详情页
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  computed: {},
  created() {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
