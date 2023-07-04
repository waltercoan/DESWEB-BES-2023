# Projeto CRUD (Create, Read, Update, Delete) NodeJS

## Configuração do projeto
1. Criou uma pasta chamada projetonodejs
2. Abrir o terminal, e entrar na pasta com o comando
```
cd projetonodejs
```
3. Inicializar o projeto NodeJS com o comando
```
npm init
```
OBS: Teclar enter em todas as perguntas
4. O npm gerou na sua pasta do projeto um arquivo chamado package.json que contem toda a configuração do projeto
5. Instalar a biblioteca express
```
npm install express
```
6. Criou um arquivo chamado index.js
```
//importar a biblioteca do express do NodeJS
const express = require('express')
//inicializa a biblioteca do express
const app = express()

//registrando o endereco "/" e retornando um texto fixo
app.get('/', function(req,res){
    res.send('Eu não acredito')
})

//Colocando o express para "ouvir" as requisições na porta 80
app.listen(80, ()=>{
    console.log('Servidor rodando...')
    console.log('http://localhost/')
})
```
7. Instalar as seguintes bibliotecas no terminal do projeto
```
npm i body-parser
npm i bootstrap
npm i express-handlebars
npm i jquery
```
8. Criar na pasta do projeto uma subpasta chamada views
9. Criar um arquivo chamado index.handlbars com o conteúdo
```
<h1>Página principal</h1>
```
10. Criar uma pasta layouts dentro da pasta views
11. Dentro da pasta layouts criar um arquivo chamado main.handlebars com o seguinte código
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        {{{body}}}        
    </body>
</html>
```
12. Alterar o codigo do programa index.js para carregar a biblioteca do handlebars e modificar o retorno do endpoint "/"/" para renderizar o html

```
const express = require('express')
const app = express()
//Carregando a biblioteca do express-handlebars 
const { engine } = require('express-handlebars')

//Definindo o handlebars como engine (motor) de renderização 
//dos templates HTML
app.set('view engine', 'handlebars')
app.engine('handlebars', engine(''))

app.get('/', function(req,res){
    //Substituindo o retorno do texto fixo pelo arquivo html
    //res.send('Eu não acredito')
    res.render('index')
})

app.listen(80, ()=>{
    console.log('Servidor rodando...')
    console.log('http://localhost/')
})
```

## Configuração do Bootstrap

- Alterar o arquivo index.js para importar a biblioteca path
```
const path = require('path')
```

- Alterar o arquivo index.js para servir os arquivos estáticos CSS e JavaScript do Bootstrap e do JQuery
```
app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.use('/public', express.static(path.join(__dirname,'public')))
```

- Altera o arquivo views->layouts->main.handlebars para carregar os arquivo CSS da biblioteca do Bootstrap e do JQuery

```
<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="/css/bootstrap.min.css"> <!-- Importar css-->
        <link rel="stylesheet" href="/public/site.css"> <!-- Importar css-->
    </head>
```
- Altera o arquivo views->layouts->main.handlebars para carregar os arquivo Javascript da biblioteca do Bootstrap e do JQuery

```
<script src="/js/bootstrap.min.js"></script>
    <script src="/js/jquery.js"></script>
```
- Altera o arquivo views->layouts->main.handlebars para inserir o código HTML das páginas dentro de uma tag MAIN com a classe container
```
<main class="container">
    {{{body}}}        
</main>
```
- Escolher um navbar (menu) do [Bootstrap](https://getbootstrap.com/docs/5.3/components/navbar/#nav) e inserir o código no arquivo views->layouts->main.handlebars
```
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
            </li>
        </ul>
        </div>
    </div>
