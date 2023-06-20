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