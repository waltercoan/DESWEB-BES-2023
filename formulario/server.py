from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def index():
    dados = request.args
    return f"<p>Nome: {dados['nome']} </p> \
    <p>Endereço: {dados['endereco']}</p>"