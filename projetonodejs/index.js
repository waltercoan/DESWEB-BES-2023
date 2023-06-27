const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const path = require('path')

const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended:false}))
app.set('view engine', 'handlebars')
app.engine('handlebars', engine(''))

app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.use('/public', express.static(path.join(__dirname,'public')))


const fakedata = [
    {
        id: 1,
        nome: 'zezinho da silva',
        endereco: 'Rua lalala 100',
        sexo: 'Masculino',
        telefone: '5555-1234'
    },
    {
        id: 2,
        nome: 'Mariazinha da silva',
        endereco: 'Rua lelelel 200',
        sexo: 'Feminino',
        telefone: '5555-4321'
    }
]

app.get('/', function(req,res){
    //res.send('Eu não acredito')
    res.render('index')
})

app.get('/clientes', function(req,res){
    res.render('cliente/cliente',
    {listaclientes: fakedata})
})

app.get('/clientes/novo', function(req,res){
    res.render('cliente/formcliente')
})

app.post('/clientes/save', function(req,res){
    //guarda o ID do cliente antigo (no caso do alterar)
    let clienteantigo =
        fakedata.find(o => o.id == req.body.id)
    //se existir atualiza com os dados da tela
    if(clienteantigo != undefined){
        //atualiza todos os campos do cliente com os dados do formulário
        clienteantigo.nome = req.body.nome
        clienteantigo.endereco = req.body.endereco
        clienteantigo.sexo = req.body.sexo
        clienteantigo.telefone = req.body.telefone

    }else{// caso contrário é uma inclusão
        //busca qual foi o maior ID entre todos os clientes
        let maiorid = Math.max(...fakedata.map(o => o.id))
        //cria um novo cliente, e carrega os dados do formulário de incluir
        let novocliente ={
            id: maiorid + 1, //calcula o novo id somando 1 
            nome: req.body.nome,
            endereco: req.body.endereco,
            sexo: req.body.sexo,
            telefone: req.body.telefone
        }
        //empurra o novo cliente para a lista fakedata
        fakedata.push(novocliente)
    }
    //redireciona para a tela de clientes
    res.redirect('/clientes')
})

app.get('/clientes/alterar/:id', function(req,res){
    let id = req.params['id']
    //procura o cliente pelo id
    let umcliente = fakedata.find(o => o.id == id)
    res.render('cliente/formcliente',
            {cliente: umcliente})

})


app.listen(80, ()=>{
    console.log('Servidor rodando...')
    console.log('http://localhost/')
})