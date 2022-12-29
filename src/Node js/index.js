// const http= require("http");
// const data= require("./data")
const express = require('express')
// const fs= require("fs");
const path= require("path");
const publicPath= path.join(__dirname, "public")
// const dirPath= path.join(__dirname, "crud");
// const filePath = `${dirPath}/apple.txt`;

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(express.static(publicPath))
app.get("/home", (req,res)=>{
    res.sendFile(`${publicPath}/home.html`)
})
app.get("*", (req,res)=>{
    res.sendFile(`${publicPath}/nopage.html`)
})

// Routes middlware
// app.get('/home', function(req,res,next){

// // res.send('hello') 
// console.log("hello"); 
// next()
// },function(req,res  ,next){
//     res.send('word') 
// console.log("world"); 
// next()
// })

app.listen(8080, () => {console.log('Server started on http://localhost:8080')})



// Crud with file system
// File Read
// fs.readFile(filePath, "utf8", (err, item)=>{
//     console.log(item);
// })

// Add new
// fs.appendFile(filePath, " and this is new file", (err)=>{
//     if(!err)
//     console.log("file is updated");
// })

// File Reanme
// fs.rename(filePath, `${dirPath}/orange.txt`, (err)=>{
//     if(!err)
//     console.log("File name is updated");
// })

// Delete File
// fs.unlinkSync(`${dirPath}/orange.txt`)



// Procss Use fs  input from command line
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



// How to handle asynchronous
// let a=10;
// let b=0;

// let waittingData= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(30);
//     },2000)
// })

// waittingData.then((data)=>{
//     b=data
//     console.log(a+b);
// })


// Create Server
// http.createServer((req,res)=>{
// res.writeHead(200, {"Content-Type": "application\json"});
// res.write(JSON.stringify(data));
// res.end();z   
// }).listen(5000)


// stub
// test paradise
// web restfull services
// req params and req query