import Funcionario from "./Funcionario.js";

export default class Recepcionista extends Funcionario {
    private agendamentosC: number;

    constructor(nome: string,matricula: number,salario: number) {
        super(nome, matricula, salario);
        this.agendamentosC = 0;
    }

    getAgendamentosConfirmados(): number {
        return this.agendamentosC;
    }

    agendarAtendimento(): string {
        return "Atendimento agendado";
    }

    confirmarAgendamento(): string {
        this.agendamentosC = this.agendamentosC + 1;

        return "Agendamento confirmado";
    }

    calcularBonus(valorUnitario: number): number {
        return this.agendamentosC * valorUnitario;
    }
}