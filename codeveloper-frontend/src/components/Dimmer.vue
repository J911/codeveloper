<template>
  <div id="dimmer" @click="hideDimmer" v-if="dimmer">
  </div>
</template>

<script>
export default {
  name: 'Dimmer',
  computed: {
      dimmer() {
          return this.$store.state.env.dimmer
      }
  },
  methods: {
      hideDimmer() {
        this.$store.commit("HIDE_DIMMER")
      }
  }
}
</script>

<style src="./Dimmer.css" scoped></style>
