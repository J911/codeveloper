const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    console.log('OK')
});

module.exports = router;
