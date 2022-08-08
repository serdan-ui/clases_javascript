/*
Los arrays y sus propiedades :
    Son listas de valores.Estos valores pueden ser de cualquier tipo de dato que ya vimos.
     Suele ser muy útil almacenar múltiples valores dentro de una variable; por ejemplo, una lista de estudiantes, comestibles o puntajes de exámenes. Una vez que comience a escribir scripts, se encontrará con la necesidad de escribir arrays con mucha frecuencia; por ejemplo,  cuando desea tener una lista de opciones para presentar al usuario.


Creando Arrays
Hay 2 maneras de crear los arrays :
    1-  arr1 = new Array("purple", "green", "yellow");
    2-  arr2 = ["black", "orange", "pink"];
la segunda es la mejor forma de crear arrays.
JavaScript simplemente almacena todas las variables con su propio tipo de datos y valor en la matriz:

let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

que  sucede si define un array usando const. Puede cambiar los valores de un array constante, pero no puede cambiar el array en sí

const arr = ["hi there"];
arr[0] = "new value";
console.log(arr[0]);

arr = ["nope, now you are overwriting the array"];
no puedo asignarle un valor al array completo.
TypeError: Assignment to constant variable.

Acceder a elementos

Podemos acceder a su elementos haciedno referencia al indice de array.Javascript asigna un indice a cada valor del array.AL PRIMER VALOR SE LE ASIGANA 0, AL SEGUNDO 1 Y ASI SUSECIVAMENTE.
Si queremos 1 valor especifico segun su poscicion hacemos lo siguiente : 
     cars = ["Toyota", "Renault", "Volkswagen"];
     console.log(cars[0]); estoy accediendo al primer elemento

¿Qué pasa si usamos un índice negativo o un índice que es mayor que el número de valores que obtenemos?
En este caso recivirenmos un valor de undefined , por que no definimos valores para esas posciciones , pero no nos dara error.

Sobrescribir elementos
Se puede sobreescribir los elementos de un array .Ej 
cars[0] = "audi"

Propiedad length :
Esto devolverá la cantidad de valores que tiene el array , esto se logra agregando al final del nombre del array la palabra lenght:

    colors = ["black", "orange", "pink"]
    booleans = [true, false, false, true];
    emptyArray = [];
    console.log("Length of colors:", colors.length);
    console.log("Length of booleans:", booleans.length);
    console.log("Length of empty array:", emptyArray.length);

Tener en cuenta que la longitud es un numero mayor del indice , por que las posciciones comienzan en 0.
Entonces si quisieramos obtener el ultimo valor de un array seria  :
 lastElement = colors[colors.length - 1];

 Metodos de los arrays :
 También tenemos algunos métodos incorporados. Los métodos son funciones sobre un determinado objeto.En lugar de tener un valor, como las propiedades, realizan acciones.
 Vimos que podíamos agregar elementos usando nuevos índices. Esta no es la forma adecuada de hacerlo, ya que es fácil cometer errores y sobrescribir accidentalmente un determinado valor u omitir un determinado índice. La forma correcta es hacer esto con un método especial. Del mismo modo, también podemos eliminar elementos y ordenar los elementos en el array.
Agregar y reemplazar elementos
    podemos agregar elementos con el metodo push() : ej

    favoriteFruits = ["grapefruit", "orange", "lemon"];
    favoriteFruits.push("tangerine");

    el valor se agrega al ultimo del array.

    ¿qué sucede si desea agregar elementos en un índice determinado?
    podemos hacerlo por asignacion con el numero del indice como vimos antes o
    usar el metodo splice() ejemplo

    let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
    arrOfShapes.splice(2, 0, "square", "trapezoid");

    en este caso el array queda con 6 elementos .Por que el 2 es la poscicion donde voy a introducir los elementos ,"square", "trapezoid", el 0 es el numero de elemenetos que quiero eliminar a partir del indice anterioor.
    En este caso como es cero no elimino y agrego .

    Pero si quisiera reemplazar los valores .
     arrOfShapes.splice(2, 2, "square", "trapezoid");
    console.log(arrOfShapes);
    Ahora quedaria asi el array  [ 'circle', 'triangle', 'square', 'trapezoid' ]

    Tambien podemos agregar otro array a nuestro array  esto se realiza con concat() :

    Los elementos del primer array serán los primeros, y los elementos del argumento de concat() se concatenarán hasta el final:
        let arr5 = [1, 2, 3];
        let arr6 = [4, 5, 6];
        let arr7 = arr5.concat(arr6);
        console.log(arr7);  [ 1, 2, 3, 4, 5, 6 ]

        Borrando elementos : 
       La eliminación del último elemento se realiza con pop():


       La eliminación del primer elemento se puede hacer con shift().

       Array multidimensionales: los array pueden contener otros arrays en sus elementos 

       let someValues1 = [1, 2, 3];
        let someValues2 = [4, 5, 6];
        let someValues3 = [7, 8, 9];
        let arrOfArrays = [someValues1, someValues2, someValues3];

        Si desea acceder a los elementos del array interno, deberá especificar un índice dos veces:

        let value1 = arrOfArrays[0][1];

        arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
        let middleValue = arrOfArraysOfArrays[1][1][1];
*/


/*
tarea

1- Manipulación de un array
Tome el siguiente array:

 const theList = ['Laurence', 'Svekis', true, 35, null, undefined, ['one', 'two']];

Manipule su array utilizando varios métodos, como pop(), push(), shift() y unshift(), y transfórmelo en lo siguiente:

  ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

 El método unshift() agrega uno o más elementos al comienzo de una matriz y devuelve la nueva longitud de la matriz.

 sugerencia

 • Eliminar el primer elemento y el último elemento.
• Agregue FIRST al inicio de la matriz.
• Asigne hola mundo al valor del cuarto elemento.
• Asigne MEDIO al tercer valor de índice.
• Agregue ÚLTIMO a la última posición en la matriz.
• Enviarlo a la consola.

2- catálogo de productos de la empresa
En este proyecto, implementará una estructura de datos para un catálogo de productos y creará consultas para recuperar datos.


1. Cree una matriz para mantener un inventario de artículos de la tienda.
2. Cree tres artículos, cada uno con las propiedades de nombre, modelo, costo y cantidad.
3. Agregue los tres objetos a la matriz principal utilizando un método de matriz y luego registre la matriz de inventario en la consola.
4. Acceda al elemento de cantidad de su tercer artículo y regístrelo en la consola. Experimente agregando y accediendo a más elementos dentro de su estructura de datos.


*/