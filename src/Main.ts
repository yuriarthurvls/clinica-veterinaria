import { Cachorro } from "./models/Cachorro";
import { Gato } from "./models/Gato";
import { Ave } from "./models/Ave";
import { Veterinario } from "./models/Veterinario";
import { Recepcionista } from "./models/Recepcionista";
import { Consulta } from "./models/Consulta";
import { Clinica } from "./models/Clinica";

// Criando a clínica
const clinica = new Clinica("Clínica Veterinária Dona Marta");

// Criando os animais
const cachorro = new Cachorro("Rex", 3, "Carlos");
const gato = new Gato("Mimi", 2, "Ana");
const ave = new Ave("Loro", 1, "Pedro");

// Criando os funcionários
const veterinario = new Veterinario("Dr. João", 101, 4000);
const recepcionista = new Recepcionista("Maria", 102, 2000);

// Cadastrando os animais
clinica.cadastrarAnimal(cachorro);
clinica.cadastrarAnimal(gato);
clinica.cadastrarAnimal(ave);

// Cadastrando os funcionários
clinica.contratarFuncionario(veterinario);
clinica.contratarFuncionario(recepcionista);

// Listando informações
clinica.listarAnimais();
clinica.listarFuncionarios();

// Demonstrando polimorfismo
clinica.listarSons();
clinica.listarCuidados();

// Criando uma consulta
const consulta = new Consulta(cachorro, veterinario, new Date());

console.log(consulta.apresentarConsulta());

// Prescrevendo tratamento
console.log(
    veterinario.prescreverTratamento(
        cachorro,
        "Vacinação e avaliação de rotina"
    )
);

// Confirmando agendamentos
recepcionista.agendarAtendimento();
recepcionista.confirmarAgendamento();
recepcionista.confirmarAgendamento();

// Exibindo bônus
console.log("\nBônus dos funcionários:");

console.log(
    `Veterinário: R$ ${veterinario.calcularBonus().toFixed(2)}`
);

console.log(
    `Recepcionista: R$ ${recepcionista.calcularBonus().toFixed(2)}`
);

// Alterando salário
veterinario.alterarSalario(4500);

console.log("\nSalário atualizado:");
console.log(veterinario.apresentar());