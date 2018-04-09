const express = require('express');
const router = express.Router();
const auth = require('./auth');

router.get('/', (req, res, next)=> {
    req.session.passport && req.session.passport.user ? res.redirect('/ide') : next();
});
router.use('/ide', (req, res, next)=> {
    req.session.passport && req.session.passport.user ? next() : res.redirect('/');
});
router.use('/auth', auth);

module.exports = router;