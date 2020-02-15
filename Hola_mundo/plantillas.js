'use strict'



// plantillas de texto 

var nombre = prompt("introduce un nombre "); 
var apellidos = prompt("introduce tus apellidos")

// utilizo comillas invertidas para ingresar una plantilla 
// en una multilinea 
var texto = `
 <h1> Datos del usuario  </h1>
 <h3> Mi nombre es : ${nombre} </h3>
 <h3> Mis apellidos son  : ${apellidos} </h3>

`;

document.write(texto);
