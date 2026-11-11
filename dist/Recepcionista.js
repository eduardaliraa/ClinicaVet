import Funcionario from "./Funcionario";
export default class Recepcionista extends Funcionario {
    agendamentosC;
    constructor(nome, matricula, salario) {
        super(nome, matricula, salario);
        this.agendamentosC = 0;
    }
    getAgendamentosConfirmados() {
        return this.agendamentosC;
    }
    agendarAtendimento() {
        return "Atendimento agendado";
    }
    confirmarAgendamento() {
        this.agendamentosC = this.agendamentosC + 1;
        return "Agendamento confirmado";
    }
    calcularBonus(valorUnitario) {
        return this.agendamentosC * valorUnitario;
    }
}
