export class Funcionario {
    nome;
    matricula;
    salario;
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(novoSalario) {
        if (novoSalario > 0) {
            this.salario = novoSalario;
        }
        else {
            throw new Error("Salário inválido!");
        }
    }
}
export class Veterinario extends Funcionario {
    consultasRealizadas;
    constructor(nome, matricula, salario, consultasRealizadas) {
        super(nome, matricula, salario);
        this.consultasRealizadas = consultasRealizadas;
    }
    realizarConsulta() {
        this.consultasRealizadas++;
    }
    calcularBonus() {
        return this.consultasRealizadas * 50;
    }
}
export class Recepcionista extends Funcionario {
    agendamentosConfirmados;
    constructor(nome, matricula, salario, agendamentosConfirmados) {
        super(nome, matricula, salario);
        this.agendamentosConfirmados = agendamentosConfirmados;
    }
    agendarAtendimento() {
        this.agendamentosConfirmados++;
    }
    calcularBonus() {
        return this.agendamentosConfirmados * 10;
    }
}
