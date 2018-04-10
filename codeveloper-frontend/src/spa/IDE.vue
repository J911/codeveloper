<template>
  <div id="IDE">
    <nav>
      <a href="#" class="brand">
        codeveloper
      </a>
      <ul class="menu">
        <li class="item">
          <div class="profile">
            <img :src="user.avatar" :alt="user.name">
            <span>{{ user.name }}</span>
          </div>
        </li>
        <li class="item">
          <a href="/auth/logout">
            <span class="logout">
              <i class="fas fa-sign-out-alt"></i>
              sign out
            </span>
          </a>
        </li>
      </ul> 
    </nav>
    <div class="explorer">
      <div class="header">
        EXPLORER
      </div>
      <ul class="files">
        <li class="header">
          My Files
          <span class="new-items">
            <i class="fas fa-file"></i>
            <i class="fas fa-folder-open"></i>
          </span>
        </li>
        <li v-for="(file, index) in files" 
            :key="index"
            @click="onFileClick(file)"
            :class="activeFile == file.idx ? 'item active': 'item'">
          <i :class="file.icon"></i> {{ file.name }}
        </li>
      </ul>
    </div>
    <div class="editor">
       <codemirror ref="myCm"
              :value="code" 
              :options="cmOptions"
              @focus="onCmFocus"
              @input="onCmCodeChange">
      </codemirror>
    </div>
    <div class="console">
      <div class="header">
        <ul class="menu">
          <li class="item active">TERMINAL</li>
          <li class="item">CHAT</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/base16-dark.css'
import io from 'socket.io-client'

let socket;
export default {
  name: 'IDE',
  data () {
    return {
      user: {
        name: undefined,
        avatar: undefined
      },
      activeFile: undefined,
      files: undefined,
      code: '',
      cmOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
      }
    }
  },
  created() {
    this.fetchUserDate();
    this.fetchUserFiles()
    socket = io();
    socket.emit('message', 'hello, world');
  },
  methods: {
    fetchUserDate() {
      const baseURI = '/user';
      this.$http.get(`${baseURI}`)
      .then((result) => {
        //statusCode 비교가 필요함.
        this.user = result.data.user
      })
    },
    fetchUserFile(idx) {
      const baseURI = '/file';
      this.$http.get(`${baseURI}/${idx}`)
      .then((result) => {
        //statusCode 비교가 필요함.
        this.code = result.data.code
      })
    },
    saveUserFile(idx) {
      const baseURI = '/file';
      this.$http.post(`${baseURI}/${idx}`, {code: this.code})
      .then((result) => {
        
      })
    },
    fetchUserFiles() {
      const baseURI = '/file';
      this.$http.get(`${baseURI}`)
      .then((result) => {
        //statusCode 비교가 필요함.
        this.files = result.data.files
      })
    },
    onFileClick(file) {
      this.activeFile = file.idx;
      this.fetchUserFile(file.idx)
      // if(file.type == 'folder')
      //   file.state = file.state == 'close' ? 'open' : 'close';
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode

      this.saveUserFile(this.activeFile);
    }
  }
}
</script>

<style src="./IDE.css" scope></style>
