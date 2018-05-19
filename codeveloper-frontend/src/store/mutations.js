import * as types from './mutation-types'

const mutations = {
    [types.UPDATE_USER]: function (state, payload) {
        state.user = payload
    },
    [types.UPDATE_CURRENT_IDX]: function (state, payload) {
        state.ide.file.currentIdx = payload
    },
    [types.UPDATE_FILE]: function (state, payload) {
        state.ide.code = payload
    },
    [types.UPDATE_FILE_LIST]: function (state, payload){
        state.ide.file.files = payload
    },
    [types.UPDATE_CODE]: function (state, payload){
        state.ide.code = payload
    },
    [types.SHOW_DIMMER]: function (state){
        state.env.dimmer = true
    },
    [types.HIDE_DIMMER]: function (state){
        state.registBox.show = false
        state.env.messagebox = false
        state.profileBox.show = false
        state.env.dimmer = false
    },
    [types.SHOW_LOADING]: function (state){
        state.env.loading = true
    },
    [types.HIDE_LOADING]: function (state){
        state.env.loading = false
    },
    [types.SHOW_MESSAGE_BOX]: function (state, payload){
        state.env.dimmer = true
        state.profileBox.show = false
        state.registBox.show = false

        state.messageBox.title = payload.title || 'Message'
        state.messageBox.contents = payload.contents
        state.messageBox.show = true
        
    },
    [types.HIDE_MESSAGE_BOX]: function (state){
        state.env.dimmer = false
        state.messageBox.show = false
    },
    [types.SHOW_REGIST_BOX]: function (state){
        state.env.dimmer = true
        state.env.messagebox = false
        state.profileBox.active = false
        state.registBox.show = true
        
    },
    [types.HIDE_REGIST_BOX]: function (state){
        state.env.dimmer = false
        state.registBox.show = false
    },
    [types.SHOW_PROFILE_BOX]: function (state, payload){
        state.env.dimmer = true
        state.messageBox.show = false
        state.registBox.show = false

        state.profileBox.contributorIdx = payload
        state.profileBox.show = true  
    },
    [types.HIDE_PROFILE_BOX]: function (state){
        state.env.dimmer = false
        state.profileBox.show = false
    },
    [types.UPDATE_CONTRIBUTORS]: function (state, payload){
        state.contributors = payload
    },
    [types.ADD_CONTRIBUTOR]: function (state, payload){
        state.contributors.push(payload)
    },
    [types.SWITCH_CONSOLE_MENU]: function (state, payload){
        state.env.consoleMenu = payload
    },
}

export default mutations