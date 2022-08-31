class User {
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
    }
    saludar(){
      return "hola soy " + this.nombre + " " +this.apellido
    }
  }
  
  class Programmer extends User {
    constructor(lenguaje, nombre, apellido) {
      super(nombre, apellido);
      
      this.lenguaje = lenguaje;
    }
  }
  class Electricista extends User {
    constructor(herramientas, nombre, apellido) {
      super(nombre, apellido);
      
      this.herramientas = herramientas;
    }
  }
  class Plomero extends User {
    constructor(lenguaje, nombre, apellido) {
      super(nombre, apellido);
      
      this.lenguaje = lenguaje;
    }
  }
  
  const sergio = new Programmer("Javascript", "sergio", "rosales");
  const juan = new Electricista(["destornillador"], "juan", "rosales");
