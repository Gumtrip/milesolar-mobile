<template>
  <div>
    <mt-header>
      <span v-if="$route.path!=='/'" slot="left">
        <mt-button icon="back" @click="$router.back(-1)">Back</mt-button>
      </span>
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
