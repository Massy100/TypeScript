// Ana Massielle Coti Rodas - 2477523
// Realice operaciones aritméticas básicas (suma, resta, multiplicación, 
// división, módulo) con números

let first_number: number = 10;
let second_number: number = 0;

function adittion(first_number: number, second_number: number): number {
    let result = first_number + second_number;
    return result
}

function subtraction(first_number: number, second_number: number): number {
    let result = first_number - second_number;
    return result
}

function multiplication(first_number: number, second_number: number): number {
    let result = first_number * second_number;
    return result;
}

function division(first_number: number, second_number: number): number {
    if (second_number == 0){
        console.log("La division por 0 no se puede operar");
        return 0;
    }
    let result = first_number / second_number;
    return result;
}

function module(first_number: number, second_number: number): number {
    if (second_number == 0){
        console.log("La division por 0 no se puede operar");
        return 0;
    }
    let result = first_number % second_number;
    return result;
}

console.log("Este es el resultado de la suma: ");
let result_adittion = adittion(first_number, second_number);
console.log(result_adittion);

console.log("Este es el resultado de la resta: ");
let result_subtraction = subtraction(first_number, second_number);
console.log(result_subtraction);

console.log("Este es el resultado de la multiplicacion: ");
let result_multiplication = multiplication(first_number, second_number);
console.log(result_multiplication);

console.log("Este es el resultado de la division: ");
let result_division = division(first_number, second_number);
console.log(result_division);

console.log("Este es el resultado del modulo de la division: ")
let result_module = module(first_number, second_number);
console.log(result_module);
