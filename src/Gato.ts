import Animal from "./Animal.js";

export default class Gato extends Animal {
    private possuiArranhador: boolean;

    constructor(nome: string,idade: number,tutor: string,possuiArranhador: boolean) {
        super(nome, idade, tutor);
        this.possuiArranhador = possuiArranhador;
    }

    getPossuiArranhador(): boolean {
        return this.possuiArranhador;
    }

    setPossuiArranhador(possuiArranhador: boolean): void {
        this.possuiArranhador = possuiArranhador;
    }

    emitirSom(): string {
        return "O gato mia: Miau!";
    }

    descreverCuidados(): string {
        return "O gato precisa de um arranhador";
    }
}