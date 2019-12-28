<template>
  <div id="loadingBox">
    <div class="text_center">
      <mt-spinner v-show="loading" type="snake" class="snake" color="#26a2ff"></mt-spinner>
    </div>
    <div v-if="!more_data" class="text_center">
      <h3 class="alert alert-warning text-center" v-text="'No More Data!'"></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  components: {},
  props: {
    'loading': {
      type: Boolean,
      required: true,
      default: true
    },
    'moreData': {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data() {
    return {
    }
  },

  computed: {},
  created() {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  #loadingBox{;padding: 1vh 1vw;
    .snake{display: inline-block}
  }
</style>
