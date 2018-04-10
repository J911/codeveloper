const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const connection = require('../mysql');

router.get('/', (req, res) => {
    const sql = `SELECT * FROM files WHERE uid = ${req.session.passport.user.id}`;
    connection.query(sql, (err, files) => {
        if(err) return res.json({
            result: "fail",
            statusCode: 500,
        });
        return res.json({
            result: "success",
            statusCode: 200,
            files: files
        });
    });
});
router.get('/:idx', (req, res) => {
    const idx = req.params.idx;
    const sql = `SELECT * FROM files WHERE uid = ${req.session.passport.user.id}`;
    connection.query(sql, (err, files) => {
        if(err) return res.json({
            result: "fail",
            statusCode: 500,
        });
        fs.readFile(path.resolve(__dirname, `../../uploads/${req.session.passport.user.id}_${idx}`), 'utf8', function(err, data){
            return res.json({
                result: "success",
                statusCode: 200,
                code: data
            });
        });
    });
});
router.post('/:idx', (req, res) => {
    const idx = req.params.idx;
    const code = req.body.code;
    
    const sql = `SELECT * FROM files WHERE uid = ${req.session.passport.user.id}`;
    connection.query(sql, (err, files) => {
        if(err) return res.json({
            result: "fail",
            statusCode: 500,
        });
        fs.writeFile(path.resolve(__dirname, `../../uploads/${req.session.passport.user.id}_${idx}`), code, function(err) {
            return res.json({
                result: "success",
                statusCode: 200,
            });
        });
    });
});
module.exports = router;