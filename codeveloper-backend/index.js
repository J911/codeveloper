const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('./src/cookie-session');
const flash = require('connect-flash');
const path = require('path');
require('dotenv').config();

const socketEventHanddler = require('./src/socket');
const routes = require('./src/index').routes;
const passport = require('./src/index').passport;

const PORT = process.env.PORT || 3000;

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.use(function(socket, next) {
    cookieSession(socket.request, socket.request.res, next);
});

app.use(cookieSession);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);
app.use('/dist', express.static(path.join(__dirname, '../codeveloper-frontend/dist')));
app.use('*', (req, res)=>res.sendFile(path.join(__dirname, '../codeveloper-frontend/index.html')));

io.on('connection', (socket)=>socketEventHanddler(io, socket));
http.listen(PORT);
  
  
  
  