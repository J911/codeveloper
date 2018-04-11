import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
        name: null,
        avatar: null
    },
    message: {
        title: 'Message',
        contents: ''
    },
    currentIdx: null,
    files: [],
    code: '',
    dimmer: false,
    messagebox: false
  },
  mutations,
  actions
});