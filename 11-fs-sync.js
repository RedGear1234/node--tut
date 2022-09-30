const {readFileSync, writeFileSync } = require('fs')
console.log("start")

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


writeFileSync('./content/result-sync2.txt', `Here is the Result ${first}, ${second}`, {flag : 'a'})

console.log('done with this Task')
console.log("starting next on")
