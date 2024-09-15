// Ana Massielle Coti Rodas - 2477523
// Cree un array de números, recorra cada elemento y muestra su valor por consola.
// Luego, calcule la suma de todos los elementos.

let numeros: number[] = [1, 2, 3, 4, 5];
let sumar: number = 0;

for (let i = 0; i < numeros.length; i++) {
    console.log(`Elemento en índice ${i}: ${numeros[i]}`);
    sumar += numeros[i];
}
console.log(`La suma de todos los elementos es: ${sumar}`);

// Arrays multidimensionales
let matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let sumaTotal = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Elemento en [${i}][${j}]: ${matriz[i][j]}`);
        sumaTotal += matriz[i][j];
    }
}
console.log(`La suma total de los elementos de la matriz es: ${sumaTotal}`);

// Tuplas 
let tupla: [string, number];
tupla = ["Alice", 25];  // Correcto
// tupla = [25, "Alice"];  // Incorrecto, ya que el tipo está fuera de orden

// Arrays con tipos complejos
let personas: { nombre: string, edad: number }[] = [
    { nombre: "Alice", edad: 25 },
    { nombre: "Bob", edad: 30 },
    { nombre: "Charlie", edad: 35 }
];
personas.forEach((persona) => {
    console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

let operaciones: ((a: number, b: number) => number)[] = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b
];
let resultado = operaciones[0](10, 5);  // Llama a la primera función (suma)
console.log(`Resultado de la operación: ${resultado}`);

// Metodos avanzados en arrays (map, filter y reduce)
let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar los números pares
let pares = nums.filter((n) => n % 2 === 0);
console.log("Números pares:", pares);

// Elevar al cuadrado cada número del array
let cuadrados = nums.map((n) => n * n);
console.log("Cuadrados:", cuadrados);

// Sumar todos los elementos del array
let sum = nums.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log("Suma total de los elementos:", sum);

// Arrays heterogeneos
let mixto: (number | string)[] = [1, "Hola", 2, "Mundo"];
mixto.forEach((elemento) => {
    console.log(`Elemento: ${elemento}`);
});








