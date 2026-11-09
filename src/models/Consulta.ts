import { Animal } from "./Animal";
import { Veterinario } from "./Veterinario";

export class Consulta {

    private animal: Animal;
    private veterinario: Veterinario;
    private data: Date;

    constructor(
        animal: Animal,
        veterinario: Veterinario,
        data: Date
    ) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;

        this.veterinario.realizarConsulta();
    }

    public apresentarConsulta(): string {
        return `
Consulta veterinária
Animal: ${this.animal.apresentar()}
Veterinário: ${this.veterinario.apresentar()}
Data: ${this.data.toLocaleDateString("pt-BR")}
        `;
    }
}