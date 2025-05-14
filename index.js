 const express = require ("express")
 const app = express()
 app.get("/",(req,res)=>{
    res.send("Hello World")
 })

 app.get("/test",(req,res)=>{
    res.send("Tesing is Working")
    })

    app.listen(process.env.port, () => {
        console.log(`Server is Running Successfully on Port ${process.env.port}`)
    })