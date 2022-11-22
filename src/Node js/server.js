// var buf= Buffer.alloc(10);
// buf.write("hello");
// console.log(buf);
// console.log(buf.toString());

// var buf2= Buffer.from("Wellcome");
// console.log(buf2.length);
// console.log(buf2.toJSON());
const express = require("express");
const app= express();

// // app.use(express.urlencoded({extended: true}));
// // app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// })
// app.listen(8080,()=>{console.log("server stsareted in on http://localhost:8080")})

app.post("/", (req,res)=>{
    const user= new userProfile(req.body);
    user.save((err, success)=>{
        try {
            return res.status(201).send({ message: "post data", user: success["_doc"]});
        } catch (err) {
            return res.status(500).send({message: "err"})
        }
    })
})
app.get("/home/:id", (req,res)=>{
    const query= req.query;
    const user= userProfile.find(query);
    res.send.user
})