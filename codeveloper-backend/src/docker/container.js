const fs = require('fs');

exports.init = data => {
    const uid = data.uid;
    child_process.exec(`docker run -itd --name ${uid} node:6`);
}

exports.cp = data => {
    const uid = data.uid;
    const codes = data.codes;
    const filenames = data.filenames;

    for(let i=0;i<filenames.length;i++) {
        fs.writeFileSync(`uploads/${filenames[i]}_${uid}`, codes[i]||'');
        child_process.execSync(`docker cp uploads/${filenames[i]}_${uid} ${uid}:/workdir/${filenames[i]}`);
        child_process.exec(`rm uploads/${filenames[i]}_${uid}`);
    }
}

exports.command = data => {
    const uid = data.uid;
    const cmd = data.cmd.split(' ');

    const run = child_process.spawn(`docker`,['exec',uid].concat(cmd));
    return run;
}