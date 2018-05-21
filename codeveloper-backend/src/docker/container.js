const fs = require('fs');
const child_process = require('child_process');

exports.init = data => {
    const uid = data.uid;
    child_process.exec(`docker run -itd --name ${uid} terminal:node`);
}

exports.cp = data => {
    const uid = data.uid;
    // const codes = data.codes;
    const filenames = data.filenames;

    for(let i=0;i<filenames.length;i++) {
        // fs.writeFileSync(`uploads/${filenames[i]}_${uid}`, codes[i]||'');
        console.log(`docker cp uploads/${uid}_${filenames[i].idx} ${uid}:/workdir/${filenames[i].name}`)
        child_process.execSync(`docker cp uploads/${uid}_${filenames[i].idx} ${uid}:/workdir/${filenames[i].name}`);
        child_process.exec(`rm uploads/${filenames[i]}_${uid}`);
    }
    console.log("CP OK")
}

exports.command = data => {
    const uid = data.uid;
    const cmd = data.cmd.split(' ');

    console.log(`docker`,['exec',uid].concat(cmd))
    const run = child_process.spawn(`docker`,['exec',uid].concat(cmd));
    return run;
}