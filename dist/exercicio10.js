"use strict";
exports.__esModule = true;
exports.calcular = function (num) {
    if (num % 2 == 0) {
        console.log("par");
    }
    else {
        console.log("impar");
    }
};
exports.cubo = function (n1) { return n1 * n1 * n1; };
exports.area = function (largura, comprimento) {
    return largura * comprimento;
};
