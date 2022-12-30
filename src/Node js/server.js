// var buf= Buffer.alloc(10);
// buf.write("hello");
// console.log(buf);
// console.log(buf.toString());

// var buf2= Buffer.from("Wellcome");
// console.log(buf2.length);
// console.log(buf2.toJSON());
const express = require("express");
const fs = require("fs")
const app= express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.post("/addstudents",(req,res)=>{
    // // read file
    // const data= fs.readFileSync("./db.json", "utf-8")
    // // parsing the data to add a new student
    // const parsed_data= JSON.parse(data);
    // console.log(parsed_data);
    // // adding a new data
    // parsed_data.students.push(req.body);
    // // write it in the file
    // fs.writeFileSync("./db.json")
    //   res.send("database add");
    // app.post("/addstudent",(req,res)=>{
    //     const data=JSON.parse(fs.readFileSync("/db.json","utf-8"))
    //     data.students.push(req.body)
    //     fs.writeFileSync("./db.json",data)
    //     })

    app.use(( req,res,next)=>{
        const startTime= new Date().getTime();
        next();
        const endTime= new Date().getTime();
        console.log(endTime-startTime);
    })

    app.get("/about", (req,res)=>{
        res.send("About")
    })
    
    app.get("/data", (req,res)=>{
        const data= fs.readFileSync("./dummy.txt", "utf-8")
        res.send(data)
    })
        
        
// })
app.listen(8080,()=>{console.log("server stsareted in on http://localhost:8080")})
