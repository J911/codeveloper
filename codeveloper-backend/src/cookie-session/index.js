const cookieSession = require('cookie-session');

module.exports = cookieSession({
    keys: ['node_yun'],
    cookie: {
        maxAge: 1000 * 60 * 60
    }
})