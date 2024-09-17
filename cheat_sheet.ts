// Imprimir en consola
console.log("Este es un mensaje enviado desde TypeScript");

// Variables
let myString: string = "Esta es una cadena";
let myInt: number = 1;
let myFloat: number = 2.5;
let myInt2 = 4; // No es necesario establecer el tipo, pero sí es importante recordar que el tipo se mantiene una vez se ha declarado
let myBool: boolean = true;

// Constantes
const API_URI = "https://pokeapi.co/api/v2/";

// Estructuras selectivas
if (myInt > 0) {
    console.log("El número es positivo");
}
else if (myInt == 0) {
    console.log("El número es neutro");
}
else {
    console.log("El número es negativo");
}

if (myString.length != 0 && myBool == true)
    console.log("AND es && y OR es ||");

// Estructuras repetitivas
for (let i = 0; i < 5; i++) {
    console.log(i);
}

while(myInt <= 5) {
    console.log(myInt);
    myInt++;
}

// Funciones
function myFunction(): void {
    console.log("Esta es una función vacía sin parámetros");
}

function myFunction2(): string {
    return "Esta es una función que devuelve un string";
}

function myFunction3(nombre: string) {
    console.log("Hola " + nombre + ", esta es una función que tiene 1 parámetro");
}

myFunction(); // Se llama a la función invocando su nombre
console.log(myFunction2());
myFunction3("Miguel");

// Arreglos
let myArray: Array<string> = ["Manzana", "Pera", "Uva"];
let myArray2: string[] = ["Toyota", "Mazda", "Honda"];
console.log(myArray);

for (const value of myArray) {
    console.log(value);
}

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Clase
class Persona {
    private edad: number;
    private nombre: string;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getNombre() {
        return this.nombre;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getEdad(): number {
        return this.edad;
    }
}

let estudiante: Persona = new Persona("Fulanito", 22);
console.log(estudiante);
estudiante.setEdad(23);
console.log(estudiante.getNombre() + " tiene " + estudiante.getEdad() + " años");
