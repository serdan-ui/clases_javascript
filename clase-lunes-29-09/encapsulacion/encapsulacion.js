//la encapsulación consiste en ocultar la complejidad y la funcionalidad y propiedades del grupo


  class Campus {
    constructor(nombre) {
      this.nombre = nombre;
      ð 
    }
  
    get getEmpleados() {
      return this.empleados;
    }
  
   set agregarEmpleados(empleado) {
      this.empleados.push(empleado);
    }
  
    sortEmpleados() {}
  }


//   campus.empleados = "some random string";

  //campus.sortEmpleados() da error
  const persona = {
    nombre: "sergio",
    apellido: "rosales",
    ubicacion: "Tucuman"
  }
  // const rolling = new Campus("Rolling code")
  // rolling.agregarEmpleados = persona

  // console.log(  rolling.getEmpleados )
  // console.log(  rolling )

  
//getters y setters
  class User {

    get getName() {
      return this._name;
    }
  
    set setName(value) {
      if (value.length < 4) {
        alert("El nombre es demasiado corto, necesita al menos 4 caracteres");
        return;
      }
      this._name = value;
    }
  };
  const user = new User()
  user.setName = "sergio"

  console.log(user.getName) 