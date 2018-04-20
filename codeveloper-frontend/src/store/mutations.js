import * as types from './mutation-types'
import io from 'socket.io-client'

const mutations = {
    [types.UPDATE_USER]: function (state, payload) {
        return state.user = payload
    },
    [types.UPDATE_CURRENT_IDX]: function (state, payload) {
        return state.currentIdx = payload
    },
    [types.UPDATE_FILE]: function (state, payload) {
        return state.code = payload
    },
    [types.UPDATE_FILE_LIST]: function (state, payload){
        return state.files = payload
    },
    [types.UPDATE_ACTIVE_CONTRIBUTOR]: function (state, payload){
        return state.profilebox.contributor = payload
    },

    [types.SHOW_DIMMER]: function (state){
        return state.dimmer = true
    },
    [types.HIDE_DIMMER]: function (state){
        state.registbox = false
        state.messagebox = false
        return state.dimmer = false
    },
    [types.SHOW_MESSAGE_BOX]: function (state, payload){
        state.dimmer = true
        state.message.title = payload.title || 'Message'
        state.message.contents = payload.contents
        state.profilebox.active = false
        state.registbox = false
        return state.messagebox = true
        
    },
    [types.HIDE_MESSAGE_BOX]: function (state){
        state.dimmer = false
        state.messagebox = false
        return state.messagebox = false
    },
    [types.SHOW_REGIST_BOX]: function (state){
        state.dimmer = true
        state.messagebox = false
        state.profilebox.active = false
        return state.registbox = true
        
    },
    [types.HIDE_REGIST_BOX]: function (state){
        state.dimmer = false
        return state.registbox = false
    },
    [types.SHOW_PROFILE_BOX]: function (state){
        state.dimmer = true
        state.messagebox = false
        state.registbox = false
        return state.profilebox.active = true
        
    },
    [types.HIDE_PROFILE_BOX]: function (state){
        state.dimmer = false
        return state.profilebox.active = false
    },
    [types.UPDATE_CONTRIBUTORS]: function (state, payload){
        return state.contributors = payload
    },
    [types.ADD_CONTRIBUTOR]: function (state, payload){
        return state.contributors.push(payload)
    },
    [types.INITIALIZE_SOCKET]: function (state){
        state.socket = io()
        state.socket.emit('message', 'hello, world')
        return state.commit(types.JOIN_SOCKET_ROOM)
    },
    [types.JOIN_SOCKET_ROOM]: function (state) {
        return state.socket.emit('join:room', {roomId: state.user.user_id})
    },
    [types.SEND_MESSAGE]: function (state, payload) {
        return state.socket.emit('message', {message: payload})
    }

}

export default mutations