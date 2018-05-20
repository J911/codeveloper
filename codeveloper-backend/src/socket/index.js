const types = require('./socket-types')

module.exports = function (io, socket) {
    socket.on(types.JOIN_IDE, function(data) {
        socket.join('IDE' + data.joinId);
    });

    socket.on(types.UPDATE_CODE, function(data) {
        io.sockets.in('IDE' + data.roomId).emit('update:code', data.message);
    });

    socket.on(types.CHAT_MESSAGE, function(data) {
        io.sockets.in('IDE' + data.roomId).emit('send:message', data.message);
    });

    socket.on(types.DISCONNECT, function(){
        console.log('user disconnected');
    });
}