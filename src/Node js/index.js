// const http= require("http");
// const data= require("./data")


const fs = require("fs");
const input= process.argv
fs.writeFileSync(input[2],input[3])


// http.createServer((req,res)=>{
// res.writeHead(200, {"Content-Type": "application\json"});
// res.write(JSON.stringify(data));
// res.end();
// }).listen(5000)