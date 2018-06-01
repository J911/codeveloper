import * as types from './socket-types'
import { store } from '../store'
export default (socket) => {
    socket.on(types.UPDATE_CODE, data => {
        if(store.state.ide.file.currentIdx == data.idx) {
            store.commit('UPDATE_CODE_STATE', 'recv')
            store.commit('UPDATE_CODE', data.code)
        }
    })
    socket.on(types.CHAT_MESSAGE, msg => {
        store.commit("UPDATE_CHAT", msg)
    })
    socket.on(types.CONTAINER_COMMAND, msg => {
        store.commit("UPDATE_CONSOLE_LOG", msg)
    })
}