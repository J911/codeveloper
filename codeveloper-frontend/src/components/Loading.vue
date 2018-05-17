<template>
  <div id="loading" v-if="loading">
      Loading...
  </div>
</template>

<script>
export default {
  name: 'Loading',
  computed: {
      loading() {
          return this.$store.state.env.loading
      }
  }
}
</script>

<style src="../style/component/Loading.css" scoped></style>