</nav>
```

## Construção da tela de CRUD (Create/Read/Update/Delete) de Cliente (READ)
- Alterar o arquivo index.js para incluir um novo endereço (ROTA) para a tela de clientes
```
app.get('/clientes', function(req,res){
    res.render('cliente/cliente')
})
```
- Criar uma pasta com o nome cliente dentro da pasta views
- Criar um arquivo chamado cliente.handlebars dentro da pasta views->cliente
- Código inicial do arquivo cliente.handlebars
```
<h1>Clientes</h1>
<hr>
<table class="table">
    <thead> <!--Título da tabela -->
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Sexo</th>
            <th>Telefone</th>
        </tr>
    </thead>
    <tbody> <!--CORPO da tabela -->
        <tr>
            <td>1</td>
            <td>Zezinho</td>
            <td>Rua lalalal 100</td>
            <td>Masculino</td>
            <td>5555-1234</td>
        </tr>
    </tbody>
</table>
```
- Executar o projeto e verificar se a tabela é apresenta no endereço [http://localhost/clientes](http://localhost/clientes)

### Tornando a tela de listagem de Clientes dinâmica
- Alterar o arquivo index.js para incluir uma variável que servirá de fonte de dados para o cadastro de clientes
```
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
```
- Alterar o arquivo index.js para que a rota /clientes envie os dados da lista fakedata para a tela com o apelido listaclientes
```
app.get('/clientes', function(req,res){
    res.render('cliente/cliente',
    {listaclientes: fakedata})
})
```
- Altera o arquivo views->cliente->cliente.handlebars para que o corpo da tabela seja atulizado de forma dinâmica utilizando o FOR EACH do Handlbars
```
<tbody> <!--CORPO da tabela -->
    {{#each listaclientes}}
    <tr>
        <td>{{this.id}}</td>
        <td>{{this.nome}}</td>
        <td>{{this.endereco}}</td>
        <td>{{this.sexo}}</td>
        <td>{{this.telefone}}</td>
    </tr>
    {{/each}}
</tbody>
```
- Executar o projeto e verificar se a tabela é apresenta no endereço [http://localhost/clientes](http://localhost/clientes)


## Inclusão do cadastro de clientes no menu da aplicação
- Alterar o arquivo views->layouts->main.handlebars para incluir o link para o cadastro de clientes
```
<li class="nav-item">
    <a class="nav-link" href="/clientes">Clientes</a>
</li>
```

## Construção da tela de cadastrar clientes
- Alterar o arquivo views->cliente->cliente.handlebars para incluir o botão para a tela de inclusão de registros
```
<a href="/clientes/novo" class="btn btn-primary">Novo</a>
```
- Alterar o arquivo index.js para criar a nova rota /clientes/novo
```
app.get('/clientes/novo', function(req,res){
    res.render('cliente/formcliente')
})
```
- Criar um novo arquivo em views->cliente com o nome formcliente.handlebars
- Incluir o código abaixo para criar o formulário
```
<h2>Cliente</h2>
<hr>

<form action="/clientes/save" method="post">
    <div class="form-group">
        <label for="txtnome">Nome</label>
        <input type="text" 
            class="form-control"
            id="txtnome" name="nome" required>
    </div>

    <button type="submit" 
        class="btn btn-primary">Enviar</button>

</form>
```
- Alterar o arquivo index.js para importar e aplicar a biblioteca body-parser
```
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended:false}))
```
- Alterar o arquivo index.js para incluir a lógica da rota /clientes/save para receber os dados do formulário e incluir na variável fakedata
```
app.post('/clientes/save', function(req,res){
    //console.log(req.body)
    /*let maiorid=0
    for(let i=0;i<fakedata.length;i++){
        if(fakedata[i].id > maiorid){
            maiorid = fakedata[i].id
        }
    }
    maiorid = maiorid + 1*/

    let maiorid = Math.max(...fakedata.map(o => o.id))

    let novocliente ={
        id: maiorid + 1,
        nome: req.body.nome
    }
    fakedata.push(novocliente)
    res.redirect('/clientes')

})
```

## Construção da tela de alterar clientes

- Alterar o arquivo views->cliente->cliente.handlebars para incluir o botao novo na tela

```
<a href="/clientes/novo" class="btn btn-primary">Novo</a>
```
 
- Alterar o arquivo index.js para incluir uma nova rota na aplicação chamada alterar e que deve buscar os dados do cliente na variável de fakedata e repassar para a tela de formulário

```
app.get('/clientes/alterar/:id', function(req,res){
    let id = req.params['id']
    //procura o cliente pelo id
    let umcliente = fakedata.find(o => o.id == id)
    res.render('cliente/formcliente',
            {cliente: umcliente})

})
```

- Alterar a tela de formulário para incluir um campo hidden para o ID e em cada input incluir a propriedade value para que o handlebars possa inserir os dados do cliente em cada caixa de texto

```
    <input type="hidden" name="id" 
    value="{{cliente.id}}">
