const express = require('express')
const app = express()

app.get("/infinito", function(req, res){
    let i = 0
    while(true){
        console.log(i++)
    }
})
app.get("/data", function(req,res){
    res.json({
        date: new Date()
    })
})
app.listen(80)