// todas las propiedades y métodos son accesibles al público
// así que hay algún metodo para tratar de resolver este problema

// metodo de base de convención

// podemos usar el símbolo de guión bajo para los miembros internos
// esto es solo una convención, técnicamente podemos acceder a las propiedades de todos modos

function Cine() {
    this._asientos = [];
  }
  
  Cine.prototype.asientoPersona = function (persona) {
    this._asientos.push(persona);
  };
  
  const Cine = new Cine();
  Cine.asientoPersona({ nombre: "Sergio", apellido: "Rosales" });
  
  console.log(Cine)