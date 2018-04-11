const cookieSession = require('cookie-session');

module.exports = cookieSession({
    keys: ['session_key$$'],
    cookie: {
        maxAge: 1000 * 60 * 60
    }
})