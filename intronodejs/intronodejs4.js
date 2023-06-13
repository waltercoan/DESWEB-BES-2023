function soma(a, b, func_callback){
    console.log("INICIO")
    setTimeout(function(){
        console.log("RETORNANDO SOMA")
        //return a + b
        func_callback(a + b)
    }, 1000)
    console.log("FIM")
    //return undefined (implicito)
}
console.log("CHAMANDO FUNCAO")
/*const resultado = soma(2,2)
console.log(resultado)*/

soma(2,2, function(resultado){
    console.log(resultado)
    soma(resultado, 10, function(outroresult){
        console.log(outroresult)
        soma(outroresult, 20, function(r){
            console.log(r)
        })
    })
})
