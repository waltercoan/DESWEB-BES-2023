let refCampo = document.getElementById("display")

function codBotao(numero){
    refCampo.value += numero
}

function calcresultado(){
    refCampo.value = eval(refCampo.value)
}
function limpa(){
    refCampo.value = ' '
}