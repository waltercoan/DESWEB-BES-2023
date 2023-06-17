const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Eu não acredito')
})

app.listen(80, ()=>{
    console.log('Servidor rodando...')
    console.log('http://localhost/')
})