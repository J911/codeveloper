const express = require('express');
const router = express.Router();
const connection = require('../mysql');

router.use('/', (req, res, next) => {
    if(req.session.passport && req.session.passport.user) next();
    else return res.status(403)
})

router.get('/', (req, res, next) => {
    return res.json({
        result: "success",
        user: req.session.passport.user
    });
});
router.get('/contributor', (req, res, next)=> {
    const sql = `SELECT members.* FROM members INNER JOIN contributors ON contributors.uid = members.user_id WHERE contributors.master = '${req.session.passport.user.id}'`;
    connection.query(sql, (err, contributors) => {
        if(err) return res.status(500).end();
        return res.json({
            result: "success",

            contributors: contributors
        });
    })  
});

router.post('/contributor', (req, res, next)=> {
    const contributor = req.body.contributor;
    const sql = `SELECT * FROM members WHERE user_name = '${contributor}'`;
    connection.query(sql, (err, user) => {
        if(err) return res.status(500).end();
        if(!user[0]) return res.status(404).end();
        const sql = `INSERT INTO contributors(master, uid) VALUES('${req.session.passport.user.id}', '${user[0].user_id}')`;
        console.log(sql)
        connection.query(sql, (err) => {
            if(err) return res.json({
                result: "fail",
                status: 500
            })
            return res.json({
                result: "success",
                contributor: user[0]
            });
        })
    });

});

module.exports = router;