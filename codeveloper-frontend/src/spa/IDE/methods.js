import socket from '../../socket'

export default {
    openFile(idx) {
      this.$store.dispatch('GET_FILE', idx)
    },
    codeChange(newCode) {
      if(this.currentIdx){
        this.$store.dispatch('UPDATE_FILE', {
          idx : this.currentIdx,
          code : newCode,
        }) 
      }
      socket.action.updateCode(socket, newCode)
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
    }
  }