let os=require("os")


console.log(os.platform())

console.log(os.cpus())

total=os.totalmem()/1024/1024/1024
console.log(total.toFixed(2))

free=os.freemem()/1024**3
console.log(free.toFixed(2))

console.log(os.uptime()/3600)

