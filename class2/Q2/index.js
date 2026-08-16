let http=require("http")

let server=http.createServer((req,res)=>{
    res.end("Welcome to my server")
    console.log(req.url)
    console.log(req)
})

server.listen(3000,()=>{
    console.log("runningg")
})

