/*
Operadores ternarios condicionales

El operador ternario tiene su nombre; tiene tres operandos.

operand1 ? operand2 : operand3;

expresión ? declaración de verdadero: declaración asociada con falso;

Ejemplo
  let access = age < 18 ? "denegada" : "permitida";

  Este pequeño fragmento de código asignará un valor para acceder. Si la edad es menor de 18 años, entonces asignará el valor denegado, caso contrario asignará el valor permitido.
*/
let edad = prompt("Ingrese su edad")
let access = edad < 18 ? "denegada" : "permitida";
console.log(`El acceso es ${access}`)