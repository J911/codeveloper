export default {
    user() {
      return this.$store.state.user
    },
    currentIdx() {
      return this.$store.state.currentIdx
    },
    code() {
      return this.$store.state.code
    },
    contributors() {
      return this.$store.state.contributors
    }
  }