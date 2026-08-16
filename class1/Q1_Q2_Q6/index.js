
//Q1--------------------------------

let fs=require("fs");

fs.writeFileSync("welcome.txt","Welcome to Backend Development!")

console.log("file created successfully")

//Q2---------------------------------

let data=fs.readFileSync("welcome.txt")

console.log(data.toString())

//Q6---------------------------------

console.log("start")

let data2=fs.readFile("welcome.txt",(data2)=>{
    console.log(data2)
})

console.log("End")
