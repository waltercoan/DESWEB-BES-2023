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