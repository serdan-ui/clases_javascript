// el metodo basado en convenciones permite acceder a la propiedad de todos modos
// así que arreglar este metodo no es usar propiedades para miembros internos
// pero variables en el constructor

function Cine() {
    const asientos = [];
  
    this.asientoPersona = function (persona) {
      asientos.push(persona);
    };
  }
  const cine = new Cine();

  cine.asientoPersona({ nombre: "Sergio", apellido: "Rosales" })

// console.log(cine)

class Cine2 {

    constructor (nombre){
        this.nombre = nombre
    }

    asientoPersona(persona) {
        const asientos = [];

      return  function (persona) {
            asientos.push(persona);
            };
    }
}

const cine2 = new Cine2("rolling")
cine2.asientoPersona({ nombre: "Sergio", apellido: "Rosales" })

console.log(cine2)

  // Scope y closure
  // const saludo = "Hola";
  
  // function saludar(persona) {
  //   const nombreCompleto = persona.nombre + " " + persona.apellido;
  
  //   function mostrarSaludo() {
  //     console.log(saludo + " " + nombreCompleto);
  //   }
  
  //   mostrarSaludo();
  // }
  
  // saludar({ nombre: "Ryan", apellido: "Ray" });

//   const saludo = "Hasta luego";
//   let mostrarSaludo;
  
//   function saludar(persona) {
//     const nombreCompleto = persona.nombre + " " + persona.apellido;
  
//     return function () {
//       console.log(saludo + " " + nombreCompleto);
//     };
//   }
  
//   mostrarSaludo = saludar({ nombre: "Sergio", apellido: "Rosales" });
//   mostrarSaludo();
  