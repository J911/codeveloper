const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=> {
    if(req.session.passport && req.session.passport.user)
        return res.json({
            result: "success",
            statusCode: 200,
            user: req.session.passport.user
        });
    return res.json({
        result: "fail",
        statusCode: 403
    })
});


module.exports = router;