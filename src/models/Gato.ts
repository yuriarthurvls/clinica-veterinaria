import { Animal } from "./Animal";

export class Gato extends Animal {

    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }

    public emitirSom(): string {
        return "O gato mia: Miau!";
    }

    public descreverCuidados(): string {
        return "O gato precisa de um arranhador.";
    }
}