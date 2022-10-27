// const http= require("http");
// const data= require("./data")
const fs= require("fs");
const path= require("path");
const dirPath= path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

// File Read
// fs.readFile(filePath, "utf8", (err, item)=>{
//     console.log(item);
// })

fs.appendFile(filePath, " and this is new file", (err)=>{
    if(!err)
    console.log("file is updated");
})


// Procss Use fs
// const fs = require("fs");
// const input= process.argv
// if(input[2]==="add"){
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]==="remove"){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("wrong");
// }



  


// Create Server
// http.createServer((req,res)=>{
// res.writeHead(200, {"Content-Type": "application\json"});
// res.write(JSON.stringify(data));
// res.end();z   
// }).listen(5000)