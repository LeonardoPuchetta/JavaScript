'use strict'


// ccollecion de tipos de datos o valores 

// definido con corchetes
var nombres = ["Loco" , "Malo" , "Feo" , "Uruguay" , "Esparta",562,95 ];

// definicion con palabras new y array
var lenguajes = new Array ("php","js","Java","Phyton"); 

/*
console.log(lenguajes); 
console.log(nombres); 

console.log(lenguajes.length);

var elemento = parseInt(prompt("elemento del array elegido ",0 ));

if (elemento >=nombres.length ) {

    alert("introduce un numero valido menor que " + nombres.length)
} 
else 

alert("El nombre seleccionado es : " + nombres[elemento]); 
 */

// recorrida de un array  completo 
/*
document.write("<h1>Lenguajes de programacion utilizados </h1>");

for (var i=0 ; i< lenguajes.length; i++){

document.write("<li>"+ lenguajes[i] + "</li>");

}
*/

// usando forEach

lenguajes.forEach((elemento, indice)=> {

    document.write("<li>"+ indice + "- " + elemento + "</li>");

});

document.write("</ul>");


