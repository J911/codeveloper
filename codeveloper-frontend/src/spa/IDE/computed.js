import * as lang from '../../locale'

export default {
    user() {
      return this.$store.state.user
    },
    currentIdx() {
      return this.$store.state.ide.file.currentIdx
    },
    code() {
      return this.$store.state.ide.code
    },
    contributors() {
      return this.$store.state.contributors
    },
    consoleMenu() {
      return this.$store.state.env.consoleMenu
    },
    ideOption () {
      return this.$store.state.ide.options
    },
    files () {
      return this.$store.state.ide.file.files
    },
    terminalLogs () {
      return this.$store.state.ide.terminalLogs
    },
    locale () {
      return lang.ko
    }
  }