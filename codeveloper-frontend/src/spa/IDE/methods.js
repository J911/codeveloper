export default {
    getFile(idx) {
      this.$store.dispatch('GET_FILE', idx)
    },
    onCmCodeChange(newCode) {
      this.currentIdx !== null ? 
      this.$store.dispatch('UPDATE_FILE', {
        idx : this.currentIdx,
        code : newCode
      }) : false
    },
    openMessageBox(contents) {
      this.$store.commit('SHOW_MESSAGE_BOX', {contents})
    },
    openRegistBox() {
      this.$store.commit('SHOW_REGIST_BOX')
    },
    viewContributor (idx){
      this.$store.commit('UPDATE_ACTIVE_CONTRIBUTOR', idx)
      this.$store.commit('SHOW_PROFILE_BOX')
    },
    switchConsoleMenu (menu) {
      this.$store.commit('SWITCH_CONSOLE_MENU', menu)
    }
  }