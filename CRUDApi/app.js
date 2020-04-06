const express       = require("express");
const bodyParser    = require("body-parser");
const path          = require("path");
const fs            = require("fs");


const app = express();


app.get("/api/all",(req,res) =>{
    res.setHeader("Content-Type","application/json");

    fs.readFile(path.join(__dirname,"feed.json"),"utf8",(err,data)=>{
        res.send(json);
    });   
});

app.post("/api/add",(req,res)=> {
    let postData= req.body;
    console.log(JSON.parse(postData));
})

// Run the server
app.listen(3000,(e) =>{
    if (e) throw e;
    console.log("Your server has started on port 3000...");
})