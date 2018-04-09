const express = require('express');
const router = express.Router();

const passport = require('../passport');

router.get('/auth/github', passport.authenticate('github')); 
router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
    // Successful authentication, redirect home. 
    res.redirect('/');
});

module.exports = router;