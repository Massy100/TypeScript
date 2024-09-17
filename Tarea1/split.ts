// Ana Massielle Coti Rodas - 2477523
//  Desarrolle un programa que muestre un ejemplo de split.

// Split basico 
let cadena = "Hola, como estas?";
// Dividir usando el espacio como separador
let partes = cadena.split(" ");
console.log(partes); 
// Dividir usando la coma como separador
let partesComa = cadena.split(",");
console.log(partesComa); 
// Mostrar cada parte dividida
console.log(partes[0]);
console.log(partes[1]);
console.log(partes[2]);

// Dividir por posicion
let abecedario = "abcdefghijk";
// Dividir en partes en la posición 3
let parte1 = abecedario.substring(0, 3); // "abc"
let parte2 = abecedario.substring(3);    // "defghijk"
console.log(parte1); 
console.log(parte2); 

// Dividir por medio de expresion regular
let letters = "HolaMundoDeTypeScript";
let resultado = letters.split(/(?=[A-Z])/); // Expresión regular para letras mayúsculas
console.log(resultado); 

// Dividir en base a posicion 
let cad = "abcdefg";
// Dividir por cada carácter
let caracteres = cad.split("");
console.log(caracteres); 

// Dividir la cadena en segmentos de longitud fija
let letras = "abcdefghijkl";
let longitudSegmento = 3;
let pieces: string[] = [];
for (let i = 0; i < letras.length; i += longitudSegmento) {
    pieces.push(letras.substring(i, i + longitudSegmento));
}
console.log(pieces);




