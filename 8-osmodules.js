const { log } = require('console')
const os = require('os')

//info on current user
const user = os.userInfo()
console.log(user)

//system uptime in sec
log(`The system uptime is: ${os.uptime()} seconds`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs)