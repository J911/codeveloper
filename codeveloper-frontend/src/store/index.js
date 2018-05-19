import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      user_id: null,
      user_avatar: null
    },
    message: {
        title: 'Message',
        contents: ''
    },
    file: {
      files: [],
      currentIdx: null
    },
    env: {
      loading: true,
      dimmer: false,
      consoleMenu: 'terminal',
      messagebox: false,
      registbox: false,
      profilebox: {
        active: false,
        contributor: null
      }
    },
    ide: {
      code: '',
      options: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true
      }
    },
    contributors: [],
  },
  mutations,
  actions
});