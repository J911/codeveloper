export const join = (socket, joinId) => socket.emit('join:IDE', {roomId: joinId})
export const updateCode = (socket, code) => socket.emit('change:code', {code})
