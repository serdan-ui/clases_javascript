// let distance_km = prompt("Ingrese la cantidad de km")
// let distance_metros

// console.log("La distancia de " + distance_km + "km "+ "es igual a " + distance_metros + " metros")

// if( !isNaN(Number(distance_km)) ) {
//    distance_metros = distance_km * 1000
//    console.log(`La distancia de ${distance_km} km es igual a ${distance_metros} metros`) 
// } else {
//   alert('Ingresas un valor que no es un numero')
// }


/*
declaraciones if y if else

Podemos tomar decisiones en nuestro código usando declaraciones if y if else.

si *alguna condición es verdadera*, entonces *ocurrirá cierta acción*, de lo contrario, *ocurrirá otra acción*

Ejemplo

if( condicion ) {
  si es true 
} else {
  si no es true
}


let rain = true;
if(rain){
  console.log("**Taking my umbrella when I need to go outside  **");
} else {
  console.log("** puedo dejar mi paraguas en casa **");
}

Declaracion else if
Una variación de la declaración if es una declaración if con múltiples bloques else if

Ejemplo

let age = 10;
let cost = 0;
let message;
if (age < 3) {
cost = 0;
    message = "El acceso es gratuito para los menores de tres años.";
} else if (age >= 3 && age < 12) {
cost = 5;
    message ="Con el descuento de niño, la tarifa es de 500 peso";
} else if (age >= 12 && age < 65) {
    cost = 10;
    message ="Una entrada regular cuesta 1000 pesos.";
} else {
    cost = 7;
    message ="Un boleto cuesta 800 pesos.";
}
console.log(message);
console.log("Su total seria "+cost);


Tan pronto como se encuentre una expresión verdadera, las demás serán ignoradas.


*/

let age = prompt("ingrese su edad");
let cost = 0;
let message;
if (age < 3) {
cost = 0;
    message = "El acceso es gratuito para los menores de tres años.";
} else if (age >= 3 && age < 12) {
cost = 500;
    message ="Con el descuento de niño, la tarifa es de 500 peso";
} else if (age >= 12 && age < 65) {
    cost = 1000;
    message ="Una entrada regular cuesta 1000 pesos.";
} else {
    cost = 800;
    message ="Un boleto cuesta 800 pesos.";
}
console.log(message);
console.log("Su total seria "+ cost );