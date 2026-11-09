import { Funcionario } from "./Funcionario";
import { Animal } from "./Animal";

export class Veterinario extends Funcionario {

    private consultasRealizadas: number = 0;

    constructor(nome: string, matricula: number, salario: number) {
        super(nome, matricula, salario);
    }

    public realizarConsulta(): void {
        this.consultasRealizadas++;
        console.log("Consulta realizada com sucesso!");
    }

    public prescreverTratamento(animal: Animal, tratamento: string): string {
        return `Tratamento prescrito para ${animal.apresentar()}: ${tratamento}`;
    }

    public calcularBonus(): number {
        return this.consultasRealizadas * 50;
    }
}