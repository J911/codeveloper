export const join = (socket, joinId) => socket.emit('join:IDE', {joinId})
export const updateCode = (socket, code) => socket.emit('update:code', {code})
