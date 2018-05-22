const fs = require('fs');
const child_process = require('child_process');

exports.init = data => {
    const uid = data.uid;
    child_process.exec(`docker run -itd --name ${uid} terminal:node`);
}

exports.cp = data => {
    const uid = data.uid;
    const filenames = data.filenames;

    for(let i=0;i<filenames.length;i++) {
        child_process.execSync(`docker cp uploads/${uid}_${filenames[i].idx} ${uid}:/workdir/${filenames[i].name}`);
        child_process.exec(`rm uploads/${filenames[i]}_${uid}`);
    }
}

exports.command = data => {
    const uid = data.uid;
    const cmd = data.cmd.split(' ');
    const run = child_process.spawn(`docker`,['exec',uid].concat(cmd));
    return run;
}