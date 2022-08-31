// la herencia permite que nuevos objetos adquieran propiedades de objetos existentes

// esto nos permite evitar repetir código, por ejemplo si tenemos una clase de programador y persona, podríamos evitar repetir el nombre y el apellido


// function Persona () {
//   this.nombre = ""
//   this.apellido = ""
// }

// function Programador() {
//   this.lenguaje = ""
// }

// podemos heredar propiedades de Persona como nombre y apellido

//crear un nuevo programador
// const programador = new Programador()

// programador.nombre = "Sergio"
// programador.apellido = "Rosales"
// programador.lenguaje = "javascript"

// and with classes

class Persona {
    constructor(nombre, apellido) {
      this.nombre = nombre
      this.apellido = apellido;
    }
  }
  
  
  class Programador extends Persona {
    constructor(lenguaje) {
      super()
      this.lenguaje = lenguaje;
    }
  }
  
  const programador = new Programador()
  programador.nombre = "Sergio"
  programador.apellido = "Rosales"
  programador.lenguaje = "Javascript"
  