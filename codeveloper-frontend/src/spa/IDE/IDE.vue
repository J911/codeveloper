<template>
  <div id="IDE">
    <app-loading />
    <app-dimmer />
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
            <i class="fas fa-file" @click="openMessageBox(locale.PREPARATIONS_TEXT)"></i>
            <i class="fas fa-folder-open" @click="openMessageBox(locale.PREPARATIONS_TEXT)"></i>
          </span>
        </li>
        <li v-for="(file, index) in files"
            :key="index"
            @click="openFile(file.idx)"
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
              @click="showContributor(index)">

          <i class="fas fa-plus-square" @click="openRegistBox"></i>
        </div>
      </div>
    </div>
    <div class="editor">
       <codemirror
              :value="code" 
              :options="ideOption"
              @input="codeChange">
      </codemirror>
    </div>
    <div class="console">
      <div class="header">
        <ul class="menu">
          <li :class="`item ${consoleMenu == 'terminal'? 'active': '' }`"
              @click="switchConsoleMenu('terminal')">TERMINAL</li>
          <li :class="`item ${consoleMenu == 'chat'? 'active': '' }`"
              @click="switchConsoleMenu('chat')">CHAT</li>
        </ul>
      </div>
      <div class="body">
          <ul class="chat">
            <!-- <li>
              jaemin: test
            </li>
          </ul>
          <input type="text" class="chatInput"> -->
      </div>
    </div>
  </div>
</template>

<script>
import Dimmer from '../../components/Dimmer.vue'
import Loading from '../../components/Loading.vue'
import MessageBox from '../../components/MessageBox.vue'
import RegistBox from '../../components/RegistBox.vue'
import ProfileBox from '../../components/ProfileBox.vue'

import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/base16-dark.css'

import methods from './methods'
import computed from './computed'

import socket from '../../socket'

export default {
  name: 'IDE',
  components: {
    'app-dimmer': Dimmer,
    'app-loading': Loading,
    'app-messgebox': MessageBox,
    'app-registbox': RegistBox,
    'app-profilebox': ProfileBox,
  },
  created() {
    this.$store.dispatch('GET_USER')
    .then(()=>socket.action.join(socket, this.$store.state.user.user_id))
    this.$store.dispatch('GET_FILE_LIST')
    this.$store.dispatch('GET_HOSTS')
    .then(hosts => hosts.forEach(host => socket.action.join(socket, host.user_id)))
    this.$store.dispatch('GET_CONTRIBUTORS')
    this.$store.commit('UPDATE_CODE', this.locale.IDE_INTRO_MESSAGE)
  },
  computed,
  methods
}
</script>

<style src="../../style/spa/IDE.css" scope></style>
