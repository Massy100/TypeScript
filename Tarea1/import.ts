// Ana Massielle Coti Rodas - 2477523
// Importe la clase del ejercicio 8 y modifique sus atributos a su gusto, 
// realice esto mediante setters y getters.

import { Persona } from './persona';

let persona1 = new Persona('Juan', 30, 'Xela');

console.log("Atributos antes de acceder a setters y getters: ")
console.log(`Nombre: ${persona1.getNombre()}`);
console.log(`Edad: ${persona1.getEdad()}`);
console.log(`Ciudad: ${persona1.getCiudad()}`);

persona1.setNombre('Carlos');
persona1.setEdad(35);
persona1.setCiudad('Antigua');

console.log("Atributos despues de acceder a setters y getters: ")
console.log(`Nombre: ${persona1.getNombre()}`);
console.log(`Edad: ${persona1.getEdad()}`);
console.log(`Ciudad: ${persona1.getCiudad()}`);
