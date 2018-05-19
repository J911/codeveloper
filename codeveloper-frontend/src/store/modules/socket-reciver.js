export default (state, socket) => {
    socket.on('change:code', data => {
        state.ide.code = data.code
        // msg
    })
    socket.on('send:message', msg => {
        // msg
    })
}