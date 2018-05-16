import * as types from './mutation-types'
import io from 'socket.io-client'
import {receiver} from './modules/socket'

const mutations = {
    [types.UPDATE_USER]: function (state, payload) {
        mutations.INITIALIZE_SOCKET(state, payload.user_id) // 이 코드 상당히 맘에 안드네..
        return state.user = payload
    },
    [types.UPDATE_CURRENT_IDX]: function (state, payload) {
        return state.file.currentIdx = payload
    },
    [types.UPDATE_FILE]: function (state, payload) {
        return state.file.code = payload
    },
    [types.UPDATE_FILE_LIST]: function (state, payload){
        return state.file.files = payload
    },
    [types.UPDATE_ACTIVE_CONTRIBUTOR]: function (state, payload){
        return state.env.profilebox.contributor = payload
    },
    [types.UPDATE_CODE]: function (state, payload){
        return state.file.code = payload
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
    [types.SHOW_PROFILE_BOX]: function (state){
        state.env.dimmer = true
        state.env.messagebox = false
        state.env.registbox = false
        return state.env.profilebox.active = true  
    },
    [types.HIDE_PROFILE_BOX]: function (state){
        state.env.dimmer = false
        return state.env.profilebox.active = false
    },
    [types.UPDATE_CONTRIBUTORS]: function (state, payload){
        return state.env.contributors = payload
    },
    [types.ADD_CONTRIBUTOR]: function (state, payload){
        return state.env.contributors.push(payload)
    },
    [types.SWITCH_CONSOLE_MENU]: function (state, payload){
        return state.env.consoleMenu = payload
    },
    [types.INITIALIZE_SOCKET]: function (state, payload){
        state.socket = io()
        state.socket.emit('message', 'hello, world')
        receiver(state.socket)
        return state.socket.emit('join:room', {roomId: payload})        
    },
    [types.SEND_MESSAGE]: function (state, payload) {
        return state.socket.emit('send:message', {message: payload})
    },
}

export default mutations