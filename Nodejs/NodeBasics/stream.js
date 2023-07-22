const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"),'utf-8')

const ws = fs.createWriteStream(path.join(__dirname, "files", "loremstream.txt"),)


rs.pipe(ws)