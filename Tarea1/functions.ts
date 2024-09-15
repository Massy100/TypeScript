// Ana Massielle Coti Rodas - 2477523
// Defina funciones que realicen tareas específicas, proceda a llamarlas 
// con diferentes argumentos

function example_function(): string{
    return "Esta es la funcion de ejemplo"
}
console.log(example_function())

// Funciones de Flecha con Retorno Implícito y Callbacks
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((num) => num * 2).filter((num) => num > 5);
console.log(result); 

// Sobrecarga de Funciones
function combinar(a: string, b: string): string;
function combinar(a: number, b: number): number;
function combinar(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
}
console.log(combinar(1, 2));
console.log(combinar("Hola", " Mundo")); 

// Funciones Anidadas
function calcularSalario(base: number): number {
    function bono(base: number): number {
        return base * 0.1;
    }
    function impuestos(base: number): number {
        return base * 0.2;
    }
    return base + bono(base) - impuestos(base);
}
console.log(calcularSalario(1000)); 

// Funciones como Parámetros
function operarConNumeros(a: number, b: number, operacion: (x: number, y: number) => number): number {
    return operacion(a, b);
}
const suma = (x: number, y: number): number => x + y;
const multiplicacion = (x: number, y: number): number => x * y;
console.log(operarConNumeros(5, 3, suma)); 
console.log(operarConNumeros(5, 3, multiplicacion));

// Invocación de Funciones Recursivas
function factorial(n: number): number {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); 

// Funciones con Parametros Predeterminados y Rest Parameters
function saludar(nombre: string = "Mundo", ...otros: string[]): string {
    return `Hola, ${nombre}` + (otros.length > 0 ? ` y ${otros.join(", ")}` : "");
}
console.log(saludar()); 
console.log(saludar("Massielle", "Carlos", "Maria")); 

// Funciones con Destructuración
function mostrarPersona({ nombre, edad }: { nombre: string; edad: number }): void {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
const persona = { nombre: "Massielle", edad: 25 };
mostrarPersona(persona); 

// Funciones Autoinvocadas 
(function saludar() {
    console.log("Hola desde una función autoinvocada");
})();

// Funciones de Alto Orden: Una función que recibe otra función como argumento o devuelve una función
function crearMultiplicador(factor: number): (x: number) => number {
    return function (x: number): number {
        return x * factor;
    };
}
const multiplicarPor2 = crearMultiplicador(2);
console.log(multiplicarPor2(5)); 

// Curryficación: La curryficación es una técnica en la que una función con 
// múltiples argumentos se transforma en una serie de funciones que toman 
// un solo argumento.
function multiplicador(factor: number): (x: number) => number {
    return function (x: number): number {
        return x * factor;
    };
}
const multiplicar = multiplicador(2);
console.log(multiplicar(5)); 

// Funciones Genéricas
function invertir<T>(items: T[]): T[] {
    return items.reverse();
}
console.log(invertir([1, 2, 3]));
console.log(invertir(["a", "b", "c"])); 






