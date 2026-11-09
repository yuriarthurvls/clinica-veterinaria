export abstract class Funcionario {

    protected nome: string;
    protected matricula: number;
    private salario: number;

    constructor(nome: string, matricula: number, salario: number) {
        this.nome = nome;
        this.matricula = matricula;

        if (salario <= 0) {
            throw new Error("O salário deve ser maior que zero.");
        }

        this.salario = salario;
    }

    public getSalario(): number {
        return this.salario;
    }

    public alterarSalario(novoSalario: number): void {
        if (novoSalario <= 0) {
            throw new Error("O novo salário deve ser maior que zero.");
        }

        this.salario = novoSalario;
    }

    abstract calcularBonus(): number;

    public apresentar(): string {
        return `Nome: ${this.nome} | Matrícula: ${this.matricula} | Salário: R$ ${this.salario.toFixed(2)}`;
    }
}