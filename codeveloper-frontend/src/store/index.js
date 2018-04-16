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
    contributors: [],
    files: [],
    currentIdx: null,
    code: '',
    dimmer: false,
    messagebox: false,
    registbox: false,
    profilebox: false,
    activeContributor: null // 프로필로 merge 할 것 
  },
  mutations,
  actions
});