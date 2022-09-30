const {readFile, writeFile} = require('fs')
// const fs = require('fs').readFile
console.log("start")
readFile("./content/first.txt", 'utf8' ,(err , result) => {
    if (err) {
        console.log(err)
        return null
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err) {
            console.log(err)
            return null
        }
       const second = result
       writeFile('./content/result-async.txt', `Here is the result : ${first} , ${second},`, {flag: 'a'}, (err ,result)=>{
        if (err) {
            console.log(err)
            return null
        }
        console.log(`done with task`)
       })
    })
})

console.log('start with next task')



