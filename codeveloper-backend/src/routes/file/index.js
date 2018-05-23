const express = require('express');
const router = express.Router();
const file = require('./file.ctrl');

router.use('/', (req, res, next) => {
    if(req.session.passport && req.session.passport.user) next();
    else return res.status(403).json({
        errorCode: 1
    })
});

router.get('/', file.getFile);
router.post('/', file.writeFile);

router.get('/master', file.getMasterFile);
router.get('/master/:idx', file.getMasterCode);
router.post('/master/:idx', file.updateMasterCode);

router.get('/:idx', file.getCode);
router.post('/:idx', file.updateCode);


module.exports = router;