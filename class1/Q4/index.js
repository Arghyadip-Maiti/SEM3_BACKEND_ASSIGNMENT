let fs=require("fs")

fs.writeFileSync("demo.txt","AAA")

let data1=fs.readFileSync("demo.txt")
console.log(data1.toString())

fs.writeFileSync("demo.txt","BBB")

let data2=fs.readFileSync("demo.txt")
console.log(data2.toString())

fs.appendFileSync("demo.txt","CCC")

let data3=fs.readFileSync("demo.txt")
console.log(data3.toString())