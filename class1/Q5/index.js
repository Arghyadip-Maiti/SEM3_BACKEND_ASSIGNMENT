let fs=require("fs")

//fs.mkdirSync("myProject")

fs.writeFileSync("myProject/info.txt","This is inside a folder")

let data=fs.readdirSync("myProject")

console.log(data)

