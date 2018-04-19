import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    message: {
        title: 'Message',
        contents: ''
    },
    contributors: [],
    files: [],
    currentIdx: null,
    code: '',
    dimmer: false,
    messagebox: false,
    registbox: false,
    profilebox: {
      active: false,
      contributor: null
    },
    socket
    // activeContributor: null // 프로필로 merge 할 것 
  },
  mutations,
  actions
});