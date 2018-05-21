import * as types from './socket-types'
import { store } from '../store'
export default (socket) => {
    socket.on(types.UPDATE_CODE, data => {

    })
    socket.on(types.CHAT_MESSAGE, msg => {
    
    })
    socket.on(types.CONTAINER_COMMAND, msg => {
        store.commit("UPDATE_CONSOLE_LOG", msg)
        console.log(msg)
    })
}