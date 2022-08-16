/**clase para crear instancias de los integrantes de cada escuadra y futuros postulantes */
class integrante {
  constructor(nombre, apellido, apodo, rol) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.apodo = apodo),
      (this.rol = rol);
  }
}
//insatancias de integrantes
//escuadra alpha
const intAlpha1 = new integrante(
  "Juan",
  "Exposito",
  "CPL.DUNTON",
  "lider de escuadra"
);
const intAlpha2 = new integrante(
  "jorge",
  "Miranda",
  "CPL.HIPSTER",
  "Ametrallador"
);
const intAlpha3 = new integrante(
  "Martin",
  "Fierro",
  "SPC.MARTIN",
  "Tirador designado"
);
const intAlpha4 = new integrante("Pedro", "Roqueta", "SPC.VENADO", "Medico");
const intAlpha5 = new integrante("Felipe", "Flores", "PFC.FENIX", "Antitanque");
const intAlpha6 = new integrante(
  "Maximiliano",
  "Fernandez",
  "PVT.BRARAGON",
  "Fusilero"
);
const intAlpha7 = new integrante(
  "Abraham",
  "Tenorio",
  "PVT.ABRAHAM",
  "Fusilero"
);
const intAlpha8 = new integrante("Neate", "cole", "PVT.NEATE", "Fusilero");
const intAlpha9 = new integrante(
  "Isaac",
  "Hermosilla",
  "PVT.ISAAC",
  "fusilero"
);
//escuadra bravo
const intBravo1 = new integrante(
  "Luis",
  "Kenny",
  "SGT.KENNY",
  "Lider de escuadra"
);
const intBravo2 = new integrante(
  "Facundo",
  "Gonzales",
  "CPL.FAQU",
  "Granadero"
);
const intBravo3 = new integrante(
  "Fernando",
  "Amestica",
  "SPC.FERNANDO",
  "Ametrallador"
);
const intBravo4 = new integrante("Pablo", "Luisini", "SPC.OSLOP", "Medico");
const intBravo5 = new integrante("Ramiro", "Ramirez", "PFC.RANA", "Antitanque");
const intBravo6 = new integrante("Lorenzo", "Lamela", "PV2.LOBO", "Granadero");
const intBravo7 = new integrante("Javier", "Barbieri", "PV2.PHOENIX", "Medico");
const intBravo8 = new integrante(
  "Facundo",
  "Sierra",
  "PVT.ARGEENTI",
  "Fusilero"
);
const intBravo9 = new integrante(
  "Andres",
  "Martinez",
  "PVT.ZAMIEL",
  "Tirador designado"
);

//escuadra charlie
const intCharlie1 = new integrante(
  "Facundo",
  "Maradona",
  "SSG.MARADONA",
  "Lider de escuadra"
);
const intCharlie2 = new integrante("Damian", "Scoco", "SPC.DUKI", "Ingeniero");
const intCharlie3 = new integrante(
  "Pedro",
  "Lanziini",
  "PFC.PEDRO",
  "Ingeniero"
);
const intCharlie4 = new integrante("Adrian", "Iturbe", "PFC.ADRIAN", "Medico");
const intCharlie5 = new integrante(
  "Santiago",
  "Dominguez",
  "PFC.SANTIAGO",
  "Tirador designado"
);
const intCharlie6 = new integrante(
  "Maximiliano",
  "Martinez",
  "PV2.MAX MAD",
  "Ametrallador"
);
const intCharlie7 = new integrante(
  "Fabian",
  "Orsini",
  "PV2.MULDON",
  "Fusilero"
);
const intCharlie8 = new integrante(
  "Lazaro",
  "Henriquez",
  "PVT.LAZARO",
  "Medico"
);
const intCharlie9 = new integrante(
  "Alfonso",
  "De rossi",
  "PVT.DEROSSI",
  "Antitanque"
);
const intCharlie10 = new integrante(
  "Domingo",
  "Sagredo",
  "PVT.VIDOLF",
  "Fusilero"
);
const intCharlie11 = new integrante(
  "Leroy",
  "Rochetta",
  "PVT.LEROY",
  "Fusilero"
);

