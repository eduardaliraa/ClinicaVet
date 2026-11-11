import Animal from "./Animal.js";
import Veterinario from "./Veterinario.js";

export default class Consulta {
    private animal: Animal;
    private veterinario: Veterinario;
    private data: Date;

    constructor(animal: Animal,veterinario: Veterinario,data: Date) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
    }

    getAnimal(): Animal {
        return this.animal;
    }

    getVeterinario(): Veterinario {
        return this.veterinario;
    }

    getData(): Date {
        return this.data;
    }

    mostrarConsulta(): string {
        return "Consulta do animal " + this.animal.getNome() + " com o veterinário " +  this.veterinario.getNome() + " na data " + this.data.toLocaleDateString();
    }
}