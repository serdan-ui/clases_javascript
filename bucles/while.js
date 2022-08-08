/*
 Los bucles ejecutan un bloque de código un cierto número de veces. Podemos usar bucles para hacer muchas cosas, como repetir operaciones varias veces e iterar sobre conjuntos de datos, matrices y objetos. Cada vez que sienta la necesidad de copiar un pequeño fragmento de código y colocarlo justo debajo de donde lo copió, probablemente debería usar un bucle en su lugar.

 bucle while

 El primer bucle del que hablaremos es el bucle while. Un bucle while ejecuta un determinado bloque de código siempre que una expresión se evalúe como verdadera. El siguiente fragmento muestra la sintaxis del ciclo while:

 while (condition) {
// code that gets executed as long as the condition is true
}
El ciclo while solo se ejecutará mientras la condición sea verdadera, por lo que si la condición es falsa para empezar, el código interno se omitirá.

ejemplo

let i = 0;
while (i < 10) {
  console.log(i);
i++; }


Podemos tener un bucle while que busque un valor en una matriz, como este:

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
  if (someArray[0] === "Louiza") {
    console.log("Found her!");
    notFound = false;
  } else {
    someArray.shift();
  }
}

¿Por qué cree que && someArray.length > 0 se agrega en la condición while? Si lo dejáramos fuera y el valor que buscábamos no estuviera en la matriz, nos quedaríamos atrapados en un bucle infinito. Es por eso que nos aseguramos de que también terminemos las cosas si nuestro valor no está presente, para que nuestro código pueda continuar.

Pero también podemos hacer cosas más sofisticadas muy fácilmente con bucles. Veamos qué fácil es llenar una matriz con la secuencia de Fibonacci usando un bucle:

En la secuencia de Fibonacci, cada valor es la suma de los dos valores anteriores, comenzando con los valores 0 y 1.

fibonacciArray = [];
while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
nr2 = temp; }

*/