```
```
 <input type="text" value="{{cliente.nome}}"
            class="form-control"
            id="txtnome" name="nome" required>
```

```
<input type="text" value="{{cliente.endereco}}"
            class="form-control"
            id="txtendereco" name="endereco">
```

```
<input type="text"  value="{{cliente.sexo}}"
            class="form-control"
            id="txtsexo" name="sexo">
```

```
<input type="text" value="{{cliente.telefone}}"
            class="form-control"
            id="txttelefone" name="telefone">
```

- Alterar o código do arquivo index.js para que a rota /save faça a lógica de alterar e a lógica de incluir novos clientes

```
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
```
## Construção do Excluir clientes
- Alterar o arquivo views->cliente->cliente.handlebars para incluir o botão de excluir na tabela, depois do código do botão alterar
```
<button data-id="{{this.id}}"
                    class="btn btn-danger js-delete">Excluir</button>
```

- Ainda no arquivo cliente.handlebars depois da tabela incluir o código HTML do bootstrap para desenhar a tela de confirmação de exclusão [modal](https://getbootstrap.com/docs/5.3/components/modal/)

- Neste código a div do modal deve ter um id="meumodal"
- O título e a mensagem devem ser incluído na modal
- O botão SIM deve ter o id="btnsim"
```
<div class="modal" tabindex="-1" id="meumodal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Excluir cliente</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Confirma a exclusão do cliente?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" id="btnsim">SIM</button>
      </div>
    </div>
  </div>
</div>
```

- Ainda no arquivo cliente.handlebars no final do arquivo incluir a tag script para importar os arquivos JavaScript

```
<script src="/js/jquery.min.js"></script>
<script src="/public/site.js"></script>
```

- Criar dentro do projeto a pasta public, e dentro desta pasta criar o arquivo site.js

- No arquivo public->site.js incluir o seguinte codigo Javascript
```
//Criar uma função JavaScript autoexecutavel
(function(){
    //procura na tela se tem um id="clientes"
    //coloque evento click no elemento com
    //a class js-delete
    $('#clientes').on('click','.js-delete',function(){
        //callback
        let botaoclicado = $(this) //jquery recupere botaoclicado
        //copia o id do cliente escondido no botao excluir para o botao sim
        $('#btnsim').attr('data-id', botaoclicado.attr('data-id'))
        //abre a tela de confirmação da exclusão
        $('#meumodal').modal('show')
    })
    //procura na tela o botao SIM
    //coloca um evento de click no botao sim
    $('#btnsim').on('click',function(){
        //receber a referencia do botao sim
        let botaosim = $(this)
        //recuperar de dentro do botao sim o codigo do cliente
        let idcliente = botaosim.attr('data-id')
        // chamar o backend da aplicação para remover o cliente
        $.ajax({
            url: '/clientes/delete/' + idcliente, //no endereco de deletar
            method: 'GET', //metodo do protocolo http GET
            success: function() {
                window.location.href='/clientes' //em caso de sucesso volte para o inicio
            }
        })
    })
})()
```

- Alterar o código do arquivo index.js para incluir a rota para remover um cliente da variável fakedata
```
app.get('/clientes/delete/:id', function(req,res){
    //código para excluir o cliente no backend
    //procurar pelo cliente no fakedata
    let umcliente = fakedata.find(o => o.id == req.params['id'])
    let posicaocli = fakedata.indexOf(umcliente)
    if(posicaocli > -1){ //testando se eu achei o cliente
        fakedata.splice(posicaocli,1)
    }
    res.redirect('/clientes')
})
```