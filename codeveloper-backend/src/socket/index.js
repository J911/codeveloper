const types = require('./socket-types')
const ct = require('../docker').container

module.exports = function (io, socket) {
    socket.on(types.JOIN_IDE, function(data) {
        socket.join('IDE' + data.joinId);
    });

    socket.on(types.UPDATE_CODE, function(data) {
        io.sockets.in('IDE' + data.master).emit(types.UPDATE_CODE, {idx: data.idx, code: data.code});
    });

    socket.on(types.CHAT_MESSAGE, function(data) {
        io.sockets.in('IDE' + data.roomId).emit('send:message', data.message);
    });

    socket.on(types.DISCONNECT, function(){
        // console.log('user disconnected');
    });

    socket.on(types.CONTAINER_INIT, ct.init);
    
    socket.on(types.CONTAINER_CP, ct.cp);

    socket.on(types.CONTAINER_COMMAND, (data)=>{
        const run = ct.command(data);
        run.stdout.on('data', data=>socket.emit(types.CONTAINER_COMMAND, data.toString()));
        run.stderr.on('data', data=>socket.emit(types.CONTAINER_COMMAND, data.toString()));
    });
}