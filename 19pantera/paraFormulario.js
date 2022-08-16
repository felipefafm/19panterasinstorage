

class Postulante {
  constructor(nombre, apellido, apodo, rol) {
    this.nombre = nombre
    this.apellido = apellido
    this.apodo = apodo
    this.rol = rol

  }

}
const postulante1 = new Postulante("pepito", "grillo", "antrax", "fusilero");
// const escuadras=[postulante1]
// console.log(escuadras);


function agregarIntegrante() {
  let nombreNuevoI = document.getElementById("specificSizeInputName");
  let apellidoNuevoI = document.getElementById(
    "specificSizeInputLastName"
  );
  let apodoNuevoI = document.getElementById("specificSizeInputGroupApodo");
  let rolNuevoI = document.getElementById("specificSizeSelect");
  //  const escuadras=[]

  const nuevoIntegrante = new Postulante(
    nombreNuevoI.value,
    apellidoNuevoI.value,
    apodoNuevoI.value,
    rolNuevoI.value, escuadras.length + 1,
  );
  /**nuevos postulantes */

  escuadras.push(nuevoIntegrante)
  console.log(escuadras);
}
const escuadras = [];
//

let boton = document.getElementById("enviar"); boton.addEventListener("click", agregarIntegrante);
console.log(escuadras)
/**--------------------------------------------------------------------------------------------------- */
// Guardar el array en el localStorage

// El arreglo:
escuadras
// Se guarda en localStorage despues de JSON stringificarlo 
localStorage.setItem('myArray', JSON.stringify(escuadras));

// Obtener el arreglo de localStorage

let array = localStorage.getItem('myArray');
// Se parsea para poder ser usado en js con JSON.parse :)
array = JSON.parse(array);

sessionStorage.setItem("escuadra",escuadras)