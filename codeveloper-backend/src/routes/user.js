const express = require('express');
const router = express.Router();
const connection = require('../mysql');

router.use('/', (req, res, next) => {
    if(req.session.passport && req.session.passport.user) next();
    else return res.status(403)
});

router.get('/', (req, res, next) => {
    const session = req.session.passport.user;
    return res.json({user: session});
});

router.get('/contributor', (req, res, next)=> {
    const session = req.session.passport.user;
    const sql = `SELECT members.* FROM members INNER JOIN contributors ON contributors.contributor = members.user_id WHERE contributors.master = '${session.user_id}'`;
    connection.query(sql, (err, contributors) => {
        if(err) return res.status(500).end();
        return res.json({contributors: contributors});
    })  
});

router.post('/contributor', (req, res, next)=> {
    const session = req.session.passport.user; 
    const contributor = req.body.contributor;

    if(contributor == session.user_name) return res.status(400).end(); // 본인을 추가한 경우

    const sql = `SELECT * FROM members WHERE user_name = '${contributor}'`;
    connection.query(sql, (err, user) => {
        if(err) return res.status(500).end(); // DB 에러
        if(!user[0]) return res.status(404).end(); // 유저가 존재하지 않음
        const sql = `INSERT INTO contributors(master, contributor) VALUES('${session.user_id}', '${user[0].user_id}')`;

        connection.query(sql, (err) => {
            if(err) return res.status(500).end(); // DB 에러
            return res.json({contributor: user[0]});
        })
    });
});

module.exports = router;