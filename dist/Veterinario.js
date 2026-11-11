import Funcionario from "./Funcionario";
export default class Veterinario extends Funcionario {
    consultasRealizadas;
    constructor(nome, matricula, salario) {
        super(nome, matricula, salario);
        this.consultasRealizadas = 0;
    }
    getConsultasRealizadas() {
        return this.consultasRealizadas;
    }
    realizarConsulta() {
        this.consultasRealizadas = this.consultasRealizadas + 1;
        return "Consulta realizada pelo veterinário";
    }
    prescreverTratamento(tratamento) {
        return "Tratamento prescrito: " + tratamento;
    }
    calcularBonus(valorUnitario) {
        return this.consultasRealizadas * valorUnitario;
    }
}
