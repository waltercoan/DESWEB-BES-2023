from flask import Flask, request

app = Flask(__name__)

@app.route("/",methods=['POST'])
def index():
    #dados = request.args
    login = request.form.get('login')
    senha = request.form.get('senha')
    datanascimento = request.form.get('datanascimento')
    coquinha = request.form.get('coquinha')
    chocolate = request.form.get('chocolate')
    sexo = request.form.get('sexo')
    cores = request.form.get('cores')
    endereco = request.form.get('endereco')
    return f"<p>Login: {login} </p> \
    <p>Senha: {senha}</p> \
    <p>Data: {datanascimento}</p> \
    <p>Coquinha: {coquinha}</p> \
    <p>Chocolate: {chocolate}</p>  \
    <p>Sexo: {sexo}</p> \
    <p>Cores: {cores}</p> <p>Endereco: {endereco}</p>"

@app.route("/formulario")
def formulario():
    return '''
        <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="http://localhost:5000/" method="POST">
            <fieldset>
                <label for="txtlogin">Login</label>
                <input required type="text" id="txtlogin" name="login" placeholder="Digite seu nome">
            </fieldset>
            <fieldset>
                <label for="txtsenha">Senha</label>
                <input required type="password" id="txtsenha" name="senha">
            </fieldset>
            <fieldset>
                <input type="email" name="email">
            </fieldset>
            <fieldset>
                <label>Data de Nascimento</label>
                <input type="date" name="datanascimento">
            </fieldset>
            <fieldset>
                <input type="checkbox" name="coquinha">Coca-Cola
                <input type="checkbox" name="chocolate">Chocolate
            </fieldset>
            <fieldset>
                <input type="radio" name="sexo" value="masc">Masculino
                <input type="radio" name="sexo" value="fem">Feminino
            </fieldset>

            <fieldset>
                <input type="text" value="nao altera" readonly="readonly" disabled>
            </fieldset>

            <fieldset>
                <select name="cores">
                   <option value="1">Verde</option>
                   <option value="2">Vermelho</option>
                   <option value="3">Azul</option>
                </select>
            </fieldset>

            <fieldset>
                <textarea name="endereco"
                 rows="10" cols="30"></textarea> 
            </fieldset>

            <input type="submit">
            <!--<button type="submit">Enviar</button>-->
        </form>
    </body>
</html>
    '''
