'use strict'



// transformacion de texto 

var texto1 = "Bienvenido a mi casa, mi casa es tu casa ";
var numero = 444 ;  
var texto2 = "Gracias por todo , chau  ";

// busqueda de palabra en un texto 

var busqueda= texto1.lastIndexOf("casa") ; 
//saca la ultima coincidencia en caso de que existiera 

console.log(busqueda); 

var busqueda2= texto1.search("casa") ; 
//tambien se puede utilizar search 

console.log(busqueda2); 

var busqueda3= texto1.match(/casa/gi) ; 
//tambien se puede utilizar match , que devuelve un array con todas las coincidencias

console.log(busqueda3); 

var busqueda4= texto1.substr(14,5) ; // desde el caracter 14 sacara 5 caracteres
//tambien se puede utilizar substr para seleccionar caracteres  

console.log(busqueda4);

var busqueda5= texto1.charAt(5) ; 
//para seleccionar un caracter en una posicion concreta  

console.log(busqueda5);

var busqueda6= texto1.startsWith("Bien") ; 
//devuelve true si encuentra el texto indicado al inicio de texto1  

console.log(busqueda6);


var busqueda7= texto1.includes("casa") ; 
//devuelve true si encuentra el texto indicado en texto1  

console.log(busqueda7);
