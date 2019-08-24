export class Piscina {

    constructor (public diametro , public custoConstrucao) {

    }

    raio () {
        return this.diametro / 2
    }

    area () {
        return 3.141592 * (this.raio() * this.raio())
         
    }

    custoTotal () {

            return this.area() * this.custoConstrucao
    }
}