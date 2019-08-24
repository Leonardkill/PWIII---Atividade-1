var numero = 100;
var resto = numero % 2;
var calcular = function (numero) {
    if (resto == 0) {
        console.log("par");
    }
    else {
        console.log("impar");
    }
};
console.log("O número é " + calcular(numero));
