import Animal from "./Animal.js";

export default class Ave extends Animal {
    private possuiGaiola: boolean;

    constructor(nome: string,idade: number,tutor: string,possuiGaiola: boolean) {
        super(nome, idade, tutor);
        this.possuiGaiola = possuiGaiola;
    }

    getPossuiGaiola(): boolean {
        return this.possuiGaiola;
    }

    setPossuiGaiola(possuiGaiola: boolean): void {
        this.possuiGaiola = possuiGaiola;
    }

    emitirSom(): string {
        return "A ave canta";
    }

    descreverCuidados(): string {
        return "A ave precisa de uma gaiola adequada";
    }
}