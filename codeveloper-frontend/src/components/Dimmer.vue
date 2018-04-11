<template>
  <div id="dimmer" @click="hideDimmer" v-if="dimmer">
  </div>
</template>

<script>
export default {
  name: 'Dimmer',
  computed: {
      dimmer() {
          return this.$store.state.dimmer
      }
  },
  methods: {
      hideDimmer() {
        this.$store.commit("HIDE_DIMMER")
      }
  }
}
</script>

<style scoped>
    #dimmer {
        position: fixed;
        top:0;
        left:0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        background-color: rgba(0, 0, 0, 0.63);
        cursor: pointer;
    }
</style>
