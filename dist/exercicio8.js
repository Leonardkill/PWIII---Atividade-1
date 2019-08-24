var Piscina = /** @class */ (function () {
    function Piscina(diametro, custoConstrucao) {
        this.diametro = diametro;
        this.custoConstrucao = custoConstrucao;
    }
    Piscina.prototype.raio = function () {
        return this.diametro / 2;
    };
    Piscina.prototype.area = function () {
        var pi = 3.14;
        return pi * (this.raio() * this.raio());
    };
    Piscina.prototype.custoTotal = function () {
        return this.area() * this.custoConstrucao;
    };
    return Piscina;
}());
