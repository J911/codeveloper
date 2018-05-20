import * as types from './socket-types'

export const join = (socket, joinId) => socket.emit(types.JOIN_IDE, {joinId})
export const updateCode = (socket, code) => socket.emit(types.UPDATE_CODE, {code})
