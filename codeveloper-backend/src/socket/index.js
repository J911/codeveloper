module.exports = function (io, socket) {
    console.log('a user connected',socket.request.session);

    socket.on('join:IDE', function(data) {
        socket.join('IDE' + data.joinId);
    });

    socket.on('update:code', function(data) {
        io.sockets.in('IDE' + data.roomId).emit('update:code', data.message);
    });

    socket.on('send:message', function(data) {
        io.sockets.in('IDE' + data.roomId).emit('send:message', data.message);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    //sample_code
    socket.on('message', function(data) {
        console.log(data);
    });
}