import Animal from "./Animal.js";
import Funcionario from "./Funcionario.js";

export default class Clinica {
    private nome: string;
    private listaAnimais: Animal[];
    private listaFuncionarios: Funcionario[];

    constructor(nome: string) {
        this.nome = nome;
        this.listaAnimais = [];
        this.listaFuncionarios = [];
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    adicionarAnimal(animal: Animal): void {
        this.listaAnimais[this.listaAnimais.length] = animal;
    }

    adicionarFuncionario(funcionario: Funcionario): void {
        this.listaFuncionarios[this.listaFuncionarios.length] = funcionario;
    }

    getListaAnimais(): Animal[] {
        return this.listaAnimais;
    }

    getListaFuncionarios(): Funcionario[] {
        return this.listaFuncionarios;
    }

    mostrarAnimais(): void {
        for (let i = 0; i < this.listaAnimais.length; i++) {
            console.log(this.listaAnimais[i].getNome());
        }
    }

    mostrarFuncionarios(): void {
        for (let i = 0; i < this.listaFuncionarios.length; i++) {
            console.log(this.listaFuncionarios[i].getNome());
        }
    }
}