import { Animal } from "./Animal";
import { Funcionario } from "./Funcionario";

export class Clinica {

    private nome: string;
    private animais: Animal[] = [];
    private funcionarios: Funcionario[] = [];

    constructor(nome: string) {
        this.nome = nome;
    }

    public cadastrarAnimal(animal: Animal): void {
        this.animais.push(animal);
        console.log("Animal cadastrado com sucesso!");
    }

    public contratarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
        console.log("Funcionário cadastrado com sucesso!");
    }

    public listarAnimais(): void {
        console.log(`\nAnimais da clínica ${this.nome}:`);

        this.animais.forEach(animal => {
            console.log(animal.apresentar());
        });
    }

    public listarFuncionarios(): void {
        console.log(`\nFuncionários da clínica ${this.nome}:`);

        this.funcionarios.forEach(funcionario => {
            console.log(funcionario.apresentar());
        });
    }

    public listarCuidados(): void {
        console.log("\nCuidados dos animais:");

        this.animais.forEach(animal => {
            console.log(animal.descreverCuidados());
        });
    }

    public listarSons(): void {
        console.log("\nSons dos animais:");

        this.animais.forEach(animal => {
            console.log(animal.emitirSom());
        });
    }
}