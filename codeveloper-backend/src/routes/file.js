const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const connection = require('../mysql');

router.use('/', (req, res, next) => {
    if(req.session.passport && req.session.passport.user) next();
    else return res.status(403).json({
        errorCode: 1
    })
});

router.get('/', (req, res) => {
    const session = req.session.passport.user;
    const sql = `SELECT * FROM files WHERE uid = ${session.user_id}`;
    connection.query(sql, (err, files) => {
        if(err) return res.status(500).json({
            errorCode: 9
        });
        return res.json({files: files});
    });
});

router.get('/contribute', (req, res) => {
    // 본인이 기여자로 등록된 마스터의 파일을 가져오는 API
    const session = req.session.passport.user;
    const sql = `SELECT files.* FROM files INNER JOIN contributors ON contributors.master == files.uid WHERE contributors.contributor = ${session.user_id}`;
    connection.query(sql, (err, files) => {
        if(err) return res.status(500).json({
            errorCode: 9
        });
        return res.json({files: files});
    });
});
router.get('/contributor/:idx', (req, res) => {
    /**
     * 명세:
     * 본인이 컨트리뷰터로 등록된 파일인지 검사해야함.
     * 등록된 경우 파일을 반환.
     * 등록 안된경우 403 반환.
     */
});
router.get('/:idx', (req, res) => {
    const idx = req.params.idx;
    const session = req.session.passport.user;
    const sql = `SELECT * FROM files WHERE uid = ${session.user_id}`;
    connection.query(sql, (err, files) => {
        if(err) return res.status(500).json({
            errorCode: 9
        });
        fs.readFile(path.resolve(__dirname, `../../uploads/${session.user_id}_${idx}`), 'utf8', function(err, data){
            return res.json({code: data});
        });
    });
});
router.post('/:idx', (req, res) => {
    const idx = req.params.idx;
    const code = req.body.code;
    const session = req.session.passport.user;
    const sql = `SELECT * FROM files WHERE uid = ${session.user_id}`;
    connection.query(sql, (err, files) => {
        if(err) return res.status(500).json({
            errorCode: 9
        });
        fs.writeFile(path.resolve(__dirname, `../../uploads/${session.user_id}_${idx}`), code, function(err) {
            return res.json({result: "success"});
        });
    });
});
module.exports = router;