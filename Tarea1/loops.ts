// Ana Massielle Coti Rodas - 2477523
// Utilice bucles (for, while) para repetir un bloque de código un número 
// determinado de veces o mientras se cumpla una condición

// for se usa cuando se conoce el numero exacto de iteraciones
for (let i = 0; i < 5; i++) {
    console.log(i);  
}

// for of se usa para iterar los valores de una coleccion, es util para acceder a cada elemento
let array = [10, 20, 30];
for (let value of array) {
    console.log(value); 
}

// for in se usa para iterar las propiedades de un objeto, en arrays devuelve los indices
let object: { [key: string]: number } = { a: 1, b: 2, c: 3 };
for (let key in object) {
    console.log(key, object[key]);
}

// while loop se ejecuta siempre y cuando la condicion se cumpla, es util cuando se desconoce el numero de iteraciones
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do while es parecido al while con la diferencia que siempre ejecuta el bloque de codigo al menos una vez
let x = 0;
do {
    console.log(x);  
    x++;
} while (x < 5);

// for each se usa para ejecutar una funcion sobre cada elemento
let arreglo = [10, 20, 30];
arreglo.forEach((value) => {
    console.log(value); 
});