const express = require('express');
const router = express.Router();
const auth = require('./auth');

router.get('/', (req, res)=> {
    
});

router.use('/auth', auth);

module.exports = router;