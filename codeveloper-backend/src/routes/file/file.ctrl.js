const fs = require('fs');
const path = require('path');
const connection = require('../../mysql');

const baseDir = '../../../';

exports.getFile = (req, res) => {
    const session = req.session.passport.user;
    const sql = `SELECT * FROM files WHERE uid = ${session.user_id}`;
    connection.query(sql, (err, files) => {
        if(err) return res.status(500).json({
            errorCode: 9
        });
        return res.json({files: files});
    });
}

exports.getMasterFile = (req, res) => {
    const session = req.session.passport.user;
    const master = req.query.master;
    const sql = `SELECT files.* FROM files INNER JOIN contributors ON contributors.master = files.uid  WHERE files.uid = '${master}' and contributors.contributor = '${session.user_id}'`;
    connection.query(sql, (err, files) => {
        if(err) return res.status(500).json({
            errorCode: 9
        });
        return res.json({master, files});
    });
}

exports.getCode = (req, res) => {
    const session = req.session.passport.user;
    const idx = req.params.idx;
    const sql = `SELECT * FROM files WHERE uid = ${session.user_id} and idx = ${idx}`;
    connection.query(sql, (err, files) => {
        if(err) return res.status(500).json({
            errorCode: 9
        });
        if(files[0]) fs.readFile(path.resolve(__dirname, `${baseDir}uploads/${session.user_id}_${idx}`), 'utf8', function(err, data){
            if(err && err.errno == -2)
                fs.writeFileSync(path.resolve(__dirname, `${baseDir}uploads/${session.user_id}_${idx}`), '');
            return res.json({code: data || ''});
        });
        else return res.status(404).json({
            errorCode: 10 //파일을 찾을 수 없음.
        });
    });
}

exports.writeFile = (req, res) => {
    const session = req.session.passport.user;
    const filename = req.body.filename;
    const icon = 'fab fa-js';

    const sql = `INSERT INTO files(uid, name, icon) VALUES('${session.user_id}', '${filename}', '${icon}')`;
    connection.query(sql, (err) => {
        if(err) return res.status(500).json({
            errorCode: 9
        });
        return res.json({result: "success"});
    });
}

exports.updateCode = (req, res) => {
    const session = req.session.passport.user;
    const idx = req.params.idx;
    const code = req.body.code;
    const sql = `SELECT * FROM files WHERE uid = ${session.user_id} and idx = ${idx}`;
    connection.query(sql, (err, files) => {
        if(err) return res.status(500).json({
            errorCode: 9
        });
        if(files[0]) fs.writeFile(path.resolve(__dirname, `${baseDir}uploads/${session.user_id}_${idx}`), code, function(err) {
            return res.json({result: "success"});
        });
        else return res.status(404).json({
            errorCode: 10 //파일을 찾을 수 없음.
        });
    });
}

exports.updateMasterCode = (req, res) => {
    const session = req.session.passport.user;
    const idx = req.params.idx;
    const master = req.body.master;
    const code = req.body.code;
    const sql = `SELECT files.* FROM files INNER JOIN contributors ON contributors.master = files.uid  WHERE files.uid = ${master} and files.idx = ${idx} and contributors.contributor = '${session.user_id}'`;
    connection.query(sql, (err, files) => {
        if(err) return res.status(500).json({
            errorCode: 9
        });
        if(files[0]) fs.writeFile(path.resolve(__dirname, `${baseDir}uploads/${master}_${idx}`), code, function(err) {
            return res.json({result: "success"});
        });
        else return res.status(404).json({
            errorCode: 10 //파일을 찾을 수 없음.
        });
    });
}

exports.getMasterCode = (req, res) => {
    const session = req.session.passport.user;
    const idx = req.params.idx;
    const master = req.query.master;
    const sql = `SELECT files.* FROM files INNER JOIN contributors ON contributors.master = files.uid  WHERE files.uid = ${master} and files.idx = ${idx} and contributors.contributor = '${session.user_id}'`;
    connection.query(sql, (err, files) => {
        if(err) return res.status(500).json({
            errorCode: 9
        });
        if(files[0]) fs.readFile(path.resolve(__dirname, `${baseDir}uploads/${master}_${idx}`), 'utf8', function(err, data){
            if(err && err.errno == -2)
                fs.writeFileSync(path.resolve(__dirname, `${baseDir}uploads/${master}_${idx}`), '');
            return res.json({code: data || ''});
        });
        else return res.status(404).json({
            errorCode: 10 //파일을 찾을 수 없음.
        });
    });
}