const bom = window

// let location = bom.location

// let navigator = bom.navigator


// const funcionFlecha = () => {

// }



// el setInterval nos ejecuta un bloque de codigo , cada cierto tiempo que le indiquemos
// setInterval( function () {
//     window.location.reload(true)
// }, 60000)

// window.setInterval( function () {
    
//         location.reload(true)
//     }, 2000)


// setTimeout() nos ejecuta un bloque de codigo una sola vez , dentro del tiempo que le indiquemos

// 1dias * 24 * 60 * 60 * 1000

//new Date('Jul 02, 2019 16:38:00').getTime()


const bodyInicial = document.body
// window.setTimeout(functionName(),tiempo);
// document.body.innerHTML = "Ejemplo";

//seleccionadores de elementos por id y ppor clases
// const titulo = document.getElementById("titulo")
// const parrafo = document.getElementsByClassName("texto")


//seleccionadores de elementos con queryselector
// const titulo = document.querySelector("#titulo")
// const parrafo = document.querySelector(".texto")

//seleccionar elementos mediante etiquetas
const titulo = document.getElementsByTagName("h1")
const titulo1 = document.getElementById("titulo")

titulo1.innerHTML = "CAMBIE"


// console.log('soy el titulo', titulo)
// console.log('soy el parrafo', parrafo)

let nuevoElemento = document.createElement("h3")
nuevoElemento.innerHTML = "me cree desde el javascript"
nuevoElemento.style.color= "red"
nuevoElemento.style.border= "1px solid black"
nuevoElemento.style.padding = "10px"
nuevoElemento.className = "texto"

document.body.appendChild(nuevoElemento)
document.body.appendChild(nuevoElemento.cloneNode(true))
// console.log(nuevoElemento)

const elementDiv = document.getElementById("contenedor");
elementDiv.appendChild(nuevoElemento)

// nuevoElemento.style.display = "none"

// document.body.appendChild(elementDiv.cloneNode(true))

const pDentroDeDiv = elementDiv.getElementsByClassName("texto")[0]
console.log(pDentroDeDiv)

const removed = elementDiv.removeChild(pDentroDeDiv)



let nombreUsuario = prompt("Ingrese el nombre")

let elemento = document.createElement("h1")
elemento.innerHTML = nombreUsuario;

document.body.appendChild(elemento)