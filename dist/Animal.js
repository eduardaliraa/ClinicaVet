export class Animal {
    nome;
    idade;
    tutor;
    constructor(nome, idade, tutor) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
    }
}
export class Cachorro extends Animal {
    emitirSom() {
        return "Au au!";
    }
    descreverCuidados() {
        return "Precisa de passeio diário.";
    }
}
export class Gato extends Animal {
    emitirSom() {
        return "Miau!";
    }
    descreverCuidados() {
        return "Precisa de arranhador.";
    }
}
export class Ave extends Animal {
    emitirSom() {
        return "Piu piu!";
    }
    descreverCuidados() {
        return "Precisa de espaço adequado para voar.";
    }
}
