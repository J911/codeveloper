<template>
  <div id="IDE">
    <app-dimmer/>
    <app-messgebox />
    <app-registbox />
    <app-profilebox />
    <nav>
      <a href="#" class="brand">
        codeveloper
      </a>
      <ul class="menu">
        <li class="item">
          <div class="profile">
            <img :src="user.user_avatar" :alt="user.user_name">
            <span>{{ user.user_name }}</span>
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
            <i class="fas fa-file" @click="openMessageBox('준비중입니다.')"></i>
            <i class="fas fa-folder-open" @click="openMessageBox('준비중입니다.')"></i>
          </span>
        </li>
        <li v-for="(file, index) in this.$store.state.files"
            :key="index"
            @click="getFile(file.idx)"
            :class="currentIdx == file.idx ? 'item active': 'item'">
          <i :class="file.icon"></i> {{ file.name }}
        </li>
      </ul>
      <div class="footer">
        <span class="header">contributors</span>
        <div class="contributors">
          <img :src="user.user_avatar" :alt="user.user_name" :title="user.user_name">
          <img v-for="(contributor, index) in contributors" 
              :key="index" :src="contributor.user_avatar" 
              :alt="contributor.user_name" 
              :title="contributor.user_name"
              @click="onClickContributor(index)">

          <i class="fas fa-plus-square" @click="openRegistBox"></i>
        </div>
      </div>
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
import Dimmer from '../components/Dimmer.vue'
import MessageBox from '../components/MessageBox.vue'
import RegistBox from '../components/RegistBox.vue'
import ProfileBox from '../components/ProfileBox.vue'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/base16-dark.css'
import io from 'socket.io-client'

let socket;
export default {
  name: 'IDE',
  components: {
    'app-dimmer': Dimmer,
    'app-messgebox': MessageBox,
    'app-registbox': RegistBox,
    'app-profilebox': ProfileBox,
  },
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
    this.$store.dispatch('GET_CONTRIBUTORS')
    socket = io()
    socket.emit('message', 'hello, world')
  },
  computed: {
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
    },
    openMessageBox(contents) {
      this.$store.commit('SHOW_MESSAGE_BOX', {contents})
    },
    openRegistBox() {
      this.$store.commit('SHOW_REGIST_BOX')
    },
    onClickContributor (idx){ // onchange로 바꿔야지
      this.$store.commit('UPDATE_ACTIVE_CONTRIBUTOR', idx)
      this.$store.commit('SHOW_PROFILE_BOX')
    }
  }
}
</script>

<style src="./IDE.css" scope></style>
