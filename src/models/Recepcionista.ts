import { Funcionario } from "./Funcionario";

export class Recepcionista extends Funcionario {

    private agendamentosConfirmados: number = 0;

    constructor(nome: string, matricula: number, salario: number) {
        super(nome, matricula, salario);
    }

    public agendarAtendimento(): void {
        console.log("Atendimento agendado!");
    }

    public confirmarAgendamento(): void {
        this.agendamentosConfirmados++;
        console.log("Agendamento confirmado!");
    }

    public calcularBonus(): number {
        return this.agendamentosConfirmados * 10;
    }
}