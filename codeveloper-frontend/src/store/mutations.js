import * as types from './mutation-types'

const mutations = {
    [types.UPDATE_USER]: function (state, payload) {
        return state.user = payload
    },
    [types.UPDATE_CURRENT_IDX]: function (state, payload) {
        return state.file.currentIdx = payload
    },
    [types.UPDATE_FILE]: function (state, payload) {
        return state.ide.code = payload
    },
    [types.UPDATE_FILE_LIST]: function (state, payload){
        return state.file.files = payload
    },
    [types.UPDATE_CODE]: function (state, payload){
        return state.ide.code = payload
    },
    [types.SHOW_DIMMER]: function (state){
        return state.env.dimmer = true
    },
    [types.HIDE_DIMMER]: function (state){
        state.env.registbox = false
        state.env.messagebox = false
        state.env.profilebox.active = false
        return state.env.dimmer = false
    },
    [types.SHOW_LOADING]: function (state){
        return state.env.loading = true
    },
    [types.HIDE_LOADING]: function (state){
        return state.env.loading = false
    },
    [types.SHOW_MESSAGE_BOX]: function (state, payload){
        state.env.dimmer = true
        state.message.title = payload.title || 'Message'
        state.message.contents = payload.contents
        state.env.profilebox.active = false
        state.env.registbox = false
        return state.env.messagebox = true
        
    },
    [types.HIDE_MESSAGE_BOX]: function (state){
        state.env.dimmer = false
        state.env.messagebox = false
        return state.env.messagebox = false
    },
    [types.SHOW_REGIST_BOX]: function (state){
        state.env.dimmer = true
        state.env.messagebox = false
        state.env.profilebox.active = false
        return state.env.registbox = true
        
    },
    [types.HIDE_REGIST_BOX]: function (state){
        state.env.dimmer = false
        return state.env.registbox = false
    },
    [types.SHOW_PROFILE_BOX]: function (state, payload){
        state.env.dimmer = true
        state.env.messagebox = false
        state.env.registbox = false
        state.env.profilebox.contributor = payload
        return state.env.profilebox.active = true  
    },
    [types.HIDE_PROFILE_BOX]: function (state){
        state.env.dimmer = false
        return state.env.profilebox.active = false
    },
    [types.UPDATE_CONTRIBUTORS]: function (state, payload){
        return state.contributors = payload
    },
    [types.ADD_CONTRIBUTOR]: function (state, payload){
        return state.contributors.push(payload)
    },
    [types.SWITCH_CONSOLE_MENU]: function (state, payload){
        return state.env.consoleMenu = payload
    },
}

export default mutations