<template>
  <div id="IDE">
    <nav>
      <a href="#" class="brand">
        codeveloper
      </a>
      <ul class="menu">
        <li class="item">
          <div class="profile">
            <img :src="this.$store.state.user.avatar" :alt="this.$store.state.user.name">
            <span>{{ this.$store.state.user.name }}</span>
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
        <li v-for="(file, index) in this.$store.state.files"
            :key="index"
            @click="getFile(file.idx)"
            :class="currentIdx == file.idx ? 'item active': 'item'">
          <i :class="file.icon"></i> {{ file.name }}
        </li>
      </ul>
    </div>
    <div class="editor">
       <codemirror
              :value="code" 
              :options="cmOptions"
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
    this.$store.dispatch('GET_USER')
    this.$store.dispatch('GET_FILE_LIST')
    socket = io()
    socket.emit('message', 'hello, world')
  },
  computed: {
    currentIdx() {
      return this.$store.state.currentIdx
    },
    code() {
      return this.$store.state.code
    }
  },
  methods: {
    getFile(idx) {
      this.$store.dispatch('GET_FILE', idx)
    },
    onCmCodeChange(newCode) {
      this.currentIdx !== null ? 
      this.$store.dispatch('UPDATE_FILE', {
        idx : this.currentIdx,
        code : newCode
      }) : false
    }
  }
}
</script>

<style src="./IDE.css" scope></style>
