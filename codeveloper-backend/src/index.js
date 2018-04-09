const express = require('express');
const router = express.Router();

router.get('/users', (req, res)=> getMembers(req, res));

module.exports = router;
