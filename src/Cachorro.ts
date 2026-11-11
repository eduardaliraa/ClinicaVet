import Animal from "./Animal.js";

export default class Cachorro extends Animal {
    private passeioDiario: boolean;

    constructor(nome: string,idade: number,tutor: string,passeioDiario: boolean) {
        super(nome, idade, tutor);
        this.passeioDiario = passeioDiario;
    }

    getPasseioDiario(): boolean {
        return this.passeioDiario;
    }

    setPasseioDiario(passeioDiario: boolean): void {
        this.passeioDiario = passeioDiario;
    }

    emitirSom(): string {
        return "O cachorro late: Au au!";
    }

    descreverCuidados(): string {
        return "O cachorro precisa de passeio diário";
    }
}