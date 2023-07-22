// const os = require('os');
// const test = require('./test')
// test.printName()


// console.log(os.type())

// const path = require('path')
// console.log(__dirname)
// console.log(__filename)




// console.log(path.dirname(__dirname))
// console.log(path.dirname(__filename))

/**
 * File System
 */


const fs = require('fs');
const fsPromise = require('fs').promises
const path = require('path');


const fileOps = async() => {
    try {
        await fsPromise.writeFile(path.join(__dirname,"files","stater2.txt"),"Hello form Fs Promises")
    }
    catch (err){
        console.log(err)
    }
}

fileOps()


fs.readFile(path.join(__dirname,"files","stater.txt"), 'utf-8', (err, data) => {
    if(err) throw err
    console.log(data)
})


// fs.writeFile(path.join(__dirname,"files","stater1.txt"), 'And How Are You', (err) => {
//     if(err) throw err
//     console.log("Write Complted")
    
//     fs.appendFile(path.join(__dirname, "files", "stater1.txt"), 'And How Are You form India', (err) => {
//     if(err) throw err
//     console.log("Append Complted")
// })
// })



