    const express= require("express")
    const app= express()
    const port=3000
    app.use(express.json())
    app.get("/sum/",function(req,res){
      let a=10;
      let b=20;
      res.send(`sum of two number is ${a+b}`)
    })
    app.post("/mul/",function(req,res){
      console.log(req.query.a1,req.query.a2)
      // let n1 = req.query.n1
      // let n2 = req.query.n2 
      let {n1,n2}=req.query
      res.send(`mul is ${n1*n2}`)
    })
    app.post("/div/",function(req,res){
      console.log(req.body)
      let {n1,n2}=req.body
      res.send("division "+ n1/n2)
    })
app.listen(port,()=>{console.log("server is running...")})














// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
  // res.send('Hello World')
// })

// app.listen(3000)