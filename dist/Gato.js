import Animal from "./Animal";
export default class Gato extends Animal {
    possuiArranhador;
    constructor(nome, idade, tutor, possuiArranhador) {
        super(nome, idade, tutor);
        this.possuiArranhador = possuiArranhador;
    }
    getPossuiArranhador() {
        return this.possuiArranhador;
    }
    setPossuiArranhador(possuiArranhador) {
        this.possuiArranhador = possuiArranhador;
    }
    emitirSom() {
        return "O gato mia: Miau!";
    }
    descreverCuidados() {
        return "O gato precisa de um arranhador";
    }
}
