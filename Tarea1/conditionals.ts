// Ana Massielle Coti Rodas - 2477523
// Utilice condicionales (if, else if, else) para tomar decisiones 
// basadas en diferentes condiciones.

let id: number = 100;
let nombre: string = "Massielle";
let estado: boolean = false;

if(nombre.length != 0 && estado != false){
    console.log("Esta condicional ocurre si la longitud de la cadena es diferente a 0 y el estado es verdadero");
} else if (5 < id && id < 50){
    console.log("Esta condicional ocurre si el id es mayor a 5 o si id es menor que 50");
} else {
    console.log("Esta condicional ocurre si ninguna de las anteriores se cumple");
}

// Strict equality (===) y Loose equality (==)
// ===: Compara tanto el valor como el tipo de los operandos.
// ==: Compara solo los valores y realiza una conversión implícita de tipos si es necesario.

// operador ternario en Typescript
// condición ? expresión_si_verdadero : expresión_si_falso;
let edad: number = 9;
let resultado = (edad >= 18) ? "Mayor de edad" : (edad >= 13) ? "Adolescente" : "Niño";
console.log(resultado);

// case-swith
let fruta: string = "manzana";

switch (fruta) {
    case "manzana":
        console.log("Es una manzana");
        break;
    case "banana":
        console.log("Es una banana");
        break;
    default:
        console.log("Fruta no reconocida");
        break;
}


