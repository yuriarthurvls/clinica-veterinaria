import { Animal } from "./Animal";

export class Cachorro extends Animal {

    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }

    public emitirSom(): string {
        return "O cachorro late: Au au!";
    }

    public descreverCuidados(): string {
        return "O cachorro precisa de passeio diário.";
    }
}