//var variavel hoisting (elevação/içamento)
void function(){
     console.log(mensagem)
}();
var mensagem = "EU NAO ACREDITO"


//let - declaração de variaveis
//em escopo de bloco
var exibir = function(){
    if(true){
        var escopoFuncao = "caelum"
        let escopoBloco = "alura"
        console.log(escopoBloco)
    }
    console.log(escopoFuncao)
}
exibir()

//const - declara uma constante
void function(){
    const mensagem = "univille"
    console.log(mensagem)
    //mensagem = "linda"
}();


var estado = "sc"

switch (estado){
    case "sc":
        console.log("Santa Catarina")
        break
    case "pr":
        console.log("Paraná")
        break
    default: 
        console.log("nao sei...")
}