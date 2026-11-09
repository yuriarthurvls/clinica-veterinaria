export abstract class Animal {

    protected nome: string;
    protected idade: number;
    protected tutor: string;

    constructor(nome: string, idade: number, tutor: string) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
    }

    abstract emitirSom(): string;

    abstract descreverCuidados(): string;

    public apresentar(): string {
        return `Nome: ${this.nome} | Idade: ${this.idade} anos | Tutor: ${this.tutor}`;
    }
}