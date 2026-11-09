import { Animal } from "./Animal";

export class Ave extends Animal {

    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }

    public emitirSom(): string {
        return "A ave canta: Piu piu!";
    }

    public descreverCuidados(): string {
        return "A ave precisa de uma gaiola adequada.";
    }
}