/*
 tipos de datos valores primitivos

 Boleanos : 
 El tipo de datos booleano puede contener dos valores: true y false . No hay nada en el medio. Este booleano se usa mucho en el código, especialmente en expresiones que se evalúan como un booleano:
    let bool1 = false;
    let bool2 = true;

    Se utiliza para situaciones en las que desea almacenar un valor verdadero o falso (que puede indicar encendido/apagado o sí/no). Por ejemplo, si se elimina un elemento:

    let objectIsDeleted = false;

 Numbers 
        let intNr = 1; entero
        let decNr = 1.5; decimales
        let expNr = 1.4e15; exponenciales

 Strings 

 'abc', "abc", `String with interpolated values: ${256} and ${true}`
 

Undefined : Un tipo de dato especial para una variable a la que no se le ha asignado un valor:

let terribleThingToDo = undefined; ( hacer la asginacion de forma manual es mala pracitca )

null : es un valor especial para decir que una variable esta vacia o tiene un valor desconocido.Es sensible a mayusculas y minusculas. Debe ser minisculas:
  let empty = null;
  

Operadores:Estos son útiles cuando queremos trabajar con las variables, modificarlas, realizar cálculos sobre ellas y compararlas. Se llaman operadores porque los usamos para operar en nuestras variables.

    operadaores para booleanos => && (and) y || (or)

    Operadores aritméticos:Los operadores aritméticos se pueden utilizar para realizar operaciones con números.

        adicion : +

        substraccion : -

        multiplicacion : *

        division: /

        exponenciación : **
            let nr1 = 2;
            let nr2 = 3;
            let result1 = nr1 ** nr2;

        Modulo:  El módulo es la operación en la que determinas cuánto queda después de dividir un número por otro número en su totalidad,El resultado será el resto, o lo que sobra usamos % 
            let nr1 = 10;
            let nr2 = 3;
            let result1 = nr1 % nr2;

        Operadores unarios incremento y decremento :  Estos son los operadores de incremento y decremento. ej
            incremento
                let nr1 = 4;
                nr1++  es lo mismo que poner nr1 + 1
            decremento
                let nr2 = 4;
                nr2-- es lo mismo que poner nr1 - 1


    operadores de comparacion 
        Igual ( === )
            let x = 5;
            let y = "5";
            console.log(x == y);

        No Igual o distinto ( !== )
            let x = 5;
            let y = "5";
            console.log(x !== y);

        Mayor y menor que ( > < ) devuelven valores boolenos 
            let x = 5;
            let y = "5";
            console.log(x < y); x menor que y

            let x = 5;
            let y = "5";
            console.log(x > y); x mayor que y

        Operador logico: Siempre que desee verificar dos condiciones en una, o necesite negar una condición, los operadores lógicos son útiles

           And:Si desea verificar si x es mayor que y e y es mayor que z, debe poder combinar dos expresiones. Esto se puede hacer con el operador &&. Solo devolverá verdadero si ambas expresiones son verdaderas:

            let x = 1;
            let y = 2;
            let z = 3;

            console.log(x < y && y < z);


            Or : Si desea obtener verdadero si alguna de las expresiones es verdadera, use or. El operador para esto es ||. Este se utiliza para ver si alguno de estos dos es verdadero, en cuyo caso la expresión completa se evalúa como verdadera.
                console.log(x > y || y < z);


            Not :En algunos casos, tendrá que negar un valor booleano. Esto hará que tenga el valor opuesto.Se usa el !
                 let x = false;
                 console.log(!x);



            typeOf operador para ver el tipo de dato de la varible ==> variableTypeTest1 = typeof testVariable;

            operadores de asignacion : el igula  = , es un operador de asignacion pero hay otros, Cada operador aritmetico tiene un operador de asignacion correspondiente para escribir codigo mas corto : Ej let x += 5 es lo mismo que let x = x + 5

 */

/*let distance_km = prompt("Ingrese la cantidad de km")
let distance_metros = distance_km * 1000

// console.log("La distancia de " + distance_km + "km "+ "es igual a " + distance_metros + " metros")
console.log(`La distancia de ${distance_km} km es igual a ${distance_metros} metros`) 
*/

// let nombre = prompt("Ingrese su nomnbre")
// let edad = prompt("Ingrese su edad")
// console.log(`La edad de ${nombre} es de ${edad}`)

/*
    Tarea

    Cree una variable que contenga un valor en metros, conviértalo en kilómetros y registre el valor en kilómetros en el siguiente formato:

        "The distance of 130 kms is equal to 209.2142 metros"


   calculadora de IMC
    Establezca valores para la altura en cm y el peso en gramos, luego convierta los valores a centímetros y kilos, enviando los resultados a la consola:
        1 cm es igual a 0.01 m
        1 kilo es igual a 1000 gramos

        Salida de los resultados. Luego, calcula y registra el IMC: esto es igual al peso (en kilos) dividido por la altura al cuadrado (en metros). Envíe los resultados a la consola.
*/
// let altura = prompt("Ingrese la altura cm")
// let peso = prompt("Ingrese el peso gramos")

// let imc = peso /  ( altura ** 2 )   


// console.log(`El indice de IMC es de ${imc}`)





/*
let myDistanceMiles = 130;
let myDistanceKM = myDistanceMiles * 1.60934;
console.log("The distance of " + myDistanceMiles + " miles is equal to
" + myDistanceKM + " kilometers");
*/
