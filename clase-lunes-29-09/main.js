class Libro {
    constructor(){
        this.isbn
        this.titulo
        this.autor
        this.numero_paginas
    }

    get obtnerISBN() {
        if (this.isbn) {
            return this.isbn
        }else {
            return "setee el isbn antes de obtenerlo"
        }
        
    }

    set establecerISBN(value) {
        this.isbn = value
    }

    get obtnerTitulo() {
        if (this.titulo) {
            return this.titulo
        }else {
            return "setee el titulo antes de obtenerlo"
        }
        
    }

    set establecerTitulo(value) {
        this.titulo = value
    }

    get obtnerAutor() {
        if (this.autor) {
            return this.autor
        }else {
            return "setee el autor antes de obtenerlo"
        }
        
    }

    set establecerAutor(value) {
        this.autor = value
    }

    get obtnerNumPaginas() {
        if (this.numero_paginas) {
            return this.numero_paginas
        }else {
            return "setee el numero paginas antes de obtenerlo"
        }
        
    }


    set establecerNumPaginas(value) {
        this.numero_paginas = value
    }

}
 const libro1 = new Libro();
 const libro2 = new Libro();

//  console.log(libro.obtnerISBN)

 libro1.establecerISBN= 165165156165;
 libro1.establecerAutor = "alan Chibilisco";
 libro1.establecerTitulo = "Programacion para rolling";
 libro1.numero_paginas = 400;


 libro2.establecerISBN= 15165165156;
 libro2.establecerAutor = "Nico viruel";
 libro2.establecerTitulo = "Como mejorar las rodilla";
 libro2.numero_paginas = 1000;

 

 Libro.prototype.mostraLibro = function () {
    return "El libro " + this.obtnerTitulo + " con ISBN "+
    this.obtnerISBN + " creado por el autor "+ this.obtnerAutor + 
    " tiene paginas " + this.obtnerNumPaginas 
 }

 console.log(libro1.mostraLibro())
 console.log(libro2.mostraLibro())

 function compararCantidadPaginas(lib1, lib2) {
    
const max = lib1.obtnerNumPaginas > lib2.obtnerNumPaginas ? lib1.obtnerTitulo : lib2.obtnerTitulo

console.log("El libro con mas paginas es : " + max)
  

   

 }

 compararCantidadPaginas(libro1, libro2)
