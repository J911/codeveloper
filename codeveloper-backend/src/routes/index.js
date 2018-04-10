const express = require('express');
const router = express.Router();
const auth = require('./auth');
const user = require('./user');
const file = require('./file');

router.get('/', (req, res, next)=> {
    req.session.passport && req.session.passport.user ? res.redirect('/ide') : next();
});
router.use('/ide', (req, res, next)=> {
    req.session.passport && req.session.passport.user ? next() : res.redirect('/');
});
router.use('/auth', auth);
router.use('/user', user);
router.use('/file', file);

module.exports = router;