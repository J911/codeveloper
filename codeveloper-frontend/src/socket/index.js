import io from 'socket.io-client'
import eventListener from './event-listener'
import * as action from './action'

let socket = io()
eventListener(socket)

socket.action = action

export default socket