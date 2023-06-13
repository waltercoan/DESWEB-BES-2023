function soma(a,b){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(a + b)
        }, 1000)
    })
    
}
/*
soma(2,2).then(function(result){
    console.log(result)
})
*/
(async function(){
    const resultado = await soma(2,2)
    console.log(resultado)
    const outroresultado = await soma(resultado,20)
    console.log(outroresultado)
})();
