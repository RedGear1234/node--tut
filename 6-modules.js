
// Globals 

// __dirname - paths to currnent directory 
// __filename - file name
// require -  function to use modules
// modules - info about currnent module (file)(os , path,  fs,  Http, ....)
// process - info about env where the program is being executed

// console.log(__dirname)


const names = require('./2-global.js')
const say = require('./3-modules')

const data = require("./4-alternative-fav")
console.log(data)

require("./5-mind-grende")


say("shubham")
say(names.john)
say(names.peter)








