const express = require('express')
const app = express()

app.get("/infinito", function(req, res){
    let i = 0
    setInterval(function(){
        console.log(i++)
    }, 0.1)
})
app.get("/data", function(req,res){
    res.json({
        date: new Date()
    })
})
app.listen(80)