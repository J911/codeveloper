const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const flash = require('connect-flash');
require('dotenv').config();

const routes = require('./src/index').routes;
const passport = require('./src/index').passport;

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cookieSession({
    keys: ['node_yun'],
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);

app.listen(PORT);
  