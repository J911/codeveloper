const express = require('express');
const router = express.Router();
const connection = require('../mysql');

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
router.get('/contributor', (req, res, next)=> {
    if(req.session.passport && req.session.passport.user){
        const sql = `SELECT members.* FROM members INNER JOIN contributors ON contributors.uid = members.user_id WHERE contributors.master = '${req.session.passport.user.id}'`;
        connection.query(sql, (err, contributors) => {
            if(err) return res.json({
                result: "fail",
                statusCode: 500
            })
            return res.json({
                result: "success",
                statusCode: 200,
                contributors: contributors
            });
        })
    }
    else return res.json({
        result: "fail",
        statusCode: 403
    })
});
router.post('/contributor', (req, res, next)=> {
    if(req.session.passport && req.session.passport.user){
        const contributor = req.body.contributor;
        const sql = `SELECT * FROM members WHERE user_name = '${contributor}'`;
        connection.query(sql, (err, user) => {
            if(err) return res.json({
                result: "fail",
                statusCode: 500
            })
            if(!user[0]) return res.json({
                result: "fail",
                statusCode: 404
            });
            const sql = `INSERT INTO contributors(master, uid) VALUES('${req.session.passport.user.id}', '${user[0].user_id}')`;
            console.log(sql)
            connection.query(sql, (err) => {
                if(err) return res.json({
                    result: "fail",
                    statusCode: 500
                })
                return res.json({
                    result: "success",
                    statusCode: 200,
                    contributor: user[0]
                });
            })
        });
    }
    else return res.json({
        result: "fail",
        statusCode: 403
    })
});

module.exports = router;