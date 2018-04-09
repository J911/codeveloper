const express = require('express');
const router = express.Router();
const auth = require('./auth');
const user = require('./user');

router.get('/', (req, res, next)=> {
    req.session.passport && req.session.passport.user ? res.redirect('/ide') : next();
});
router.use('/ide', (req, res, next)=> {
    req.session.passport && req.session.passport.user ? next() : res.redirect('/');
});
router.use('/auth', auth);
router.use('/user', user);

module.exports = router;