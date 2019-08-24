let numero = 100;
let resto = numero % 2;

let calcular = function (numero ){
if(resto == 0){
    console.log("par")
}
else{
    console.log("impar")
}
}
console.log("O número é " + calcular(numero))