//Escuadra Alpha-integrantes
const escuadraAlpha = [
  intAlpha1,
  intAlpha2,
  intAlpha3,
  intAlpha4,
  intAlpha5,
  intAlpha6,
  intAlpha7,
  intAlpha8,
  intAlpha9,
];
//Escuadra Bravo-integrantes
const escuadraBravo = [
  intBravo1,
  intBravo2,
  intBravo3,
  intBravo4,
  intBravo5,
  intBravo6,
  intBravo7,
  intBravo8,
  intBravo9,
];
//Escuadra Charlie-integrantes
const escuadraCharlie = [
  intCharlie1,
  intCharlie2,
  intCharlie3,
  intCharlie4,
  intCharlie5,
  intCharlie6,
  intCharlie7,
  intCharlie8,
  intCharlie9,
  intCharlie10,
  intCharlie11,
];
//Peloton y sus escuadras
const pelotonDallas = [escuadraAlpha, escuadraBravo, escuadraCharlie];
console.log(pelotonDallas);

/**------------------------------------------------------------ */
// Declaracion de Metodos
/**------------------------------------------------------------ */
//agrega un integrante a la escuadra
// function agregIntegrante() {
//   let nombreNuevoI = prompt("ingrese nombre del nuevo integrante: ");
//   console.log(nombreNuevoI);
//   let apellidoNuevoI = prompt("ingrese apellido del nuevo integrante:");
//   console.log(apellidoNuevoI);
//   let apodoNuevoI = prompt("ingrese el apodo del integrante:");
//   console.log(apodoNuevoI);
//   let rolNuevoI = prompt("ingrese rol nuevo integrante:");
//   console.log(rolNuevoI);

//   const nuevoIntegrante = new integrante(
//     nombreNuevoI,
//     apellidoNuevoI,
//     apodoNuevoI,
//     rolNuevoI
//   );
//   const postulantes = [];

//   postulantes.push(nuevoIntegrante); // falta para bravo y charlie
//   // console.log(escuadra.length)
//   console.log(postulantes);
// }
/**Metodo para que el postulante escoja la escuadra a postular */
// function opcEscuadra(nuevoIntegrante) {
//   let opc = parseInt(
//     prompt(
//       " Ingrese el numero de la escuadra a la que quiera postular: 1-Alpha 2-Bravo 3-Charlie "
//     )
//   );
//   if (opc === 1) {
//     escuadraAlpha.push(nuevoIntegrante);
//     console.log(escuadraAlpha);
//     console.log("su postulacion a la escuadra Alpha a sido ingresada");
//   }
//   if (opc === 2) {
//     escuadraBravo.push(nuevoIntegrante);
//     console.log(escuadraBravo);
//     console.log("su postulacion a la escuadra Bravo a sido ingresada");
//   }
//   if (opc === 3) {
//     escuadraCharlie.push(nuevoIntegrante);
//     console.log(escuadraCharlie);
//     console.log("su postulacion a la escuadra Charlie a sido ingresada");
//   } else {
//     console.log("Hasta pronto");
//   }
// }
/**Aca voy a ejecutar las funciones---------------------------- */
//capturar en un evento button
// let resp = prompt("Desea agregar postulacio a una escuadra? s/n");

// if (resp === "s") {
  // agregIntegrante();
  // console.log("Gracias por postular a nuestro clan !!");
  // opcEscuadra();
// } else {
//   console.log("Puedes seguir mirando nuestra pagina ");
// }
//forma semantica
// let botonCharlie = document.getElementById("BotonC")
// console.log(botonCharlie);
// botonCharlie.onclick=agregIntegrante;

// // addEventListener
// let botonAlpha =document.getElementById("BotonA")
// console.log(botonAlpha);
// botonAlpha.addEventListener=agregIntegrante,opcEscuadra
