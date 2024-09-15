// Ana Massielle Coti Rodas - 2477523
// Desarrolle el programa del cálculo de factorial de un número N, 
// pero utilice recursividad para lograr esta tarea.

// Calculo de factorial sin recursividad
function factorialIterativo(n: number): number {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(factorialIterativo(5)); 

// Calculo factorial con recursividad
function factorialRecursivo(n: number): number {
    // Caso base: el factorial de 0 o 1 es 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Llamada recursiva: n * factorial de n-1
    return n * factorialRecursivo(n - 1);
}
console.log(factorialRecursivo(5)); // Resultado: 120
