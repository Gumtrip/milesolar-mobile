<template>
  <div>
    <mt-palette-button id="contact-palette" content="+" direction="lt" mainButtonStyle="color:#fff;background-color:#26a2ff;">
      <div class="my-icon-button">1</div>
      <div class="my-icon-button">2</div>
      <div class="my-icon-button">3</div>
    </mt-palette-button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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

<style scoped lang="scss">
  #contact-palette{position: fixed;bottom: 10%;right: 10%}
</style>
