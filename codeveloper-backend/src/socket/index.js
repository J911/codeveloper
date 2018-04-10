module.exports = function (socket) {
    console.log('a user connected',socket.request.session);

    socket.on('join:channel', function(data) {
        socket.join('channel' + data.channel);
    });

    socket.on('send:message', function(data) {
        io.sockets.in('channel' + data.channel).emit('send:message', data.message);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    //sample_code
    socket.on('message', function(data) {
        console.log(data);
    });
}