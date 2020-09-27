var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

//app.get('/', function(req, res){
 // res.send('<h1>Hello world</h1>');
//});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

io.on('connection', function (socket) {
    //console.log('un usuario conectado');
    //socket.on('disconnect', function(){
    //    console.log('Usuario desconectado');
    //  });
      
    //socket.on('chat message', function(msg){
    //    console.log('message: ' + msg);
    //  });
    
    //socket.broadcast.emit('hi');

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
      });
})

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets


http.listen(4000, function(){
  console.log('listening on *:4000');
});
