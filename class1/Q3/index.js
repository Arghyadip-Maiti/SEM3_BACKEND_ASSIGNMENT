
let fs=require('fs');

fs.writeFileSync("tasks.txt","Task1: Learn Node\n")

fs.appendFileSync("tasks.txt","Task2: Learn fs module")

let data=fs.readFileSync("tasks.txt")

console.log(data.toString())