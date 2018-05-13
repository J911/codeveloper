export default {
    user() {
      return this.$store.state.user
    },
    currentIdx() {
      return this.$store.state.file.currentIdx
    },
    code() {
      return this.$store.state.file.code
    },
    contributors() {
      return this.$store.state.contributors
    },
    consoleMenu() {
      return this.$store.state.env.consoleMenu
    }
    
  }