import Funcionario from "./Funcionario.js";

export default class Veterinario extends Funcionario {
    private consultasRealizadas: number;

    constructor(nome: string,matricula: number,salario: number) {
        super(nome, matricula, salario);
        this.consultasRealizadas = 0;
    }

    getConsultasRealizadas(): number {
        return this.consultasRealizadas;
    }

    realizarConsulta(): string {
        this.consultasRealizadas = this.consultasRealizadas + 1;

        return "Consulta realizada pelo veterinário";
    }

    prescreverTratamento(tratamento: string): string {
        return "Tratamento prescrito: " + tratamento;
    }

    calcularBonus(valorUnitario: number): number {
        return this.consultasRealizadas * valorUnitario;
    }
}