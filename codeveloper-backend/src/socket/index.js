module.exports = function (io, socket) {
    console.log('a user connected',socket.request.session);

    socket.on('join:IDE', function(data) {
        console.log('IDE' + data.roomId);
        socket.join('IDE' + data.roomId);
    });

    socket.on('change:code', function(data) {
        io.sockets.in('IDE' + data.roomId).emit('change:code', data.message);
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