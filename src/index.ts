
import Cachorro from "./Cachorro.js";
import Gato from "./Gato.js";
import Ave from "./Ave.js";
import Veterinario from "./Veterinario.js";
import Recepcionista from "./Recepcionista.js";
import Consulta from "./Consulta.js";
import Clinica from "./Clinica.js";

let cachorro = new Cachorro("Rex(Cachorro)", 3, "Carlos", true);
let gato = new Gato("Mimi(Gato)", 2, "Ana", true);
let ave = new Ave("Loro(Ave)", 1, "Pedro", true);
let cachorro2 = new Cachorro("Thor(Cachorro)", 4, "Marcos", true);

let veterinario = new Veterinario("João", 101, 3000);
let recepcionista = new Recepcionista("Maria", 102, 1800);
let recepcionista2 = new Recepcionista("Pedro", 103, 1800);
let clinica = new Clinica("Clínica Dona Marta");

clinica.adicionarAnimal(cachorro);
clinica.adicionarAnimal(gato);
clinica.adicionarAnimal(ave);
clinica.adicionarAnimal(cachorro2);

clinica.adicionarFuncionario(veterinario);
clinica.adicionarFuncionario(recepcionista);
clinica.adicionarFuncionario(recepcionista2);

console.log("ANIMAIS:");
console.log("");
clinica.mostrarAnimais();

/*
console.log(cachorro.emitirSom());
console.log(cachorro.descreverCuidados());


console.log(gato.emitirSom());
console.log(gato.descreverCuidados());


console.log(ave.emitirSom());
console.log(ave.descreverCuidados());
*/

console.log("");
console.log("FUNCIONÁRIOS:");
console.log("");
clinica.mostrarFuncionarios();
console.log("");

let consulta = new Consulta(cachorro, veterinario, new Date());
console.log(consulta.mostrarConsulta());
console.log(veterinario.realizarConsulta());
console.log(veterinario.prescreverTratamento("Vermífugos"));

console.log("");
console.log("RECEPCIONISTA: " + recepcionista2.getNome());
console.log(recepcionista2.agendarAtendimento());
console.log(recepcionista2.confirmarAgendamento());

console.log("");
let consulta2 = new Consulta(gato, veterinario, new Date());
console.log(consulta2.mostrarConsulta());
console.log(veterinario.realizarConsulta());
console.log(veterinario.prescreverTratamento("Vitaminas e suplementos"));

console.log("");
console.log("RECEPCIONISTA: " + recepcionista.getNome());
console.log(recepcionista.agendarAtendimento());
console.log(recepcionista.confirmarAgendamento());

console.log("");
let consulta3 = new Consulta(ave, veterinario, new Date());
console.log(consulta3.mostrarConsulta());
console.log(veterinario.realizarConsulta());
console.log(veterinario.prescreverTratamento("Probióticos"));

console.log("");
console.log("RECEPCIONISTA: " + recepcionista.getNome());
console.log(recepcionista.agendarAtendimento());
console.log(recepcionista.confirmarAgendamento());

console.log("");
let consulta4 = new Consulta(cachorro2, veterinario, new Date());
console.log(consulta4.mostrarConsulta());
console.log(veterinario.realizarConsulta());
console.log(veterinario.prescreverTratamento("Vacinação"));

console.log("");
console.log("RECEPCIONISTA: " + recepcionista2.getNome());
console.log(recepcionista2.agendarAtendimento());
console.log(recepcionista2.confirmarAgendamento());


console.log("");
console.log("Bônus do veterinário: R$ " + veterinario.calcularBonus(50));
console.log("Bônus da recepcionista: R$ " + recepcionista.calcularBonus(10));
console.log("Bônus da recepcionista: R$ " + recepcionista2.calcularBonus(10));

console.log("");
veterinario.alterarSalario(3500);

console.log("Salário do veterinário: R$ " + veterinario.getSalario());
console.log("Salário da recepcionista: R$ " + recepcionista.getSalario());
console.log("Salário da recepcionista: R$ " + recepcionista2.getSalario());