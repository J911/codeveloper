export default {
    openFile(idx) {
      this.$store.dispatch('GET_FILE', idx)
    },
    codeChange(newCode) {
      this.currentIdx !== null ? 
      this.$store.dispatch('UPDATE_FILE', {
        idx : this.currentIdx,
        code : newCode,
        socket: this.$store.state.socket
      }) : false
    },
    openMessageBox(contents) {
      this.$store.commit('SHOW_MESSAGE_BOX', {contents})
    },
    openRegistBox() {
      this.$store.commit('SHOW_REGIST_BOX')
    },
    showContributor (idx){
      // this.$store.commit('UPDATE_ACTIVE_CONTRIBUTOR', idx)
      this.$store.commit('SHOW_PROFILE_BOX', idx)
    },
    switchConsoleMenu (menu) {
      this.$store.commit('SWITCH_CONSOLE_MENU', menu)
    }
  }