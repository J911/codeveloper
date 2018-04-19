module.exports = function (socket) {
    console.log('a user connected',socket.request.session);

    socket.on('join:room', function(data) {
        socket.join('room' + data.roomIdgitgtggtg);
    });

    socket.on('send:message', function(data) {
        io.sockets.in('room' + data.roomId).emit('send:message', data.message);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    //sample_code
    socket.on('message', function(data) {
        console.log(data);
    });
}