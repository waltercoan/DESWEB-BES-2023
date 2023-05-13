from flask import Flask, request

app = Flask(__name__)

@app.route("/",methods=['POST'])
def index():
    #dados = request.args
    login = request.form.get('login')
    senha = request.form.get('senha')
    return f"<p>Login: {login} </p> \
    <p>Senha: {senha}</p>"

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
                <input type="text" id="txtlogin" name="login" placeholder="Digite seu nome">
            </fieldset>
            <fieldset>
                <label for="txtsenha">Senha</label>
                <input type="password" id="txtsenha" name="senha">
            </fieldset>
            <input type="submit">
            <!--<button type="submit">Enviar</button>-->
        </form>
    </body>
</html>
    '''