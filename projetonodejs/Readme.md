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