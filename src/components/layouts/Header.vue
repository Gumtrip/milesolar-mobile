<template>
  <div>
    <mt-header>
      <router-link slot="left" to="/">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right" icon="more" />
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
  computed: {},
  created() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped >

</style>
