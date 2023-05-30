// COMENTARIO DE UMA LINHA
/*
COMENTÁRIO DE VÁRIAS LINHAS
*/
//number - inteiro
a = 10
console.log(a + " " + typeof(a))
console.log("Sao iguais " + (a == 10))
console.log("Sao iguais " + (a == "10"))
console.log("Sao iguais " + (a === "10"))
//number - decimal
a = 10.5
console.log(a + " " + typeof(a))
//lógico
a = true
console.log(a + " " + typeof(a))
//String - texto
a = "zezinho"
console.log(a + " " + typeof(a))
//Lista
a = ['zezinho','luizinho','huguinho']
console.log(a + " " + typeof(a))
console.log(a[0])
console.log(a[1])

cont = 0
while(cont < 10){
    console.log(cont)
    cont = cont + 1
}
cont = 0
do{
    console.log(cont)
    cont++
}while(cont < 10)

bemdoido = 0
/*Operador de incremento préfixado */
console.log(++bemdoido)
/*Operador de incremento POSfixado */
console.log(bemdoido++)
console.log(bemdoido)

/*for i in range(10): - python */
for(i=0;i<10;i++){
    console.log("i: "+ i)
}