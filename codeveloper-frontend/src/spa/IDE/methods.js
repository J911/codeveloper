import socket from '../../socket'

export default {
    openFile(idx) {
      this.$store.dispatch('GET_FILE', idx)
    },
    openMasterFile(master, idx) {
      this.$store.dispatch('GET_MASTER_FILE', {master, idx})
    },
    codeChange(code) {
      if(this.currentIdx || this.codeState == 'basic'){
          this.$store.dispatch('UPDATE_FILE', {
            idx : this.currentIdx,
            code,
          }) 
          socket.action.updateCode(socket, {
            idx: this.currentIdx, master : this.currentMaster || this.user.user_id, 
            code
          })
      }else this.$store.commit('UPDATE_CODE_STATE', 'basic')
    },
    newFile() {
      this.$store.dispatch('NEW_FILE', this.newFileName)
      .then(()=>this.$store.dispatch('GET_FILE_LIST'))
      this.newFileName = ''
      this.newFileActive = false
    },
    openMessageBox(contents) {
      this.$store.commit('SHOW_MESSAGE_BOX', {contents})
    },
    openRegistBox() {
      this.$store.commit('SHOW_REGIST_BOX')
    },
    showContributor (idx){
      this.$store.commit('SHOW_PROFILE_BOX', idx)
    },
    switchConsoleMenu (menu) {
      this.$store.commit('SWITCH_CONSOLE_MENU', menu)
    },
    runCmd() {
      socket.action.cpContainer(socket, this.user.user_id, this.files)
      this.$store.commit('UPDATE_CONSOLE_LOG', this.user.user_name + '@codeveloper $ ' + this.command)
      socket.action.cmdContainer(socket, this.user.user_id, this.command)
      this.command = ''
    },
    scrollToEnd() {
      const container = document.querySelector('.terminal')
      const scrollHeight = container.scrollHeight
      container.scrollTop = scrollHeight
    }
  }