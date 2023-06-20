const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const path = require('path')

app.set('view engine', 'handlebars')
app.engine('handlebars', engine(''))

app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.use('/public', express.static(path.join(__dirname,'public')))

app.get('/', function(req,res){
    //res.send('Eu não acredito')
    res.render('index')
})

app.listen(80, ()=>{
    console.log('Servidor rodando...')
    console.log('http://localhost/')
})