const os =  require('os')

// info about  currnt  user 
const  user = os.userInfo()
console.log(user)

// method returns the system update in second 
console.log(`The sys uptime is ${os.uptime()} second`)


const currntOs = {
    name : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currntOs)



