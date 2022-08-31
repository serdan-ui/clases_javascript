// prototype nos permite cambiar la estructura de la clase despues de la creacion

class Persona {

    constructor(nombre, apellido) {
     
        this.nombre = nombre;
        this.apellido = apellido;
        this.ubicacion = "Tucuman";
     
    }

    //metodos
    method1() {}
    method2() {}
    sumar(numero1, numero2) {
      return numero1 + numero2
     }
  }


  Persona.prototype.edad = 100

  Persona.prototype.saludar = function () {
    return "Hola"
  }

  Persona.prototype.despedirse = function () {
    return "CHAU"
  }

  
  let sergio = new Persona("sergio", "rosales");
  let juan = new Persona("juan", "perez");
  let gaston = new Persona("gaston", "luna");


  //aqui agreego un metodo que no existia en la clase Persona
  //pero solo esta disponible para gaston
  // gaston.saludar = function () {
  //   return "Hola soy " + this.nombre + " " + this.apellido;
  // }

  Persona.prototype.sumar = function (num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3
  }
  // console.log(gaston.saludar())
  // console.log(juan)
  // console.log(sergio)

  // si quiero agregar el metodo para la clase tengo quie usar el prototype

  Persona.prototype.saludar = function () {
    return "Hola soy " + this.nombre + " " + this.apellido;
  }

  String.prototype.toLowerCase = function () {
    return "hola"
  }

  let nico = new Persona("nicolas", "viruel")
  //Ahora saludar es un nuevo metodo de Persona
  // console.log(gaston.saludar())
  // console.log(juan.saludar())
  // console.log(sergio.saludar())

  // console.log(gaston)
  // console.log(sergio)
  console.log(nico)

  console.log(sergio.sumar(5,5))

