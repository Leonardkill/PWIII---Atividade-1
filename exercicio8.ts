class Piscina {

    constructor (public diametro , public custoConstrucao) {

    }

    raio () {
        return this.diametro / 2
    }

    area () {
        let pi = 3.14
        return pi * (this.raio() * this.raio())
    }

    custoTotal () {

            return this.area() * this.custoConstrucao
    }
}