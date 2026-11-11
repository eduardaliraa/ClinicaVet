export class Clinica {
    nome;
    animais = [];
    funcionarios = [];
    constructor(nome) {
        this.nome = nome;
    }
    cadastrarAnimal(animal) {
        this.animais.push(animal);
    }
    contratarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
}
