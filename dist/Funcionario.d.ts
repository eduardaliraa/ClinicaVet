export declare abstract class Funcionario {
    nome: string;
    matricula: number;
    private salario;
    constructor(nome: string, matricula: number, salario: number);
    getSalario(): number;
    setSalario(novoSalario: number): void;
    abstract calcularBonus(): number;
}
export declare class Veterinario extends Funcionario {
    consultasRealizadas: number;
    constructor(nome: string, matricula: number, salario: number, consultasRealizadas: number);
    realizarConsulta(): void;
    calcularBonus(): number;
}
export declare class Recepcionista extends Funcionario {
    agendamentosConfirmados: number;
    constructor(nome: string, matricula: number, salario: number, agendamentosConfirmados: number);
    agendarAtendimento(): void;
    calcularBonus(): number;
}
//# sourceMappingURL=Funcionario.d.ts.map