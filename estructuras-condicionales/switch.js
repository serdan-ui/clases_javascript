let activity = "dasda"

// if(activity === "Levantarse") {
//   console.log("son las 6:30 a.m.");
// } else if(activity === "Desayuno") {
//   console.log("son las 7:00 a.m.");
// } else if(activity === "Conducir al trabajo") {
//   console.log("son las 8:00 a.m.");
// } else if(activity === "Almuerzo") {
//   console.log("son las 12:00PM");
// } else if(activity === "Conducir a casa") {
//   console.log("son las 5:00 p. m.")
// } else if(activity === "Cena") {
//   console.log("son las 18:30");
// }



switch(activity) {
  case "Levantarse":
    console.log("son las 6:30 a.m.");
    break;
  case "Desayuno":
    console.log("son las 7:00 a.m.");
    break;
  case "Conducir al trabajo":
    console.log("son las 8:00 a.m.");
    break;
  case "Almuerzo":
    console.log("son las 12:00PM");
    break;
  case "Conducir a casa":
    console.log("son las 5:00 p. m.");
    break;
  case "Cena":
    console.log("son las 18:30");
  break; 
  default:
    console.log("no se que hora es");
    // codigo a ejecutar cuando ningún caso coincide
  break; 
}

/*
declaraciones switch

Las declaraciones if else son excelentes para evaluar condiciones booleanas. Hay muchas cosas que puede hacer con ellos, pero en algunos casos, es mejor reemplazarlos con una declaración de switch. Este es especialmente el caso cuando se evalúan más de cuatro o cinco valores.

Sintaxis de switch 

switch(expression) {
  case value1:
    // codigo a ejecutar
    break;
  case value2:
    // codigo a ejecutar
    break;
  case value-n:
    // codigo a ejecutar
break; }

Puede leerlo mentalmente de la siguiente manera: si la expresión es igual a valor1, haga el código especificado para ese caso. Si la expresión es igual a valor2, haga el código especificado para ese caso, y así sucesivamente.




ejemplo con if

if(activity === "Levantarse") {
  console.log("son las 6:30 a.m.");
} else if(activity === "Desayuno") {
  console.log("son las 7:00 a.m.");
} else if(activity === "Conducir al trabajo") {
  console.log("son las 8:00 a.m.");
} else if(activity === "Almuerzo") {
  console.log("son las 12:00PM");
} else if(activity === "Conducir a casa") {
  console.log("son las 5:00 p. m.")
} else if(activity === "Cena") {
  console.log("son las 18:30");
}

ejemplo con switch

switch(activity) {
  case "Levantarse":
    console.log("son las 6:30 a.m.");
    break;
  case "Desayuno":
    console.log("son las 7:00 a.m.");
    break;
  case "Conducir al trabajo":
    console.log("son las 8:00 a.m.");
    break;
  case "Almuerzo":
    console.log("son las 12:00PM");
    break;
  case "Conducir a casa":
    console.log("son las 5:00 p. m.");
    break;
  case "Cena":
    console.log("son las 18:30");
break; }


El caso default

Esto funciona de manera muy parecida a la parte else de una declaración if else. Si no encuentra una coincidencia con ninguno de los casos y hay un caso predeterminado, entonces
ejecutará el código asociado con el caso predeterminado

sintaxis
switch(expression) {
  case value1:
    // codigo a ejecutar
    break;
  case value2:
    // codigo a ejecutar
    break;
  case value-n:
    // codigo a ejecutar
    break;
  default:
    // codigo a ejecutar cuando ningún caso coincide
break; }


Combinando casos

A veces, querrá hacer exactamente lo mismo para varios casos. En una instrucción if, tendría que especificar todas las cláusulas diferentes o (||). En una declaración de switch, simplemente puede combinarlos colocándolos uno encima del otro de esta manera:

switch(grade){
  case "F":
  case "D":
    console.log("¡Has fallado!");
    break;
  case "C":
  case "B":
    console.log("¡Has pasado!");
    break;
  case "A":
    console.log("Bien!");
    break;
  default:
    console.log("No conozco este grado.");
}

asi seria en if else
if(grade === "F" || grade === "D") {
  console.log("You've failed!");
} else if(grade === "C" || grade === "B") {
  console.log("¡Has pasado!");
} else if(grade === "A") {
  console.log("Bien!");
} else {
  console.log("No conozco este grado");
}

*/